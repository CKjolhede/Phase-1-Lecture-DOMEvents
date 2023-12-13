/* ----------------------------------------------------- 
    VOCABULARY TERMS
----------------------------------------------------- */

/*

    - event listener: an action performed by the computer triggered by the user
        - event: an action performed by the user that triggers a computer action (such as a mouseclick)
    - function invocation: allowing a function to be run (rather than running it automatically)

    - putzing (**not a coding term**): doing stuff (I use it with a positive connotation!)

*/

/* ----------------------------------------------------- 
    HOVERING EVENT LISTENERS
----------------------------------------------------- */

const h1 = document.querySelector('h1')

// console.log(h1)

function changeColor() {
    h1.style.color = "#6f3" // hex color code
}

h1.addEventListener('mouseover', changeColor) // invokes changeColor function

h1.addEventListener('mouseout', () => h1.style.color = "black") // invokes arrow function

// PUTZING AROUND WITH CODE (SANDBOX!)
function changeColor(isMouseOver) {
    if (isMouseOver) {
        h1.style.color = 'green'
    }
    else {
        h1.style.color = 'black'
    }
}

h1.addEventListener('mouseover', () => changeColor(true))

h1.addEventListener('mouseout', () => changeColor(false))

/* ----------------------------------------------------- 
    CLICKING EVENT LISTENERS
----------------------------------------------------- */

// const button = document.querySelector('button')
const button = document.querySelector('#button1')

// console.log(button)

function changeButtonText(e) {
    button.textContent = 'Clicked!'
    console.log(e)
}

button.addEventListener('click', (e) => changeButtonText(e))

const button2 = document.querySelector('#button2')

// console.log(button2)

const bg = document.querySelector('body')

// console.log(bg)

function changeBGColor() {
    // two ways of changing background color
    bg.style['background-color'] = 'goldenrod' // bracket notation
    // bg.style.backgroundColor = 'goldenrod' // dot notation
}

// button2.addEventListener('click', changeBGColor)
button2.addEventListener('click', () => bg.style.backgroundColor = 'goldenrod')

/* ----------------------------------------------------- 
    SUBMIT EVENT LISTENERS
----------------------------------------------------- */

const form = document.querySelector('form')

console.log(form)

// `e` is the event itself
form.addEventListener('submit', (e) => handleSubmit(e))

function handleSubmit(e) {
    e.preventDefault() // necessary to avoid page refresh

    // two ways of grabbing value from input field
    // const name = e.target.name.value
    const name = document.querySelector('#name').value

    const p = document.querySelector('p')

    if (name.length > 0) {
        p.textContent = `Welcome, ${name}!`
    }
    else {
        p.textContent = "Who are you?"
    }

    // MORE PUTZING
    const submitBtn = e.target.btn

    submitBtn.style.backgroundColor = 'pink'
}