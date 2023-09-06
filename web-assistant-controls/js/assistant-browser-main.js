/**
 * Alex Andrix @2023
 */

// OSC send on clicks
Array.from(document.querySelectorAll('[data-confim-id]')).forEach((el) => {
	let num = el.getAttribute('data-confim-id')

	el.addEventListener('click', (e) => {
		let xhr = new XMLHttpRequest()
		xhr.open("POST", location.origin + "/eh") // location is the browser's protocol, hostname and port number
		xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		xhr.onreadystatechange = function() {
			if (this.readyState === XMLHttpRequest.DONE && this.status === 200) { }
		}
		xhr.send("num=" + num)
	})
})
// OSC send on slider input change
document.getElementById('master-volume').addEventListener('input', (ev) => {
	let num = ev.target.value // [0, 100]

	let xhr = new XMLHttpRequest()
	xhr.open("POST", location.origin + "/eh") // location is the browser's protocol, hostname and port number
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

	let oscRangeStart = 500
	num = oscRangeStart - (-num)
	xhr.send("num=" + num)
})

// Music track tiles state toggle
/*let activate = (id) => {
	Array.from(document.getElementsByClassName('music-track')).forEach((el) => {
		let itsMe = el.getAttribute('data-confim-id') == id
		el.classList.toggle("active", itsMe)
		el.src = itsMe ? "./img/music.jpg" : "./img/music-play.jpg"
	})
}*/

// UI music tracks toggles
let tracks = document.getElementsByClassName('music-track')
Array.from(tracks).forEach((el) => {
	el.addEventListener('click', (ev) => {
		Array.from(tracks).forEach((tr) => {
			let itsMe = tr.getAttribute('data-confim-id') == ev.target.getAttribute('data-confim-id')
			tr.classList.toggle("active", itsMe)
			tr.src = itsMe ? "./img/music.jpg" : "./img/music-play.jpg"
		})
	})
})

// Special params controls (display)
Array.from(document.getElementsByClassName('switch')).forEach((el) => {
	el.addEventListener('click', () => {
		el.classList = "switch " + (el.classList.contains("on") ? "off" : "on")
	})
})

// Media play and pause toggles
let playNode1 = document.getElementById('video-play-1')
let stopNode1 = document.getElementById('video-stop-1')

let mediaNodes = [
	[playNode1, stopNode1]
]
mediaNodes.forEach((couple) => {
	let play = couple[0], pause = couple[1]
	play.addEventListener('click', () => {
		play.setAttribute('data-visibility', 'hidden')
		pause.setAttribute('data-visibility', 'visible')
	})
	pause.addEventListener('click', () => {
		pause.setAttribute('data-visibility', 'hidden')
		play.setAttribute('data-visibility', 'visible')
	})
})
