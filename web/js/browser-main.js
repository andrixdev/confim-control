/**
 * Alex Andrix @2023
 */

// Conference tiles controls
let activate = (id) => {
	Array.from(document.getElementsByClassName('confim-click')).forEach((el) => {
		el.classList = "confim-click"

		if (el.getAttribute('data-confim-id') == id) el.classList = "confim-click active"
	})
}
Array.from(document.getElementsByClassName('confim-click')).forEach((el) => {
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

// Menu controls
let menuNode = document.getElementById('menu')
let titleNode = document.getElementById('title')
let burgerNode = document.getElementById('burger')
let bodyNode = document.getElementsByTagName('body')[0]
let openMenu = () => {
	burgerNode.classList = 'open'
	titleNode.classList = "Conférence Immersive - Menu"
	menuNode.classList = ''
	bodyNode.classList = 'frozen'
	window.scrollTo(0, 0)
}
let closeMenu = () => {
	burgerNode.classList = ''
	titleNode.classList = "Conférence Immersive"
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
playNode1.addEventListener('click', () => {
	playNode1.setAttribute('data-visibility', 'hidden')
	pauseNode1.setAttribute('data-visibility', 'visible')
})
pauseNode2.addEventListener('click', () => {
	playNode2.setAttribute('data-visibility', 'visible')
	pauseNode2.setAttribute('data-visibility', 'hidden')
})
pauseNode3.addEventListener('click', () => {
	playNode3.setAttribute('data-visibility', 'visible')
	pauseNode3.setAttribute('data-visibility', 'hidden')
})
