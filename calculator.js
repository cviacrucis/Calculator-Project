var num0 = document.getElementById('0')
var num1 = document.getElementById('1')
var num2 = document.getElementById('2')
var num3 = document.getElementById('3')
var num4 = document.getElementById('4')
var num5 = document.getElementById('5')
var num6 = document.getElementById('6')
var num7 = document.getElementById('7')
var num8 = document.getElementById('8')
var num9 = document.getElementById('9')

var currentNum = 0;
var savedNum
var myOperator
var lastEquation

//CLEAR ALL function (CE)
document.querySelector('#clearAll').addEventListener('click', function(){
  currentNum = "";
  savedNum = "";
  myOperator = "";
  clear();
})

//CLEAR LAST entry "CE" function 
document.querySelector('#clearEntry').addEventListener('click', function(){
  currentNum = "";
  myOperator = "";
  clear();
})


//gets number buttons and add listener
var userNumber = document.getElementsByClassName('num')

for(i=0; i<userNumber.length; i++){
  userNumber[i].addEventListener('click', function(val){
    val.target.value;
    var value = parseInt(val.target.value);
    currentNum += value;
    toDisplay(value);
  })
  }

//add number to display
function toDisplay(value){
  document.querySelector('#display').innerText += value;
}

// operator button action
var userOperator = document.querySelectorAll('.operator');
for(i=0; i<userOperator.length; i++){
  userOperator[i].addEventListener('click', function(val){
    var value = val.target.value;
    myOperator = value;
    console.log(myOperator)
    console.log(currentNum);
    savedNum = currentNum;
    console.log(typeof savedNum);
    currentNum = 0;
    clear();
  })
}



//user clicks = and js computes and puts on display
document.getElementById('equals').addEventListener('click', function(){
    var operator = myOperator;
    switch(operator){
      case "plus":
      console.log(savedNum, currentNum);
      answer = parseInt(savedNum) + parseInt(currentNum);
      break;

      case "minus":
      answer = savedNum - currentNum;
      console.log(savedNum, currentNum, answer)
      break;

      case "times":
      answer = savedNum * currentNum;
      console.log(answer)
      break;

      case "divide":
      answer = savedNum / currentNum;
      console.log(answer)
      break;

      default:
        answer =currentNum
        console.log(answer)
    }
    clear();
    document.querySelector('#display').innerText = answer;
    lastEquation = answer;
})




//computation

function clear(){
  document.querySelector('#display').innerText = "";
}


//get user number input
//add to equation ***
//display in window
//get operator
//add to equation ***
//get second number input
//add to equation ***
//clear first number and display second number
//when user enters =
//compute all inputs
//display result
