export class Slider {
    constructor(el) {
        this.$el = el;
    }

    render(options = {}) {
        this.slides = options.slides;
        this.$el.innerHTML = `<div class="swiper-wrapper"></div>`;
        this.$wrap = this.$el.firstElementChild;
        this.$wrap.innerHTML =this.slides.map(slide =>
            `<a href="${slide.link}" class="swiper-slide">
                <img src="${slide.image}">
            </a>`
        ).join('')
        this.$burster = document.createElement('div');
        this.$burster.setAttribute('class','swiper-pagination');
        this.$el.appendChild(this.$burster);
        this.swiper = this.initSwiper();
    }

    initSwiper() {
        return new Swiper('.swiper-container', {
            direction: 'horizontal',
            loop: true,
            autoplay: true,

            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
            }
        });
    }
}