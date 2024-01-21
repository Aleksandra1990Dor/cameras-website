import './style.scss'
import './src/assets/header.scss'
import './src/assets/aside.scss'
import './src/assets/hero.scss'
import './src/assets/main-section.scss'

const parentLinks = document.querySelectorAll('.navbar-link')

const hideItems = (link, child) => {
	setTimeout(() => {
		child.classList.remove('header__navbar_dropdown')
		child.classList.remove('animate-hide')
		child.classList.add('hidden_class')
		link.classList.remove('active')
	}, 900)

	child.classList.add('animate-hide')
}

const showHiddenNavbarItems = (event, link) => {
	event.stopPropagation()

	window.addEventListener('click', () => hideItems(link, child))
	const child = link.querySelector('ul')
	parentLinks.forEach(item => {
		if (item !== link) hideItems(item, item.querySelector('ul'))
	})

	if (child.classList[0] === 'hidden_class') {
		link.classList.add('active')
		child.classList.remove('hidden_class')
		child.classList.add('header__navbar_dropdown')
	}
}

parentLinks.forEach(link =>
	link.addEventListener('click', event => showHiddenNavbarItems(event, link))
)

const closeBtn = document.querySelector('.close-icon')
const showMenuBtn = document.querySelector('.menu-icon')
const menuContainer = document.querySelector('.menu')

closeBtn.addEventListener('click', () => {
	if (menuContainer.classList[1] === 'show-menu') {
		menuContainer.classList.remove('show-menu')
		menuContainer.classList.add('hide-items')
	}
})

showMenuBtn.addEventListener('click', () => {
	menuContainer.classList.remove('hide-items')
	menuContainer.classList.add('show-menu')
})
