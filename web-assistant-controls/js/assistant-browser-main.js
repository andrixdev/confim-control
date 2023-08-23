/**
 * Alex Andrix @2023
 */

// Conference controls (tiles state toggle)
let activate = (id) => {
	Array.from(document.getElementsByClassName('confim-click')).forEach((el) => {
		el.classList = "confim-click"

		if (el.getAttribute('data-confim-id') == id) el.classList = "confim-click active"
	})
}

// Conference controls (send OSC)
Array.from(document.querySelectorAll('[data-confim-id]')).forEach((el) => {
	let num = el.getAttribute('data-confim-id')

	el.addEventListener('click', (e) => {
		activate(num)
		
		let xhr = new XMLHttpRequest()

		xhr.open("POST", location.origin + "/eh") // location is the browser's protocol, hostname and port number
		xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

		xhr.onreadystatechange = function() {
			if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
				
			}
		}

		xhr.send("num=" + num)
	})
})

// Special params controls (display)
Array.from(document.getElementsByClassName('switch')).forEach((el) => {
	el.addEventListener('click', () => {
		el.classList = "switch " + (el.classList.contains("on") ? "off" : "on")
	})
})

// Menu controls
let menuNode = document.getElementById('menu')
let titleNode = document.getElementById('title')
let burgerNode = document.getElementById('burger')
let bodyNode = document.getElementsByTagName('body')[0]
let openMenu = () => {
	burgerNode.classList = 'open'
	titleNode.innerHTML = "Conférence Immersive - Menu"
	menuNode.classList = ''
	bodyNode.classList = 'frozen'
	window.scrollTo(0, 0)
}
let closeMenu = () => {
	burgerNode.classList = ''
	titleNode.innerHTML = "Conférence Immersive - Assistant"
	menuNode.classList = 'hidden'
	bodyNode.classList = ''
}
document.getElementById('burger').addEventListener('click', () => {
	let isHidden = menuNode.classList == 'hidden'
	if (isHidden) openMenu()
	else closeMenu()
})

// Music play and pause toggles
let playNode1 = document.getElementById('audio-play-1')
let pauseNode1 = document.getElementById('audio-pause-1')
let playNode2 = document.getElementById('audio-play-2')
let pauseNode2 = document.getElementById('audio-pause-2')
let playNode3 = document.getElementById('audio-play-3')
let pauseNode3 = document.getElementById('audio-pause-3')
let playNode4 = document.getElementById('video-play-1')
let stopNode4 = document.getElementById('video-stop-1')

let mediaNodes = [
	[playNode1, pauseNode1],
	[playNode2, pauseNode2],
	[playNode3, pauseNode3],
	[playNode4, stopNode4]
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
