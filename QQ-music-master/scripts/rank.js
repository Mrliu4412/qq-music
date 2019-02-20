import { TOPLIST_URL } from "./constans.js";
import {Lazyload} from "./lazyload.js";

export class RankingList{
    constructor(el){
        this.$el = el;
        this.lazy = new Lazyload();
    }

    launch(){
        fetch(TOPLIST_URL)
            .then(respons => respons.json())
            .then(json => this.json = json)
            .then(() => this.render());
    }

    render(){
        this.renderTopList(this.json.data.topList);
        this.lazy.lazyload();
    }

    renderTopList(tops) {
        this.$el.querySelector('.topList').innerHTML = tops.map(top =>
            `<li class="topListItem clearFix">
                <div class="topItemMedia">
                    <img data-src="${top.picUrl}" class="lazyload">
                </div>
                <div class="topItemInfo">
                    <div class="topContent">
                        <h3 class="topTitle">${top.topTitle}</h3>
                        ${this.songList(top.songList)}
                    </div>
                </div>
            </li>`
        ).join('');
    }

    songList(songs) {
        return songs.map((song , index) => `<p class="topText">${index+1}<span class="songName">${song.songname}</span>- ${song.singername}</p>`).join('');
    }
}