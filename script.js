var character = document.getElementById("character");
var block = document.getElementById("block");
var end = document.getElementById("end-page");
var game = document.getElementById("game");
var timer = document.getElementById("timer");
var best = document.getElementById("best");

end.style.display = "none";

function jump(){
    if(character.classList != "animate")character.classList.add("animate");
    setTimeout(function(){
        character.classList.remove("animate");
    },500);
}
var cont=0
function start(){
    if(cont==0){
        setTimeout(()=>{
            block.classList.add("moving");
        },1000);
        lost=0;
    }
    else cont=1;
    jump();
}
function setgame(){
    end.style.display = "none";
    cont=0;
    game.style.display = "block";
    document.body.addEventListener("click",start());
    lost=0;
    seconds=0;
}
var checkTouch = setInterval(function(){
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft < 120 && blockLeft > 100 && characterTop >= 130){
        lost=1;
        game.style.display = "none";
        end.style.display = "block";
        block.classList.remove("moving");
        document.body.removeEventListener("click",start());
    }
});
var seconds=0;
var besttime=0;
var lost=1;
var time = setInterval(()=>{
    if(lost==0){
        seconds++;
        timer.innerText=seconds;
    }
    
},1000);
