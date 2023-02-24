const left = document.getElementById("left-side");
let scrollPosition = 100;


document.body.onwheel = e => {
    
    scrollPosition = scrollPosition - e.deltaY/100 * 10
    if (scrollPosition > 100) {
        scrollPosition = 100
    } else if (scrollPosition < 0){
        scrollPosition = 0
    }
    console.log(scrollPosition)
    left.style.width = `${scrollPosition}%`;
    console.log(2)
    
}

/*
const handleOnMove = e => {
    const p = e.clientX / window.innerWidth * 100;
    left.style.width = `${p}%`;
}


document.onmousedown = e => handleOnMove(e);
*/