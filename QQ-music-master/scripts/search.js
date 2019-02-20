import { searchUrl } from "./helper.js";

export class Search {
    constructor(el) {
        this.$el = el;
        this.$input = this.$el.querySelector('#search');
        this.$input.addEventListener('keyup', this.onKeyUp.bind(this));
        this.$loadingView = el.querySelector('.searchLoading');
        this.$songs = el.querySelector('.songList');
        this.keyword = '';
        this.page = 1;
        this.songs = [];
        this.perpage = 20;
        this.nomore = false;
        this.fetching = false;
        this.onscroll = this.onScroll.bind(this);
        window.addEventListener('scroll', this.onscroll);
    }

    onKeyUp(e) {
        let keyword = e.target.value.trim();
        if (!keyword) return this.reset();
        if (e.keyCode !== 13) return;
        this.keyword = keyword;
        this.search(this.keyword, this.page);
    }

    onScroll(e) {
        if (this.nomore) return window.removeEventListener('scroll' , this.onscroll);
        if (document.documentElement.clientHeight + pageYOffset >= document.body.clientHeight - 50) {
            this.search(this.keyword, this.page + 1);
        }
    }

    reset() {
        this.keyword = '';
        this.page = 1;
        this.songs = [];
        this.perpage = 20;
        this.$songs.innerHTML = '';
        this.$loadingView.querySelector('.loadingComplete').classList.add('hide');
    }

    search(keyword, page) {
        if (this.fetching) return;
        this.loading();
        fetch(searchUrl(keyword,page || this.page))
            .then(res => res.json())
            .then(json => {
                this.page = json.data.song.curpage;
                this.nomore = json.message === 'no results';
                this.songs.push(...json.data.song.list);
                return json.data;
            })
            .then(datas => this.append(datas))
            .then(() => this.loadingComplete())
            .catch(() => this.fetching = false)
    }
    append(datas) {
        let songs = datas.song.list;
        this.$songs.insertAdjacentHTML('beforeend', songs.map((song , i) => {
            let artist = song.singer.map(s => s.name).join(' ');
            return i===0 ?
                    `<div class="songItem">
                        <img src="https://y.gtimg.cn/music/photo_new/T001R68x68M000${datas.zhida.singermid}.jpg?max_age=2592000" class="titleImg">
                        <div class="songname">${datas.zhida.singername}</div>
                        <div class="singers">单曲：${datas.zhida.songnum} 专辑：${datas.zhida.albumnum}</div>
                   </div>
                    <a href="#player?artist=${artist}&songmid=${song.songmid}&songid=${song.songid}&songname=${song.songname}&albummid=${song.albummid}&duration=${song.interval}" class="songItem">
                        <span class="iconMusic"></span>
                        <div class="songname">${song.songname}</div>
                        <div class="singers">${artist}</div>
                   </a>`: `<a href="#player?artist=${artist}&songmid=${song.songmid}&songid=${song.songid}&songname=${song.songname}&albummid=${song.albummid}&duration=${song.interval}" class="songItem">
                <span class="iconMusic"></span>
                <div class="songname">${song.songname}</div>
                <div class="singers">${artist}</div>
                </a>`;
        }).join(''));
    }

    loading(){
        this.fetching = true;
        this.$loadingView.querySelector('.loading').classList.remove('hide');
    }
    loadingComplete(){
        this.fetching = false;
        if(this.nomore){
            this.$loadingView.querySelector('.loading').classList.add('hide');
            this.$loadingView.querySelector('.loadingComplete').classList.remove('hide');
        }else{
            this.$loadingView.querySelector('.loading').classList.add('hide');
        }
    }
}
