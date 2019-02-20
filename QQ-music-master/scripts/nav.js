import { Slider } from "./slider.js";

export class Navbar{
    constructor(el){
        this.$el = el;
        this.$navList = this.$el.querySelector('.navList');
        this.$main = document.querySelector('main');
        this.$el.addEventListener('click' , this.tab.bind(this))
        this.init(2);
        this.slide = new Slider(document.querySelector('#slider'))
    }

    tab(ev){
        let target = ev.target;
        this.removeActive();
        target.classList.add('active');
        if(target.dataset.role !== 'tabs') return;
        this.addHide();
        this.$view = this.$main.querySelector(target.dataset.view);
        this.$view.classList.remove('hide');
        window.dispatchEvent(new Event('scroll'));
        this.slide.initSwiper();
    }

    removeActive(){
        [].forEach.call(this.$navList.children, child=>{
            child.classList.remove('active');
        });
    }

    addHide(){
        [].forEach.call(this.$main.children, child=>{
            child.classList.add('hide');
        })
    }

    init(item){
        this.removeActive();
        this.addHide();
        this.$navList.children.item(item).classList.add('active');
        this.$main.children.item(item).classList.remove('hide');
    }
}
