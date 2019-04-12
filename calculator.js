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

var currentNum
var savedNum
var myOperator

//gets number buttons and add listener
var userNumber = document.getElementsByClassName('num')
for(i=0; i<userNumber.length; i++){
  userNumber[i].addEventListener('click', function(val){
    val.target.value;
    var value = parseInt(val.target.value);
    toDisplay(value);
    var value = value;
    console.log(value);
    if(currentNum >= 1){
      currentNum += value;
      console.log(currentNum)
    } else{
    currentNum = value;
    console.log(currentNum)
  }
})
}

//adds event listener to operator buttons and stores it in a var
var userOperator = document.querySelectorAll('.operator');
for(i=0; i<userOperator.length; i++){
  userOperator[i].addEventListener('click', function(val){
    var value = val.target.value;
    myOperator = value;
    savedNum = currentNum;
    currentNum = 0;
  })
}

//user clicks = and js computes and puts on display
document.getElementById('equals').addEventListener('click', function(){
    var operator = myOperator;
    switch(operator){
      case "plus":
      console.log(savedNum, currentNum);
      answer = savedNum + currentNum;
      break;

      case "minus":
      answer = savedNum - currentNum;
      console.log(answer)
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
})

//add number to display
function toDisplay(value){
  document.querySelector('#display').innerText = value;
  }

function clear(){
  document.querySelector('#display').innerText = "";
  }
