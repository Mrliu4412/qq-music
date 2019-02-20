import { Navbar } from "./nav.js";
import { Recommend } from "./rec.js";
import { RankingList } from "./rank.js";
import { Search } from "./search.js";
import { MusicPlayer } from "./player.js";

let navgation = new Navbar(document.querySelector('#topNavbar'));
let recommend = new Recommend(document.querySelector('#recView')).launch()
let rankingList = new RankingList(document.querySelector('#rankingView')).launch()
let search = new Search(document.querySelector('#searchView'))
let player = new MusicPlayer(document.querySelector('#player'))

document.querySelector('.playButton').addEventListener('click', () => {
    player.show()
})

onHashChange()
addEventListener('hashchange', onHashChange)

function onHashChange() {
    let hash = location.hash
    if (/^#player\?.+/.test(hash)) {
        let matches = hash.slice(hash.indexOf('?') + 1).match(/(\w+)=([^&]+)/g)
        let options = matches && matches.reduce((res, cur) => {
            let arr = cur.split('=')
            res[arr[0]] = decodeURIComponent(arr[1])
            return res
        }, {})
        player.play(options)
    } else {
        player.hide()
    }
}