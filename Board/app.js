const board = document.querySelector("#board")
const SQUARE_NUMBER = 500
const color = ["red", "yellow", "blue","orange", "pink", "purple"]

for(let i=0; i<SQUARE_NUMBER; i++){
    const square = document.createElement("div")
    square.classList.add("square")
    board.append(square)

    square.addEventListener("mouseover", setColor)
    square.addEventListener("mouseleave", removeColor)
}

function setColor(event){
    let element = event.target
    let ranColor = getRandomColor()
    element.style.backgroundColor = ranColor
    element.style.boxShadow = `0 0 5px ${ranColor}`
}

function removeColor(event){
    let element = event.target
    element.style.backgroundColor = "gray"
    element.style.boxShadow = `0 0 2px gray`
}

function getRandomColor(){
    return color[Math.floor(Math.random()*100)%6]
}