let randomNumber=Math.floor(Math.random()*100)+1;
let attempts=0;
let boxcount=0;
document.getElementById('btn').addEventListener('click',function(){
  const guess= parseInt(document.getElementById('guessInput').value);
  const Lock=document.getElementById('Lock');
  if(guess===randomNumber){
    boxcount++;
    Lock.src='opengift.jpg';
    display("Congratulations! You opened Box:"+boxcount);
    randomNumber = Math.floor(Math.random() * 100) + 1; 
    attempts = 10; 
    setTimeout(() => {
        Lock.src='closegift.jpg';
        if(boxcount!=5){
        display("Guess the number to open Box "+ ++boxcount);
        }
        boxcount--;
        document.getElementById('guessInput').value = ''; 
    }, 5000);
    if (boxcount === 5) {
        display("Congratulations! You won the game!");
        document.getElementById('btn').disabled = true;
        document.getElementById('guessInput').disabled = true;
        display("You Have Completed All The Level!! You Won The Game!!");
        return 0;
    }

} else if (guess < randomNumber) {
    display('Number is too Low! Try a higher number.');
} else {
    display('Number is too High! Try a lower number.');
}
attempts--;
if (attempts === 0) {
    display('Game Over! Out Of Attempts Try Again.');
    document.getElementById('btn').disabled = true;
    document.getElementById('guessInput').disabled = true;
}
});

function display(msg) {
document.getElementById('msg').textContent=msg;
}