const mainImage = document.getElementById("mainImage");
const count = document.getElementById("count");
const leftBut = document.getElementById("leftBut");
const rightBut = document.getElementById("rightBut");
const choseBut = document.getElementById("choseBut")
let currentIndex = 0;

function init() {
    count.innerText = `${currentIndex + 1} / ${CONFIG.avatar.length}`;
    mainImage.src = CONFIG.avatar[currentIndex];
}

function prew() {
    if(currentIndex === 0){
        return;
    }
    
    currentIndex -= 1;
    init();
}

function saveIndex(){


}

function loadIndex(){


}



function next() {
    if(currentIndex === CONFIG.avatar.length){
        return;
    }
    currentIndex += 1;
    init();
}

leftBut.addEventListener('click', prew);
rightBut.addEventListener('click', next);

init();