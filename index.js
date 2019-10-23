const canvas = document.getElementsByTagName('canvas')[0]
const _ = canvas.getContext('2d')

let width = canvas.width = window.innerWidth
let height = canvas.height = window.innerHeight

function draw() {
}

window.addEventListener('load', draw)
