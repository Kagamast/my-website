let nav = document.getElementById("nav")

function toggleDropDown(){
    nav.classList.toggle("dropped")
}

nav.addEventListener('mouseleave', (e) => {
    nav.classList.remove("dropped")
})

addEventListener('mousedown', (e) => {
    nav.classList.remove("dropped")
})
addEventListener('scroll', (e) => {
    nav.classList.remove("dropped")
})



// TEST
function getPosition(element) {
    let position = 0;

    while(element) {
        position += (element.offsetTop - element.scrollTop + element.clientTop);
        element = element.offsetParent;
    }

    return position;
}

function getHeight(element){
    let height = element.clientHeight
    return height
}

function getScroll(){
    return window.scrollY
}



// TEMP
/*for(let i = 0; i < progressItem.length; i++){
    progressItem[i].addEventListener("click", (e) => {
        progressIndicator[i].classList.toggle("active")
    })
}*/