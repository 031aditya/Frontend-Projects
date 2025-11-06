var timer = 60;
var score = 0;
var hitrn;

function increaseScore(){
  score += 10;
  document.querySelector("#scoreval").textContent = score;
} 

function getNewHit(){
  hitrn = Math.floor(Math.random()*10);
  document.querySelector("#hitval").textContent = hitrn;
}

function makeBubble(){
    var clutter = "";

for(var i=1 ; i<=140 ; i++){
  var rn = Math.floor(Math.random()*10);
  clutter   += `<div class="bubble">${rn}</div>`;
}

document.querySelector("#p2").innerHTML=clutter;
}
  
function runTimer(){
    var timerInt = setInterval(function (){
      if(timer>0){
          timer--;
          document.querySelector("#timerval").textContent = timer;
      }else{
        clearInterval(timerInt);

        document.querySelector("#p2").innerHTML = `<h1>Game Over</h1>`
      }
      
    },1000);
}

document.querySelector("#p2")
.addEventListener("click",function(details){
  clickednum = Number(details.target.textContent);
  if(clickednum === hitrn){
    increaseScore();
    getNewHit();
    makeBubble();
  }
})

runTimer();
makeBubble();
getNewHit();