var character = document.getElementById("character");
var block = document.getElementById("block");
var end = document.getElementById("end-page");
var game = document.getElementById("game");
var timer = document.getElementById("timer");
var best = document.getElementById("best");

end.style.display = "none";
block.style.display = "none";

function jump(){
    if(character.classList != "animate")character.classList.add("animate");
    setTimeout(function(){
        character.classList.remove("animate");
    },500);
}
var cont=0
var spawn;
function start(){
    
    if(cont==0 && end.style.display == "none"){
        lost=0;
        spawn = setTimeout(()=>{
            block.style.display = "block";
            block.classList.add("moving");
        },1500);
        cont=1;
    }
    jump();
}
function setgame(){
    clearTimeout(spawn);
    end.style.display = "none";
    game.style.display = "block";
    block.style.left = '480px';
    block.style.animationDuration = '1.8s';
    cont=0;
    lost=0;
    document.body.addEventListener("click",start());
}
var checkTouch = setInterval(function(){
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft < 132 && blockLeft > 100 && characterTop >= 120){
        document.body.removeEventListener("click",start);
        game.style.display = "none";
        end.style.display = "block";
        block.classList.remove("moving");
        block.style.display = "none";
        lost=1;
        if(besttime<seconds)besttime=seconds;
        best.innerText = besttime;
        seconds=0;
        timer.innerText=seconds;
        
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
},100);
