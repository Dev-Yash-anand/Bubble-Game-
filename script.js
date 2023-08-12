var hitrn = 0;

function makebbl(){
    var bubble = "";

for(var i=1; i<=152; i++){
    var rn = Math.floor(Math.random()*10);
    bubble += `<div class="bbl">${rn}</div>`
}

document.querySelector(".pbtm").innerHTML = bubble;
}

makebbl();

var time = 60;
function runTimer(){
    var timerInt = setInterval(function(){
        if(time>0){
            time--;
            document.querySelector("#timer").innerHTML = time;
        }
        else{
            clearInterval(timerInt);
            document.querySelector(".pbtm").innerHTML = `<h1>Game Over</h1>`
        }
    },1000)
}
runTimer();

function newHit(){
hitrn = Math.floor(Math.random()*10);
document.querySelector("#hitval").textContent = hitrn;
}

newHit();

var score = 0;
function incScr(){
    score += 10;
    document.querySelector("#scrval").textContent = score
}
document.querySelector(".pbtm")
.addEventListener("click",function(dets){
    var clickednum = Number(dets.target.textContent);
    if(hitrn === clickednum){
        incScr();
        makebbl();
        newHit();
    }
})