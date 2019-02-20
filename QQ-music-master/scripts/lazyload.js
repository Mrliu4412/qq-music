export class Lazyload{
    constructor(){
        this.$els = '';
        this.imags = '';
    }

    observerLoad(){
        this.observer = new IntersectionObserver( (entries) => {
                entries.forEach(entry => {
                    if (entry.intersectionRatio > 0) {
                        this.loadingImg(entry.target, () => {
                            this.observer.unobserve(entry.target)
                        })
                    }
                })
            }, {threshold: 0.01}
        );
        this.imags.forEach(img => this.observer.observe(img));
    }

    listenerLoad(){
        this.onscroll = this.throttle( () => {
            if(this.imags.length === 0){
                return window.removeEventListener('scroll',this.onscroll);
            }
            this.imags.forEach(img =>this.inViewport(img) && this.loadingImg(img));
        },250);
        window.addEventListener('scroll',this.onscroll);
    }

    lazyload(){
        this.$els = document.querySelectorAll('.lazyload');
        this.imags = [].slice.call(this.$els);
        if('IntersectionObserver' in window){
            this.observerLoad();
        } else {
            this.listenerLoad();
        }
    }

    inViewport(img) {
        let {top , left , right , bottom} = img.getBoundingClientRect();
        let vpHeight = document.documentElement.clientHeight;
        return (top > 0 && top < vpHeight || bottom > 0 && bottom < vpHeight);
    }

    loadingImg(img , callback) {
        let image = new Image();
        image.src = img.dataset.src;
        image.onload = function () {
            img.src = image.src;
            img.classList.remove('lazyload');
            if(typeof callback === 'function')callback();
        }
    }

    throttle(func , wait) {
        let previous , timer;
        return function fn() {
            let current = Date.now();
            let diff = current - previous;
            if(!previous || diff >= wait){
                func()
                previous = current;
            }else if(diff < wait){
                clearTimeout(timer);
                timer = setTimeout(fn , wait - diff);
            }
        }
    }
}