/**
 * ANDRIX © 2024
 */

// OSC send on clicks (ASSISTANT VERSION)
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

// OSC send on volume change
let volume = 50
let minusminus = document.getElementById('minusminus')
let minus = document.getElementById('minus')
let plus = document.getElementById('plus')
let plusplus = document.getElementById('plusplus')
let vol = document.getElementById('vol')
let container = document.getElementById('master-container')
let updateVolume = () => {
	// Update front-end text
	vol.innerHTML = volume

	// Update front-end color gradient
	let hue = 200 + 80 * 10 * Math.sqrt(volume) / 100
	container.style.background = 'linear-gradient(90deg, hsl(200, 70%, 40%) 0%, hsl(' + hue + ', 70%, 40%) ' + volume + '%, black ' + volume + '%)'

	// Send XHR
	let xhr = new XMLHttpRequest()
	xhr.open("POST", location.origin + "/eh") // location is the browser's protocol, hostname and port number
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

	let oscRangeStart = 500
	let num = oscRangeStart - (-volume)
	xhr.send("num=" + num)
}
minusminus.addEventListener('click', () => {
	volume = Math.max(0, volume - 5)
	updateVolume()
})
minus.addEventListener('click', () => {
	volume = Math.max(0, volume - 1)
	updateVolume()
})
plus.addEventListener('click', () => {
	volume = Math.min(100, volume + 1)
	updateVolume()
})
plusplus.addEventListener('click', () => {
	volume = Math.min(100, volume + 5)
	updateVolume()
})

// Media play and pause toggles
let playNode1 = document.getElementById('audio-play-1')
let stopNode1 = document.getElementById('audio-stop-1')
let playNode2 = document.getElementById('audio-play-2')
let stopNode2 = document.getElementById('audio-stop-2')
let playNode3 = document.getElementById('video-play-1')
let stopNode3 = document.getElementById('video-stop-1')

let mediaNodes = [
	[playNode1, stopNode1],
	[playNode2, stopNode2],
	[playNode3, stopNode3]
]
mediaNodes.forEach((couple) => {
	let play = couple[0], stop = couple[1]
	play.addEventListener('click', () => {
		play.setAttribute('data-visibility', 'hidden')
		stop.setAttribute('data-visibility', 'visible')
	})
	stop.addEventListener('click', () => {
		stop.setAttribute('data-visibility', 'hidden')
		play.setAttribute('data-visibility', 'visible')
	})
})
