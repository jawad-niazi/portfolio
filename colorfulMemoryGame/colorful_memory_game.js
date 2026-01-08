const colors=['purple','green','yellow','blue','orange'];
let cards= shuffle(colors.concat(colors));
let selectCard=[];
let score=0;
let timeInterval=30;
let gameInterval;

const gameContainer=document.getElementById("game-container");
const scoreElement=document.getElementById("score");
const timerElement=document.getElementById("timer");
const startButton=document.getElementById("startBtn");


function genrateCard(){
    for(const color of cards){
        const card= document.createElement('div');
        card.classList.add('card');
        card.dataset.color=color;
        card.textContent='?';
        gameContainer.appendChild(card);
    }

}


function shuffle(array){
    for(let i=array.length-1;i>0;i--){
        const j=Math.floor(Math.random()*(i+1));
        [array[i],array[j]]=[array[j],array[i]];


    }
    return array;


}

function handleCardClick(event){
    const card=event.target;
    if(!card.classList.contains('card')||card.classList.contains('matched')){
        return;

    }
    card.textContent=card.dataset.color;
    card.style.backgroundColor=card.dataset.color;
    selectCard.push(card);
    if(selectCard.length==2){
        setTimeout(checkMatch,500);
    }
}


function checkMatch(){
    const [card1,card2]=selectCard;
    if(card1.dataset.color==card2.dataset.color){
        card1.classList.add('matched');
        card2.classList.add('matched');
        score+=2;
        scoreElement.textContent=`score${score}`;
    } else{
        card1.textContent=`?`;
        card2.textContent=`?`;
        card1.style.backgroundColor='#ddd';
        card2.style.backgroundColor='#ddd';

    }
    selectCard=[];
}

function startGame(){
   let timeLeft=30;
   startButton.disabled=true;
   score=0;
   scoreElement.textContent=`Score:${score}`;
   startGameTimer(timeLeft);
   cards=shuffle(colors.concat(colors));
   selectCard=[];
   gameContainer.innerHTML='';
   genrateCard();
   gameContainer.addEventListener('click',handleCardClick);

}


function startGameTimer(timeLeft){
    timerElement.textContent=`Time Left:${timeLeft}`;
    gameInterval=setInterval(()=>{
             timeLeft--;
             timerElement.textContent=`Time Left:${timeLeft}`;
             if(timeLeft==0){
                clearInterval(gameInterval);
                 timeLeft=30;
                 alert('Game Over');
                 startButton.disabled=false;
             }
    },1000);


}


startButton.addEventListener('click',startGame);