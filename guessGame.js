let startGuessBtn = document.querySelector('.start-guess');
let inputEnterNumber = document.querySelector('.enter-number');
let controlDiv = document.querySelector('.controls');
let guessBox = document.querySelector('.guessBox');
let myModalEnterGuess = document.getElementById("myModal");
let jumbotron = document.querySelector(".jumbotron");
let guessNumVal = document.getElementById("guess-num");
let playName = document.getElementById("player");
let guessFrequency = document.getElementById("guess-freq");
let submitGuessBtn = document.querySelector('.submit-guess');
let winSound = document.querySelector('.win');
let looseSound = document.querySelector('.loose');
let changeGuessSound = document.querySelector('.changeGuessSound');
let restart = document.querySelector('.restart');
// generatin the random number
function generateRandomNum(){
   var random = Math.floor( Math.random()*7) +1;
   console.log(random);
   guessBox.innerHTML=random;
//    checkGuess();
}


 //function to reload the window
 function winReload(){
    location.reload();
  }
  

// the win function
function youWin(playerName){
    // the next line of code is to hide the guess button
    myModalEnterGuess.style.display= "none";
    jumbotron.style.backgroundColor ="#485";
    guessBox.style.backgroundColor = "#375";
    controlDiv.innerHTML =  '<h3>' + ` CONGRATULATION ${playerName}  YOU WIN ` + '</h3>';
    winSound.play();
    setTimeout(winReload, 5000); 
}

// the loose function
function youLoose(playerName){
    // the next line of code is to hide the guess button
    myModalEnterGuess.style.display= "none";
    jumbotron.style.backgroundColor ="red";
    guessBox.style.backgroundColor = "red";
    controlDiv.innerHTML =  '<h3>' + ` YOU LOOSE THE GAME ${playerName}  TRY AGAIN ` + '</h3>';
    looseSound.play();
    setTimeout(winReload, 5000); 
}

// guessNum = guessNum.value;
var guessNum = 3;
// console.log("this is guessNum value" + guessNum);
guessCount = 0;


// submit guess button
submitGuessBtn.addEventListener('click', function(){
    player = playName.value;
    
    freq = guessFrequency.value;
    var aGuessNum = parseInt(freq);

    var guess = guessNumVal.value;
    var noOfGuess = parseInt(guess);

    // Actions
startGuessBtn.addEventListener('click', function(){
    changeGuessSound.play();
    guessCount++;
    generateRandomNum();
    if(guessBox.innerHTML == aGuessNum && guessCount <= (noOfGuess - 1)){
        youWin( player);
        
    }else if(guessBox.innerHTML != aGuessNum  && guessCount > (noOfGuess -1)){
        youLoose( player);
    }

    // console.log("This is the value you entered" + inputEnterNumber.value);
});


    
});


// restart button
restart.addEventListener('click', function(){
    var con = confirm("ARE YOU SURE YOU WANT TO EXIT THE GAME?");
    if(con == true){
      location.reload();
    }
});

// myModalEnterGuess.addEventListener('click', function(){
    
//     console.log("i was clicked");
// });

