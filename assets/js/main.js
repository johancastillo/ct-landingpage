/* 
   ==========================
   = Height Screen Detected =
   ==========================
*/
const calcHeightScreen = () => {
        // Calc height of the screen
    let heightScreen = document.documentElement.clientHeight;

    // Elements HTML (Sections)
    let section1 = document.querySelector("#section1")
    let section2 = document.querySelector("#section2")
    let section3 = document.querySelector("#section3")
    let section4 = document.querySelector("#section4")


    // Function
    const modificator = (el) => el.style.height = `${heightScreen}px`

    // Modifications
    modificator(section1)
    modificator(section2)
    modificator(section3)
    modificator(section4)
}

calcHeightScreen()


/* 
   ==================
   = Call To Action =
   ==================
*/
const callToAction = () => {
    // Button
    let btn = document.querySelector("#call-to-action")
    
    // Action
    const action = () => location.href = "https://compralotodo.com/efectivo"

    // Event CLICK
    btn.addEventListener("click", action)

} 

callToAction()
