// Calc height of the screen
let heightScreen = screen.height

// Elements HTML
let section1 = document.querySelector("#section1")
let section2 = document.querySelector("#section2")
let section3 = document.querySelector("#section3")
let section4 = document.querySelector("#section4")


// Function
const modificator = (el) => el.style.height = `${heightScreen}px`

// Modificated
modificator(section1)
modificator(section2)
modificator(section3)
modificator(section4)
