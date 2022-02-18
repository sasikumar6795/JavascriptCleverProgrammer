//challenge 1

function ageInDays()
{
    var birthYear = prompt("what year did you born?");
    var ageInDayss=(2022-birthYear) *365;
    var h1 =  document.createElement('h1');
    var textAnswer =document.createTextNode('you are ' + ageInDayss  + ' days old');
    h1.setAttribute('id', 'ageinDays')
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset()
{
    document.getElementById('ageinDays').remove();
}

//Challenge -2
function generateCat() 
{
    var img =document.createElement('img');
    var div =document.getElementById('flex-gen-cat');
    img.src="data:image/jpeg;base64,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";
    div.appendChild(img);
}

//challenge -3

function rpsGame(yourChoice) {
    console.log(yourChoice);
    var humanChoice, botChoice;

    humanChoice=yourChoice.id;
    // number= randomRPS();
    // botChoice=numberToChoice(number);
    botChoice=numberToChoice(randomRPS());
    console.log('botChoice',botChoice);


    results= decideWinner(humanChoice, botChoice)  //[0,1] bot won [0.5,0.5] draw [1,0] human won
    console.log('results', results);


    message=finalMessage(results); // {'message' : 'You won' , 'color': 'green'}
    console.log('Message', message);

    rpsFrontEnd(humanChoice, botChoice, message);

}

function randomRPS()
{
    //random numbers will be picked from o,1,2
    return Math.floor(Math.random() *3);
}

function numberToChoice(number)
{
    //access array index 0,1,2 --via number
    return ['Paper', 'Scissors', 'Rock'][number];
}


function decideWinner(humanChoice, botChoice)
{

    //storing in a database for multiple if else condition
    var rpsDataBase= {
        'Rock' : {
            'Scissors' : 1,
            'Rock': 0.5,
            'Paper':0
        },
        'Scissors' : {
            'Scissors' : 0.5,
            'Rock': 0,
            'Paper':1
        },
        'Paper' : {
            'Scissors' : 0,
            'Rock': 1,
            'Paper':0.5
        }
    }

    var yourScore= rpsDataBase[humanChoice][botChoice];
    var botScore=rpsDataBase[botChoice][humanChoice];
    return [yourScore,botScore];
}


function finalMessage ([yourScore, botScore]){

   if(yourScore===0)
   {
       return {
           'message' : 'You Lost',
           'color' : 'red'
       }
   }
   else if (yourScore===1){
    return {
        'message' : 'You won ',
        'color' : 'Green'
    }
   }
   else{
    return {
        'message' : 'Draw',
        'color' : 'Yellow'
    }
   }
}

function rpsFrontEnd(humanChoice, botChoice, message) {

    var imageDatabase= {
        'Rock' : document.getElementById('Rock').src,
        'Paper': document.getElementById('Paper').src,
        'Scissors':document.getElementById('Scissors').src
    }

   document.getElementById("Rock").remove();
   document.getElementById("Paper").remove();
   document.getElementById("Scissors").remove();

   var humanDiv=document.createElement('div');
   var messageDiv=document.createElement('div');
   var botdiv=document.createElement('div');

   humanDiv.innerHTML="<img src='" + imageDatabase[humanChoice] + "' height=150 width=150 style=' box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'>"
   messageDiv.innerHTML="<h1 style='color: "  + message['color'] + "; font-size:60px; padding:30px;'>" + message['message'] +"</h1>"
   botdiv.innerHTML="<img src='" + imageDatabase[botChoice] + "' height=150 width=150 style=' box-shadow: 0px 20px 50px rgba(0, 0, 0,0.7);'>"


   document.getElementById('flex-box-rps-div').appendChild(humanDiv);
   document.getElementById('flex-box-rps-div').appendChild(messageDiv);
   document.getElementById('flex-box-rps-div').appendChild(botdiv);
   

}

//Challenge -4 Change color of Buttons

var allColorButtons =  document.getElementsByTagName('button');

console.log(allColorButtons);

var allButtons=[];
for(let i=0;i<allColorButtons.length;i++)
{
    allButtons.push(allColorButtons[i].classList[1]);
}

console.log(allButtons);

function buttonColorChange(colorSelected)
{
    console.log("colorSelected",colorSelected.value);
    if(colorSelected.value==='red')
    {
        changeButtonsToRed();
    }
    else if(colorSelected.value==='yellow')
    {
        changeButtonsToYellow();
    }
    else if(colorSelected.value==='green')
    {
        changeButtonsToGreen();
    }
    else if(colorSelected.value==='reset')
    {
        changeButtonsToOriginal();
    }
    else{
        changeButtonsToRandom();
    }
   
}

function changeButtonsToRed(){
    for(let i=0;i<allColorButtons.length;i++)
    {
        allColorButtons[i].classList.remove(allColorButtons[i].classList[1]);
        allColorButtons[i].classList.add('btn-danger');
    }
}


function changeButtonsToYellow(){
    for(let i=0;i<allColorButtons.length;i++)
    {
        allColorButtons[i].classList.remove(allColorButtons[i].classList[1]);
        allColorButtons[i].classList.add('btn-warning');
    }
}

function changeButtonsToGreen(){
    for(let i=0;i<allColorButtons.length;i++)
    {
        allColorButtons[i].classList.remove(allColorButtons[i].classList[1]);
        allColorButtons[i].classList.add('btn-success');
    }
}

function changeButtonsToOriginal(){
    for(let i=0;i<allColorButtons.length;i++)
    {
        allColorButtons[i].classList.remove(allColorButtons[i].classList[1]);
        allColorButtons[i].classList.add(allButtons[i]);
    }
}

function changeButtonsToRandom(){
    let choices = ['btn-primary', 'btn-warning', 'btn-success', 'btn-danger'];
    for(let i=0;i<allColorButtons.length;i++)
    {
        let randomNumber=Math.floor(Math.random() *4);
        allColorButtons[i].classList.remove(allColorButtons[i].classList[1]);
        allColorButtons[i].classList.add(choices[randomNumber]);
    }
}

//challenge-5 BlackJack

let blackJackGame = {
    'you' : {
        'scoreSpan' : '#your-blackjack-result',
        'div': '#your-box',
        'score': 0
    },
    'dealer' : {
        'scoreSpan' : '#dealer-blackjack-result',
        'div': '#dealer-box',
        'score': 0
    },

};

const YOU=blackJackGame['you'];
const DEALER=blackJackGame['dealer'];

const hitSound= new Audio('./sounds/swish.m4a');

document.querySelector('#blackjack-hit-button').addEventListener('click',blackJackHit);

function blackJackHit()
{
    showCard();
}

function showCard()
{
    let cardImage=document.createElement('img');
    cardImage.src='./images/Q.png';
    document.querySelector(YOU['div']).appendChild(cardImage);

    hitSound.play();
}