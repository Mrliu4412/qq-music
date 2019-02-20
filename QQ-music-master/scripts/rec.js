import { RECOMMEND_URL } from "./constans.js";
import { Slider } from "./slider.js";
import {Lazyload} from "./lazyload.js";

export class Recommend {
    constructor(el) {
        this.$el = el;
        this.lazy = new Lazyload();
    }

    launch(){
        fetch(RECOMMEND_URL)
            .then(respons => respons.json())
            .then(json => this.json = json)
            .then(() => this.render());
    }

    render(){
        this.renderSlider(this.json.data.slider);
        this.renderRadios(this.json.data.radioList);
        this.renderhotSongs(this.json.data.songList);
        this.lazy.lazyload();
    }

    renderSlider(slides) {
        this.slider = new Slider(document.querySelector('#slider'));
        this.slider.render({
            slides: slides.map(slide => ({
                link: slide.linkUrl.replace('http://', 'https://'),
                image: slide.picUrl.replace('http://', 'https://')
            }))
        })
    }

    renderRadios(radios) {
        this.$el.querySelector('.radios .list').innerHTML = radios.map(radio =>
            `<div class="listItem">
            <div class="listMedia">
                <img data-src="${radio.picUrl}" alt="图片" class="lazyload">
                <span class="icon icon_play"></span>
            </div>
            <div class="listTitle">${radio.Ftitle}</div>
        </div>`).join('')
    }

    renderhotSongs(radios) {
        this.$el.querySelector('.hotSongs .list').innerHTML = radios.map(list =>
            `<div class="listItem">
            <div class="listMedia">
                <img data-src="${list.picUrl}" alt="图片" class="lazyload">
                <span class="icon icon_play"></span>
            </div>
            <div class="listTitle">${list.songListDesc}</div>
        </div>`).join('')
    }
}
