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

var currentNum = "";
var savedNum = "";
var myOperator = "";
var lastEquation = "";

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
    console.log(currentNum);
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
    savedNum = currentNum;
    currentNum = "";
    clear();
  })
}



//user clicks = and js computes and puts on display
document.getElementById('equals').addEventListener('click', function(){
    var operator = myOperator;
    switch(operator){
      case "plus":
      console.log(savedNum, currentNum);
      break;

      case "minus":
      answer = savedNum - currentNum;
      break;

      case "times":
      answer = savedNum * currentNum;
      break;

      case "divide":
      answer = savedNum / currentNum;
      break;

      default:
        answer = currentNum
    }
    clear();
    document.querySelector('#display').innerText = answer;
    lastEquation = answer;
})


//Clear display
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
