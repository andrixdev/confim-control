/**
 * ANDRIX © 2024
 */

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
	titleNode.innerHTML = "Conférence Immersive - Damien"
	menuNode.classList = 'hidden'
	bodyNode.classList = ''
}
document.getElementById('burger').addEventListener('click', () => {
	let isHidden = menuNode.classList == 'hidden'
	if (isHidden) openMenu()
	else closeMenu()
})
