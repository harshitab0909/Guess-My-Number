'use strict';
// document.querySelector('.message').textContent='🎉Correct Number!';
// document.querySelector('.number').textContent=13;
let score=20;
const number=Math.trunc(Math.random()*20)+1;


document.querySelector('.check').addEventListener('click',function(){
const guess=Number(document.querySelector('.guess').value);
if(!guess)
document.querySelector('.message').textContent='😒 No Number!';
else if(guess===number)
{document.querySelector('.message').textContent='🎉Correct Number!';
document.querySelector('.number').textContent=number;
document.querySelector('.highscore').textContent=score;
document.querySelector('body').style.backgroundColor='#60b347';
document.querySelector('.number').style.width='30rem';
}
else if(guess>number)
{if(score>1){score--;
document.querySelector('.score').textContent=score;
document.querySelector('.message').textContent='📈 Too High!';}
else{
document.querySelector('.score').textContent=0;
document.querySelector('.message').textContent='🎇You Lost the game!';
}
}
else
{if(score>1){score--;
document.querySelector('.score').textContent=score;
document.querySelector('.message').textContent='📉 Too Low!';}

else{
document.querySelector('.score').textContent=0;
document.querySelector('.message').textContent='🎇You Lost the game!';
}}


});
document.querySelector('.again').addEventListener('click',function(){
    score=20;
    number=Math.trunc(Math.random()*20)+1;
    document.querySelector('.message').textContent='Start guessing...!';
    document.querySelector('.score').textContent=20;
    document.querySelector('.number').textContent='?';
    document.querySelector('.guess').value='';
    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.number').style.width='15rem';
    });
    document.querySelector('.end').addEventListener('click',function(){
    document.querySelector('.message').textContent=`Good Bye! Your score is ${highscore}`;
    
    });
    



