/**
 * ANDRIX © 2024
 */

// OSC send on master volume change
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
let playNode3 = document.getElementById('audio-play-3')
let stopNode3 = document.getElementById('audio-stop-3')
let playNode5 = document.getElementById('video-play-1')
let stopNode5 = document.getElementById('video-stop-1')

let mediaNodes = [
	[playNode1, stopNode1],
	[playNode2, stopNode2],
	[playNode3, stopNode3],
	[playNode5, stopNode5]
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
