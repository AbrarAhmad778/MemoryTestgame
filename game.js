let userSeq = [];
let gameSeq = [];
let level = 0;
let started = false;
let clrs = ["red","green","blue",'yellow'];
let h2 = document.querySelector("h2");
let box = document.querySelectorAll(".block");
document.addEventListener("keypress",function(){
    if(started == false){
        console.log("Game has started");
        started = true;
        levelUp();

    }
});


function gameBlink(btn){
   if(btn){
        btn.classList.add("flash");
        setTimeout(function(){
            btn.classList.remove("flash");
        },300);
    }

}

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `level ${level}`;
    let randclr = Math.floor(Math.random()*4);
    let clrIdx = clrs[randclr];
    let btn = document.querySelector(`.${clrIdx}`);
    gameSeq.push(clrIdx);
    console.log(gameSeq);
    gameBlink(btn);

}

function btnPress(){
    let btn = this;
    console.log(`${btn} was pressed`);

    gameBlink(btn);
    let clr = btn.getAttribute("id");
    userSeq.push(clr);
    console.log(userSeq);
    checkAns(userSeq.length-1);
}

for(btn of box){
    btn.addEventListener("click",btnPress);

}


function checkAns(idx){
    if(gameSeq[idx] === userSeq[idx]){
        if( gameSeq.length == userSeq.length){
            setTimeout(levelUp,1000);
        }
    }
    else{
        h2.innerHTML = `Game Over press <b>You score is ${level}</b><br>any key to restart the game`;
        let h3 = document.createElement("h3");
       
     gameOver();
     totalScore(level);
    
    }
}


function gameOver(){
    level = 0;
    gameSeq = [];
    userSeq = [];
    started = false;

}



