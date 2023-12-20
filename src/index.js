const h1 = document.querySelector('h1')

console.log('h1')

function changeColor() {
	h1.style.color = ("green")	
}

h1.addEventListener('mouseover', changeColor)
//this adds the event listener that evokes the function changeColor when the mouseover event occurs.  If I were to put a paranthesis after the function in this call it will evoke the function immediately and not at the time of the event


// this adds another eventlistener to the h1 tag using an inline function (aka arrow function)
h1.addEventListener('mouseout', () => h1.style.color = "black")

const button1 = document.querySelector('#button1')

const button2 = document.querySelector('#button2')

const bg = document.querySelector('body')

function changeText() {
	button1.innerText = "Clicked"
}

button1.addEventListener('click', changeText)

function changeBGColor(){
	bg.style['background-color']="blue"
}

button2.addEventListener('click', changeBGColor)

const form = document.querySelector('form')

console.log(form)


// e stands for the each unique submit event
form.addEventListener('submit', (e) => handleSubmit(e))

function handleSubmit(e) {
	e.preventDefault()
	console.log(e.target.name.value)
	const name = e.target.name.value
	
	const p = document.querySelector('p')

	p.textContent = `Welcome, ${name}!`
}
