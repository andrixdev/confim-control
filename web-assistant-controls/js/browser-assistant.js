/**
 * ANDRIX © 2023-2024
 */

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
/*let tracks = document.getElementsByClassName('music-track')
Array.from(tracks).forEach((el) => {
	el.addEventListener('click', (ev) => {
		Array.from(tracks).forEach((tr) => {
			let itsMe = tr.getAttribute('data-confim-id') == ev.target.getAttribute('data-confim-id')
			tr.classList.toggle("active", itsMe)
			//tr.src = itsMe ? "./img/music.jpg" : "./img/music-play.jpg"
		})
	})
})*/

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

// OSC send on slider input changes - Brain opacity
let brainOpaNode = document.getElementById('opa')
document.getElementById('brain-opacity-range').addEventListener('input', (ev) => {
	let num = ev.target.value // [0, 100]

	brainOpaNode.innerHTML = num

	let xhr = new XMLHttpRequest()
	xhr.open("POST", location.origin + "/eh") // location is the browser's protocol, hostname and port number
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

	let oscRangeOffset = 1000
	num = oscRangeOffset - (-num)
	xhr.send("num=" + num)
})

// OSC send on slider input changes - Cam speed
let camSpeedNode = document.getElementById('speed')
let camSpeedRange = document.getElementById('cam-speed-range')
camSpeedRange.addEventListener('input', (ev) => {
	//let inp = ev.target.value // [|0, 6|]
	let inp = ev.target.value // [-100, 100]
	let num // [-100, 100]

	/*
	if (inp == 0) num = -100
	else if (inp == 1) num = -30
	else if (inp == 2) num = -10
	else if (inp == 3) num = 0
	else if (inp == 4) num = 10
	else if (inp == 5) num = 30
	else if (inp == 6) num = 100 
	else console.error("Camera speed input value " + inp + " not recognized.")
	*/

	// Widen precision around 0
	num = Math.round(100 * Math.sign(inp) * Math.pow(Math.abs(inp / 100), 2.5) * 10) / 10

	camSpeedNode.innerHTML = num + " Joshua.s<sup>-1</sup>"

	let xhr = new XMLHttpRequest()
	xhr.open("POST", location.origin + "/eh") // location is the browser's protocol, hostname and port number
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

	let oscRangeOffset = 800
	num = oscRangeOffset - (-num)
	xhr.send("num=" + num)
})

// Cam reset (UI)
Array.from(document.getElementsByClassName('cam-reset')).forEach(el => {
	el.addEventListener('click', () => {
		camSpeedRange.value = 0
		camSpeedNode.innerHTML = "0 Joshua.s<sup>-1</sup>"
	})
})

// OSC send on slider input changes - Brain rotation mode
//let brainRotNode = document.getElementById('rot')
document.getElementById('brain-rot-range').addEventListener('input', (ev) => {
	let num = ev.target.value // [0, 3]

	//brainRotNode.innerHTML = num

	let xhr = new XMLHttpRequest()
	xhr.open("POST", location.origin + "/eh") // location is the browser's protocol, hostname and port number
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

	let oscRangeOffset = 1200
	num = oscRangeOffset - (-num)
	xhr.send("num=" + num)
})

