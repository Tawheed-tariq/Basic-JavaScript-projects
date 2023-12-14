var prev_btn = document.getElementById("prev");
var nxt_btn = document.getElementById("next");
var progress = document.getElementById("progress");
var circles = document.querySelectorAll(".circle");


var curr_active  =1;
nxt_btn.addEventListener("click", ()=>{
    curr_active++;
    if(curr_active > circles.length){
        curr_active = circles.length;
    }
    update();
})

prev_btn.addEventListener("click", ()=>{
    curr_active--;
    if(curr_active < 1){
        curr_active = 1;
    }
    update();
})

function update(){
    //update active class in circles
    circles.forEach((circle, index) =>{
        if(index < curr_active){
            circle.classList.add("active");
        }
        else{
            circle.classList.remove("active");
        }
    })

    //update the progres bar
    var activeCircles = document.querySelectorAll(".active");

    progress.style.width = (activeCircles.length - 1)/(circles.length-1)*100 + '%';

    //change the button enabled and disabled
    if(curr_active === 1){
        prev_btn.disabled = true;
    }
    else if(curr_active === circles.length){
        nxt_btn.disabled = true;
    }
    else{
        prev_btn.disabled = false;
        nxt_btn.disabled = false;
    }
}