const upBtn = document.querySelector(".up-button")
const downBtn = document.querySelector(".down-button")

const sideBar = document.querySelector(".sidebar")
const mainSlide = document.querySelector(".main-slide")

let slideCount = mainSlide.querySelectorAll("div").length

let activeSlide = 0


sideBar.style.top = `-${(slideCount-1)*100}vh`

upBtn.addEventListener("click", ()=>{
    changeSlide("up")
})

downBtn.addEventListener("click", ()=>{
    changeSlide("down")
})

function changeSlide(dir){
    if(dir === "up"){
        activeSlide++
        if(activeSlide === slideCount){
            activeSlide = 0
        }
    } else if(dir === "down"){
        activeSlide--
        if(activeSlide < 0){
            activeSlide = slideCount - 1
        }
    }

    mainSlide.style.transform = `translateY(-${activeSlide*100}vh)`
    sideBar.style.transform = `translateY(${activeSlide*100}vh)`
}


// Dieu khien tu ban phim
document.addEventListener("keydown", changeSlideBtn)

function changeSlideBtn(e){
    if(e.key === "ArrowUp"){
        changeSlide("up")
    }else if(e.key === "ArrowDown"){
        changeSlide("down")
    }
}