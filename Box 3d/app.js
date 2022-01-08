const cube = document.querySelector(".cube")
const grid = document.querySelector(".grid")

for(let i = -14; i < 13; i++){
    for(let j = -30; j < 30; j++){
        const layout = document.createElement("div")
        layout.className = `layout`
        layout.addEventListener("mouseenter", ()=>{
            rotateCube(i, j)
        })
        layout.addEventListener("mouseout", ()=>{
            cube.style.transform = `rotateX(0deg) rotateY(0deg)`
        })
        grid.append(layout)
    }
}

function rotateCube(x, y){
    cube.style.transform = `rotateX(${-x*2}deg) rotateY(${y*2}deg)`
}