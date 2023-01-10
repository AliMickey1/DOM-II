import './less/index.less'

// Your code goes here!

//ONE = LOAD - HEADER
window.addEventListener('load', (event) => {
    header.style.backgroundColor = "red"
})

const header = document.querySelector('.main-navigation')

//SOLUTION VIDEO CODE
window.onload = function (evt) {
    console.log(`event ${evt.type} fired! Ready to go!`)
    const heading = document.querySelector('h1')
    heading.textContent = 'READY TO GO!!'
}

//S video - goes with global.less

document.body.addEventListener('click', evt => {
    evt.target.classList.toggle('mirror')
})

//from S video - double click makes entire part disappear
document.body.addEventListener('dblclick', evt => {
    evt.target.outerHTML = ''
})

// from s video - keydown

window.addEventListener('keydown', evt => {
    if(evt.key == 6)
    {
        document.body.innerHTML = '<h1>YOU RAN ORDER 66</h1>'
    }
})

//s video mouse move, mouse enter, mouse leave
document.body.addEventListener('mousemove', evt => {
    const { clientX, clientY} = evt
})

const destinations = document.querySelectorAll('.destination')
for(let destination of destinations) {
    destination.addEventListener('mouseenter', () => {
        destination.style.fontWeight = 'bold'
    })
    destination.addEventListener('mouseleave', () => {
        destination.style.fontWeight = 'initial'
    })
}


//FIVE - DOUBLE CLICK - TITLE
const headingTitle = document.querySelector('.logo-heading')
headingTitle.addEventListener('dblclick', (event) => { 
    event.target.style.color = "yellow"
})
//TWO = MOUSEOVER - INTRO
const intro = document.querySelector('.intro')
intro.addEventListener('mouseover', (event) => { 
    event.target.style.backgroundColor = "yellow"
})
//THREE = WHEEL - LET'S GO
const funInSun = document.querySelector('.content-section .text-content')
funInSun.addEventListener('wheel', (event) => { 
    event.target.style.backgroundColor = "pink"
})

//FOUR - CLICK - LINKS
const homeLinks = document.querySelector('header nav a')
homeLinks.addEventListener('click', (event) => {
    event.target.style.backgroundColor = "blue"
    event.target.style.border = "thick solid green"
})




//SIX - FOCUS


//SEVEN = SELECT


//EIGHT - RESIZE



//NINE - KEYDOWN


//TEN - POINTER ENTER





// const destination = document.querySelector('.content-destination h2')
// destination.addEventListener('focus', (event) => {
//     event.target.style.border = "thick solid green"
   
// })


// header.addEventListener('mouseover', (event) => {
//     event.target.style.backgroundColor = "blue"    
// })
