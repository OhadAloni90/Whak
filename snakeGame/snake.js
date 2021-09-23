const squares = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');
let timeLeft = document.querySelector('.time-left');
let score = document.querySelector('.score');


let result = 0;
let currTime= 30;
let timer = null;

function randomSquare(){
    squares.forEach(square => {
        square.classList.remove('mole');
    })
    let randomSquare = squares[Math.floor(Math.random()*9)];
    randomSquare.classList.add('mole');
    hitPos = randomSquare.id;
}

squares.forEach(square => {
    square.addEventListener('mousedown', ()=> {
        if (square.id===hitPos){
            result++;
            console.log(result);
            score.textContent=result;
            hitPos=null;
        }
        else {
            result=0;
            console.log(result);
            score.textContent=result;
            hitPos=null;
        }
    })
})

function moleMoving(){
    timer = setInterval(randomSquare, 500);
}
moleMoving();



function countDown() {
    currTime--;
    timeLeft.textContent = currTime;
    if(currTime<10){
        timeLeft.style.color = 'red';
    }
    if(currTime===0){
        clearInterval(countDownTime);
        clearInterval(timer);
        alert('Game over! your score is:'+result);
    }
}

countDownTime = setInterval(countDown, 1000);