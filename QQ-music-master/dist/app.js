!function(e){function t(i){if(n[i])return n[i].exports;var s=n[i]={i:i,l:!1,exports:{}};return e[i].call(s.exports,s,s.exports,t),s.l=!0,s.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=4)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.RECOMMEND_URL="https://qq-music-api.now.sh",t.TOPLIST_URL="https://qq-music-api.now.sh/top",t.SEARCH_URL="https://qq-music-api.now.sh/search",t.LYRICS_URL="https://qq-music-api.now.sh/lyrics"},function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();t.Slider=function(){function e(t){i(this,e),this.$el=t}return s(e,[{key:"render",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.slides=e.slides,this.$el.innerHTML='<div class="swiper-wrapper"></div>',this.$wrap=this.$el.firstElementChild,this.$wrap.innerHTML=this.slides.map(function(e){return'<a href="'+e.link+'" class="swiper-slide">\n                <img src="'+e.image+'">\n            </a>'}).join(""),this.$burster=document.createElement("div"),this.$burster.setAttribute("class","swiper-pagination"),this.$el.appendChild(this.$burster),this.swiper=this.initSwiper()}},{key:"initSwiper",value:function(){return new Swiper(".swiper-container",{direction:"horizontal",loop:!0,autoplay:!0,pagination:{el:".swiper-pagination"}})}}]),e}()},function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();t.Lazyload=function(){function e(){i(this,e),this.$els="",this.imags=""}return s(e,[{key:"observerLoad",value:function(){var e=this;this.observer=new IntersectionObserver(function(t){t.forEach(function(t){t.intersectionRatio>0&&e.loadingImg(t.target,function(){e.observer.unobserve(t.target)})})},{threshold:.01}),this.imags.forEach(function(t){return e.observer.observe(t)})}},{key:"listenerLoad",value:function(){var e=this;this.onscroll=this.throttle(function(){if(0===e.imags.length)return window.removeEventListener("scroll",e.onscroll);e.imags.forEach(function(t){return e.inViewport(t)&&e.loadingImg(t)})},250),window.addEventListener("scroll",this.onscroll)}},{key:"lazyload",value:function(){this.$els=document.querySelectorAll(".lazyload"),this.imags=[].slice.call(this.$els),"IntersectionObserver"in window?this.observerLoad():this.listenerLoad()}},{key:"inViewport",value:function(e){var t=e.getBoundingClientRect(),n=t.top,i=(t.left,t.right,t.bottom),s=document.documentElement.clientHeight;return n>0&&n<s||i>0&&i<s}},{key:"loadingImg",value:function(e,t){var n=new Image;n.src=e.dataset.src,n.onload=function(){e.src=n.src,e.classList.remove("lazyload"),"function"==typeof t&&t()}}},{key:"throttle",value:function(e,t){var n=void 0,i=void 0;return function s(){var r=Date.now(),a=r-n;!n||a>=t?(e(),n=r):a<t&&(clearTimeout(i),i=setTimeout(s,t-a))}}}]),e}()},function(e,t,n){"use strict";function i(e){return"http://ws.stream.qqmusic.qq.com/C100"+e+".m4a?fromtag=0&guid=126548448"}function s(e){return o.LYRICS_URL+"?id="+e}function r(e){return"https://y.gtimg.cn/music/photo_new/T002R150x150M000"+e+".jpg"}function a(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return o.SEARCH_URL+"?keyword="+e+"&page="+t}Object.defineProperty(t,"__esModule",{value:!0}),t.songUrl=i,t.lyricsUrl=s,t.albumCoverUrl=r,t.searchUrl=a;var o=n(0)},function(e,t,n){"use strict";function i(){var e=location.hash;if(/^#player\?.+/.test(e)){var t=e.slice(e.indexOf("?")+1).match(/(\w+)=([^&]+)/g),n=t&&t.reduce(function(e,t){var n=t.split("=");return e[n[0]]=decodeURIComponent(n[1]),e},{});c.play(n)}else c.hide()}var s=n(5),r=n(6),a=n(7),o=n(8),l=n(9),c=(new s.Navbar(document.querySelector("#topNavbar")),new r.Recommend(document.querySelector("#recView")).launch(),new a.RankingList(document.querySelector("#rankingView")).launch(),new o.Search(document.querySelector("#searchView")),new l.MusicPlayer(document.querySelector("#player")));document.querySelector(".playButton").addEventListener("click",function(){c.show()}),i(),addEventListener("hashchange",i)},function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.Navbar=void 0;var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=n(1);t.Navbar=function(){function e(t){i(this,e),this.$el=t,this.$navList=this.$el.querySelector(".navList"),this.$main=document.querySelector("main"),this.$el.addEventListener("click",this.tab.bind(this)),this.init(2),this.slide=new r.Slider(document.querySelector("#slider"))}return s(e,[{key:"tab",value:function(e){var t=e.target;this.removeActive(),t.classList.add("active"),"tabs"===t.dataset.role&&(this.addHide(),this.$view=this.$main.querySelector(t.dataset.view),this.$view.classList.remove("hide"),window.dispatchEvent(new Event("scroll")),this.slide.initSwiper())}},{key:"removeActive",value:function(){[].forEach.call(this.$navList.children,function(e){e.classList.remove("active")})}},{key:"addHide",value:function(){[].forEach.call(this.$main.children,function(e){e.classList.add("hide")})}},{key:"init",value:function(e){this.removeActive(),this.addHide(),this.$navList.children.item(e).classList.add("active"),this.$main.children.item(e).classList.remove("hide")}}]),e}()},function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.Recommend=void 0;var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=n(0),a=n(1),o=n(2);t.Recommend=function(){function e(t){i(this,e),this.$el=t,this.lazy=new o.Lazyload}return s(e,[{key:"launch",value:function(){var e=this;fetch(r.RECOMMEND_URL).then(function(e){return e.json()}).then(function(t){return e.json=t}).then(function(){return e.render()})}},{key:"render",value:function(){this.renderSlider(this.json.data.slider),this.renderRadios(this.json.data.radioList),this.renderhotSongs(this.json.data.songList),this.lazy.lazyload()}},{key:"renderSlider",value:function(e){this.slider=new a.Slider(document.querySelector("#slider")),this.slider.render({slides:e.map(function(e){return{link:e.linkUrl.replace("http://","https://"),image:e.picUrl.replace("http://","https://")}})})}},{key:"renderRadios",value:function(e){this.$el.querySelector(".radios .list").innerHTML=e.map(function(e){return'<div class="listItem">\n            <div class="listMedia">\n                <img data-src="'+e.picUrl+'" alt="图片" class="lazyload">\n                <span class="icon icon_play"></span>\n            </div>\n            <div class="listTitle">'+e.Ftitle+"</div>\n        </div>"}).join("")}},{key:"renderhotSongs",value:function(e){this.$el.querySelector(".hotSongs .list").innerHTML=e.map(function(e){return'<div class="listItem">\n            <div class="listMedia">\n                <img data-src="'+e.picUrl+'" alt="图片" class="lazyload">\n                <span class="icon icon_play"></span>\n            </div>\n            <div class="listTitle">'+e.songListDesc+"</div>\n        </div>"}).join("")}}]),e}()},function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.RankingList=void 0;var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=n(0),a=n(2);t.RankingList=function(){function e(t){i(this,e),this.$el=t,this.lazy=new a.Lazyload}return s(e,[{key:"launch",value:function(){var e=this;fetch(r.TOPLIST_URL).then(function(e){return e.json()}).then(function(t){return e.json=t}).then(function(){return e.render()})}},{key:"render",value:function(){this.renderTopList(this.json.data.topList),this.lazy.lazyload()}},{key:"renderTopList",value:function(e){var t=this;this.$el.querySelector(".topList").innerHTML=e.map(function(e){return'<li class="topListItem clearFix">\n                <div class="topItemMedia">\n                    <img data-src="'+e.picUrl+'" class="lazyload">\n                </div>\n                <div class="topItemInfo">\n                    <div class="topContent">\n                        <h3 class="topTitle">'+e.topTitle+"</h3>\n                        "+t.songList(e.songList)+"\n                    </div>\n                </div>\n            </li>"}).join("")}},{key:"songList",value:function(e){return e.map(function(e,t){return'<p class="topText">'+(t+1)+'<span class="songName">'+e.songname+"</span>- "+e.singername+"</p>"}).join("")}}]),e}()},function(e,t,n){"use strict";function i(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.Search=void 0;var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),a=n(3);t.Search=function(){function e(t){s(this,e),this.$el=t,this.$input=this.$el.querySelector("#search"),this.$input.addEventListener("keyup",this.onKeyUp.bind(this)),this.$loadingView=t.querySelector(".searchLoading"),this.$songs=t.querySelector(".songList"),this.keyword="",this.page=1,this.songs=[],this.perpage=20,this.nomore=!1,this.fetching=!1,this.onscroll=this.onScroll.bind(this),window.addEventListener("scroll",this.onscroll)}return r(e,[{key:"onKeyUp",value:function(e){var t=e.target.value.trim();if(!t)return this.reset();13===e.keyCode&&(this.keyword=t,this.search(this.keyword,this.page))}},{key:"onScroll",value:function(e){if(this.nomore)return window.removeEventListener("scroll",this.onscroll);document.documentElement.clientHeight+pageYOffset>=document.body.clientHeight-50&&this.search(this.keyword,this.page+1)}},{key:"reset",value:function(){this.keyword="",this.page=1,this.songs=[],this.perpage=20,this.$songs.innerHTML="",this.$loadingView.querySelector(".loadingComplete").classList.add("hide")}},{key:"search",value:function(e,t){var n=this;this.fetching||(this.loading(),fetch((0,a.searchUrl)(e,t||this.page)).then(function(e){return e.json()}).then(function(e){var t;return n.page=e.data.song.curpage,n.nomore="no results"===e.message,(t=n.songs).push.apply(t,i(e.data.song.list)),e.data}).then(function(e){return n.append(e)}).then(function(){return n.loadingComplete()}).catch(function(){return n.fetching=!1}))}},{key:"append",value:function(e){var t=e.song.list;this.$songs.insertAdjacentHTML("beforeend",t.map(function(t,n){var i=t.singer.map(function(e){return e.name}).join(" ");return 0===n?'<div class="songItem">\n                        <img src="https://y.gtimg.cn/music/photo_new/T001R68x68M000'+e.zhida.singermid+'.jpg?max_age=2592000" class="titleImg">\n                        <div class="songname">'+e.zhida.singername+'</div>\n                        <div class="singers">单曲：'+e.zhida.songnum+" 专辑："+e.zhida.albumnum+'</div>\n                   </div>\n                    <a href="#player?artist='+i+"&songmid="+t.songmid+"&songid="+t.songid+"&songname="+t.songname+"&albummid="+t.albummid+"&duration="+t.interval+'" class="songItem">\n                        <span class="iconMusic"></span>\n                        <div class="songname">'+t.songname+'</div>\n                        <div class="singers">'+i+"</div>\n                   </a>":'<a href="#player?artist='+i+"&songmid="+t.songmid+"&songid="+t.songid+"&songname="+t.songname+"&albummid="+t.albummid+"&duration="+t.interval+'" class="songItem">\n                <span class="iconMusic"></span>\n                <div class="songname">'+t.songname+'</div>\n                <div class="singers">'+i+"</div>\n                </a>"}).join(""))}},{key:"loading",value:function(){this.fetching=!0,this.$loadingView.querySelector(".loading").classList.remove("hide")}},{key:"loadingComplete",value:function(){this.fetching=!1,this.nomore?(this.$loadingView.querySelector(".loading").classList.add("hide"),this.$loadingView.querySelector(".loadingComplete").classList.remove("hide")):this.$loadingView.querySelector(".loading").classList.add("hide")}}]),e}()},function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.MusicPlayer=void 0;var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=n(10),a=n(11),o=n(3);t.MusicPlayer=function(){function e(t){i(this,e),this.$el=t,this.$el.addEventListener("click",this),this.$audio=this.createAudio(),this.lyrics=new a.LyricsPlayer(this.$el.querySelector(".player-lyrics"),this.$audio),this.progress=new r.ProgressBar(this.$el.querySelector(".progress")),this.fetching=!1}return s(e,[{key:"createAudio",value:function(){var e=this,t=document.createElement("audio");return t.id="player-"+Math.floor(100*Math.random())+"-"+ +new Date,t.addEventListener("ended",function(){e.$audio.play(),e.lyrics.restart(),e.progress.restart()}),document.body.appendChild(t),t}},{key:"handleEvent",value:function(e){var t=e.target;switch(!0){case t.matches(".icon-play"):this.onPlay(e);break;case t.matches(".icon-pause"):this.onPause(e);break;case t.matches(".icon-list"):this.hide()}}},{key:"onPlay",value:function(e){this.fetching||(this.$audio.play(),this.lyrics.start(),this.progress.start(),e.target.classList.add("icon-pause"),e.target.classList.remove("icon-play"))}},{key:"onPause",value:function(e){this.$audio.pause(),this.lyrics.pause(),this.progress.pause(),e.target.classList.add("icon-play"),e.target.classList.remove("icon-pause")}},{key:"play",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(t){this.$el.querySelector(".song-name").innerText=t.songname,this.$el.querySelector(".song-artist").innerText=t.artist,this.progress.reset(t.duration);var n=(0,o.albumCoverUrl)(t.albummid);this.$el.querySelector(".album-cover").src=n,this.$el.querySelector(".player-background").style.backgroundImage="url("+n+")",t.songid&&(this.songid!==t.songid&&(this.$el.querySelector(".icon-action").className="icon-action icon-play"),this.songid=t.songid,this.$audio.src=(0,o.songUrl)(t.songmid),this.fetching=!0,fetch((0,o.lyricsUrl)(this.songid)).then(function(e){return e.json()}).then(function(e){return e.lyric}).then(function(t){return e.lyrics.reset(t)}).catch(function(){}).then(function(){return e.fetching=!1})),this.show()}}},{key:"show",value:function(){this.$el.classList.add("show"),document.body.classList.add("noscroll")}},{key:"hide",value:function(){this.$el.classList.remove("show"),document.body.classList.remove("noscroll")}}]),e}()},function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();t.ProgressBar=function(){function e(t,n,s){i(this,e),this.$el=t,this.elapsed=0,this.duration=n||0,this.progress=0,this.render(),this.$progress=this.$el.querySelector(".progress-bar-progress"),this.$elapsed=this.$el.querySelector(".progress-elapsed"),this.$duration=this.$el.querySelector(".progress-duration"),this.$elapsed.innerText=this.formatTime(this.elapsed),this.$duration.innerText=this.formatTime(this.duration),s&&this.start()}return s(e,[{key:"start",value:function(){this.pause(),this.intervalId=setInterval(this.update.bind(this),50)}},{key:"pause",value:function(){clearInterval(this.intervalId)}},{key:"update",value:function(){this.elapsed+=.05,this.elapsed>=this.duration&&this.reset(),this.progress=this.elapsed/this.duration,this.$progress.style.transform="translate("+(100*this.progress-100)+"%)",this.$elapsed.innerText=this.formatTime(this.elapsed)}},{key:"reset",value:function(e){this.pause(),this.elapsed=0,this.progress=0,this.$progress.style.transform="translate(-100%)",this.$elapsed.innerText=this.formatTime(this.elapsed),e&&(this.duration=+e,this.$duration.innerText=this.formatTime(this.duration))}},{key:"restart",value:function(){this.reset(),this.start()}},{key:"render",value:function(){this.$el.innerHTML='\n      <div class="progress-time progress-elapsed"></div>\n        <div class="progress-bar">\n          <div class="progress-bar-progress"></div>\n        </div>\n      <div class="progress-time progress-duration"></div>\n    '}},{key:"formatTime",value:function(e){var t=Math.floor(e/60),n=Math.floor(e%60);return t<10&&(t="0"+t),n<10&&(n="0"+n),t+":"+n}}]),e}()},function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();(t.LyricsPlayer=function(){function e(t,n){i(this,e),this.$el=t,this.$el.innerHTML='<div class="player-lyrics-lines"></div>',this.$lines=this.$el.querySelector(".player-lyrics-lines"),this.$audio=n,this.text="",this.index=0,this.lyrics=[],this.elapsed=0,this.reset(this.text)}return s(e,[{key:"start",value:function(){this.pause(),this.intervalId=setInterval(this.update.bind(this),1e3)}},{key:"pause",value:function(){clearInterval(this.intervalId)}},{key:"update",value:function(){if(this.elapsed=Math.round(this.$audio?this.$audio.currentTime:this.elapsed+1),this.index!==this.lyrics.length-1){for(var e=this.index+1;e<this.lyrics.length;e++){var t=this.getSeconds(this.lyrics[e]);if(this.elapsed===t&&(!this.lyrics[e+1]||this.elapsed<this.getSeconds(this.lyrics[e+1]))){this.$lines.children[this.index].classList.remove("active"),this.$lines.children[e].classList.add("active"),this.index=e;break}}if(this.index>2){var n=-(this.index-2)*this.LINE_HEIGHT;this.$lines.style.transform="translateY("+n+"px)"}}}},{key:"render",value:function(){var e=this.lyrics.map(function(e){return'\n      <div class="player-lyrics-line">'+e.slice(10)+"</div>\n    "}).join("");this.$lines.innerHTML=e}},{key:"reset",value:function(e){this.pause(),this.index=0,this.elapsed=0,this.$lines.style.transform="translateY(0)";var t=this.$lines.querySelector(".active");t&&t.classList.remove("active"),e&&(this.text=this.formatText(e)||"",this.lyrics=this.text.match(/^\[\d{2}:\d{2}.\d{2}\](.+)$/gm)||[],this.lyrics.length&&this.render()),this.lyrics.length&&this.$lines.children[this.index].classList.add("active")}},{key:"restart",value:function(){this.reset(),this.start()}},{key:"getSeconds",value:function(e){return+e.replace(/^\[(\d{2}):(\d{2}).*/,function(e,t,n){return 60*+t+ +n})}},{key:"formatText",value:function(e){var t=document.createElement("div");return t.innerHTML=e,t.innerText}}]),e}()).prototype.LINE_HEIGHT=42}]);