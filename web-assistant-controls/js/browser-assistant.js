/**
 * ANDRIX © 2024
 */

// OSC send on clicks (ASSISTANT version)
Array.from(document.querySelectorAll('[data-confim-id]')).forEach((el) => {
	let num = el.getAttribute('data-confim-id')

	el.addEventListener('click', (e) => {
		// Send XHR with OSC number
		let xhr = new XMLHttpRequest()
		xhr.open("POST", location.origin + "/eh") // location is the browser's protocol, hostname and port number
		xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		xhr.onreadystatechange = function() {
			if (this.readyState === XMLHttpRequest.DONE && this.status === 200) { }
		}
		xhr.send("num=" + num)

		// Front-end loading time
		if (num >= 1 && num <= 49) animateLoadbar(2000) // 2 seconds (see Unity Chameleon.cs duration)
		else animateLoadbar(250) // Enough to prevent double-click
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

// Media play and pause toggles
let playNode1 = document.getElementById('audio-play-1')
let stopNode1 = document.getElementById('audio-stop-1')
let playNode2 = document.getElementById('audio-play-2')
let stopNode2 = document.getElementById('audio-stop-2')
let playNode3 = document.getElementById('audio-play-3')
let stopNode3 = document.getElementById('audio-stop-3')
let playNode4 = document.getElementById('audio-play-4')
let stopNode4 = document.getElementById('audio-stop-4')
let playNode5 = document.getElementById('video-play-1')
let stopNode5 = document.getElementById('video-stop-1')
let playNode6 = document.getElementById('video-play-2')
let stopNode6 = document.getElementById('video-stop-2')

let mediaNodes = [
	[playNode1, stopNode1],
	[playNode2, stopNode2],
	[playNode3, stopNode3],
	[playNode4, stopNode4],
	[playNode5, stopNode5],
	[playNode6, stopNode6]
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
