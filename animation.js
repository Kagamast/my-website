let progressArticle = document.getElementById("progress")
let progressIndicator = document.getElementsByClassName("progress-indicator")
let progressItem = document.getElementsByClassName("progress-item")
var progAn = {
    top: Math.round(Math.max(progressArticle.offsetTop + (progressArticle.clientHeight / 5) - window.innerHeight, 0)),
    bottom: Math.round(progressArticle.offsetTop + progressArticle.clientHeight - (progressArticle.clientHeight / 4)),
    activeHeight: null,
    activatedElements: 0,
}
progAn.activeHeight = (progAn.bottom - progAn.top) / 5

addEventListener('scroll', (e) => {
    let scroll= window.scrollY
    if(scroll > progAn.top && progAn.activatedElements < 5){
        chosenElNumber = Math.floor((scroll - progAn.top) / progAn.activeHeight)
        if(chosenElNumber >= 0 && chosenElNumber < 5 && chosenElNumber === progAn.activatedElements + 1){
                progAn.activatedElements = chosenElNumber
                progressIndicator[chosenElNumber].classList.add("active")
        }
    }
})
