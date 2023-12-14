const boxes = document.querySelectorAll(".box");


window.addEventListener("scroll", scrolling);

function scrolling(){
    const trigerPoint = window.innerHeight * (4/5);//80% of window height
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;//gives height of box from top
        if(boxTop < trigerPoint){
            box.classList.add("show");
        }else{
            box.classList.remove("show");
        }
    });
}