/**
 * ANDRIX © 2023-2024
 */

// Conference tiles controls (display)
let activate = (id) => {
	Array.from(document.getElementsByClassName('confim-click')).forEach((el) => {
		let isActive = el.getAttribute('data-confim-id') == id
		el.classList.toggle("active", isActive)
	})
}
// Special params controls (display)
Array.from(document.getElementsByClassName('switch')).forEach((el) => {
	el.addEventListener('click', () => {
		el.classList = "switch " + (el.classList.contains("on") ? "off" : "on")
	})
})
// Handle constrained steps (display)
let sections = document.getElementsByClassName('section')
let steps = document.getElementsByClassName('step')
let resetSteps = () => {
	Array.from(steps).forEach(c => {
		c.classList.toggle('active', false)
	})
}
Array.from(sections).forEach(s => {
	s.addEventListener('click', () => {
		resetSteps()
		s.parentNode.classList.toggle('active', true)
	})
})
// Media play and pause toggles (display)
let playNode1 = document.getElementById('video-play-2')
let stopNode1 = document.getElementById('video-stop-2')

let mediaNodes = [
	//[playNode1, stopNode1]
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

// Conference tiles controls (send OSC)
Array.from(document.querySelectorAll('[data-confim-id]')).forEach((el) => {
	let num = el.getAttribute('data-confim-id')

	el.addEventListener('click', (e) => {
		activate(num)
		
		let xhr = new XMLHttpRequest()
		xhr.open("POST", location.origin + "/eh") // location is the browser's protocol, hostname and port number
		xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		xhr.onreadystatechange = function() {
			if (this.readyState === XMLHttpRequest.DONE && this.status === 200) { }
		}
		xhr.send("num=" + num)
	})
})

// OSC send on slider input changes
// Brain opacity
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



// Cam speed
let speedNode = document.getElementById('speed')
document.getElementById('camera-speed').addEventListener('input', (ev) => {
	let num = ev.target.value // [-100, 100]

	speedNode.innerHTML = num

	let xhr = new XMLHttpRequest()
	xhr.open("POST", location.origin + "/eh") // location is the browser's protocol, hostname and port number
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

	let oscRangeOffset = 800
	num = oscRangeOffset - (-num)
	xhr.send("num=" + num)
})

// Rotation mode
document.getElementById('rotation').addEventListener('input', (ev) => {
	let num = ev.target.value // {0, 1, 2}

	let xhr = new XMLHttpRequest()
	xhr.open("POST", location.origin + "/eh") // location is the browser's protocol, hostname and port number
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

	let oscRangeOffset = 70
	num = oscRangeOffset - (-num)
	xhr.send("num=" + num)
})


