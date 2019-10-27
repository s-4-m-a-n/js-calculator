/*
   basic calculator

*/


/*

"use strict";

document.body.addEventListener('click',onclick,false);
const screen = document.getElementById('screen');
const resultScreen = document.getElementById('result');

const mappingDigit={'point':'.','zero':'0','one':'1','two':'2','three':'3',
'four':'4','five':'5','six':'6','seven':'7','eight':'8','nine':'9'};

const mappingOperator = {'plus':'+','divi':'/'}

let pointFlag = false;
let operandFirst ;
let operandSecond ;
let operator;
let evlFlag = false; //determine if the evaluation between the two operands is possible
let operatorFlag = false;  /* this indicates whether the last input value is operator or not thus sava from       inputing  multiple operator */



/*

function onclick(e){


  var btn = e.target.id;
  var mapping={'point':'.','zero':'0','one':'1','two':'2','three':'3',
  'four':'4','five':'5','six':'6','seven':'7','eight':'8','nine':'9'};
 var operation = {'plus':'+','divi':'/'}

  if (screen.value == '0')
     screen.value ='';


 else if (result.value == '0' && btn in operation ){
   result.value ='';
   result.value = (screen.value).concat(operation[btn]);
   screen.value ='0';
 }

  screen.value =screen.value.concat(mapping[btn]);

}
*/

/*
function onclick(e){
  var btn = e.target.id;
  switch(btn){
    case 'one':
    case 'two':
    case 'three':
    case 'four':
    case 'five':
    case 'six':
    case 'seven':
    case 'eight':
    case 'nine':
    case 'zero':
       putDigit(btn);
       break;
    case 'point':
       putPoint(btn);
       break;

   case 'plus':
   case 'min':
   case 'divi':
   case 'mul':
      putOperator(btn);



  }
}

function putDigit(btn){
  if (screen.value == '0')
      screen.value = '';
 screen.value += mappingDigit[btn];
 operatorFlag = false;
}

function putPoint(btn){
  if (pointFlag==false){
      screen.value += mappingDigit[btn];
      pointFlag = true;
  }
}

function putOperator(btn){
  if (evlFlag == false && operatorFlag != true  && btn != 'eqls'){
              if (operandFirst == undefined ){
                operandFirst = screen.value ;
                operator = mappingOperator[btn];
                screen.value += mappingOperator[btn];

              }
              else{

                operandSecond = (screen.value).substring(screen.value.indexOf(operator)+1);

                console.log(operandFirst + operator + operandSecond);

                     switch(operator){
                        case '+':
                              resultScreen.value = screen.value + " =";
                              operandFirst = Number(operandFirst) + Number(operandSecond);
                              screen.value = operandFirst + '+';
                              operator = '+';

                              break;
                       case '-':
                              resultScreen.value = screen.value + " =";
                              operandFirst = Number(operandFirst) - Number(operandSecond);
                              screen.value = operandFirst + '-';
                              operator = '-';
                              break;

                             }
              }

              operatorFlag = true ;
     }



}

*/



"use strict";

//adding audio
  var clickSound = new Audio('Button-click-sound2.wav');
  var alertSound  = new Audio('bell-sound1.wav');
let displayScreen = document.getElementById('screen');
let resultScreen = document.getElementById('result');

let operandFirst;
let operandSecond;
let operator ;
let operatorFlag = false ; //saves from entering  operators simultaneously if flag is true;
let pointFlag = false ; //saves from entering more than one decimal in an operand if flag is true
let evlFlag  = false; //determines whether two operand are ready to be calculated if flag is true
let ans=0;

const mappingDigit={'point':'.','zero':'0','one':'1','two':'2','three':'3',
'four':'4','five':'5','six':'6','seven':'7','eight':'8','nine':'9'};

const mappingOperator = {'plus':'+','divi':'/','mul':'*','min':'-'}

 const mappingKeyReverse = {'1':'one','2':'two','3':'three','4':'four','5':'five','6':'six','7':'seven','8':'eight','9':'nine','0':'zero','.':'point','/':'divi','*':'mul','+':'plus','-':'min','Enter':'eqls','=':'eqls','Backspace':'backspace','Delete':'del'}


function putDigit(digit){
  if (displayScreen.value == '0' || evlFlag == false){
      resetScreen();

      evlFlag = true;
    }

  displayScreen.value += digit;
console.log(displayScreen.value);
  operatorFlag = false;

}


function resetScreen(){
  displayScreen.value ='';
  operandFirst = undefined;
  operandSecond = undefined;
  operatorFlag = false;
  pointFlag = false;
  operator = '';

      resultScreen.value = 'Ans = ' + ans;
}


function printResultScreen(){  //display operation in result screen
  resultScreen.value = displayScreen.value + ' =';
}

function printDisplayScreen(result,opt=''){

  displayScreen.value = result + opt;
  operatorFlag = opt == ''? false : true;

}

function putOperator(operator){
    displayScreen.value += operator ;
    operatorFlag = true ;
}
function fetchOperandFirst(){
  operandFirst = Number(displayScreen.value);
}
function fetchOperandSecond(){
   operandSecond = Number(displayScreen.value.substring(displayScreen.value.indexOf(operator)+1));
}

function giveResult(opt){  // execute for '='
   var res;
  switch(opt){
          case '+':
                   res = operandFirst + operandSecond;
                   console.log(res);
                  break;
          case '-':
                   res = operandFirst - operandSecond;
                   console.log(operandFirst,operandSecond);
                  break;
          case '*':
                    res = operandFirst * operandSecond;
                    console.log(res);
                   break;
         case '/':
                   res = operandFirst / operandSecond;
                  break;
     }

  return res ;


}


function overRideOperator(opt){
     displayScreen.value = operandFirst + opt;
     operator = opt;
}  //change the operator


//function for backspace
function deleteLastLetter(){
      var lastLetter = displayScreen.value.substring(displayScreen.value.length - 1);
var numberClass =['1','2','3','4','5','6','7','8','9','0'];
var operatorClass = ['+','-','*','/'];

switch(true){
    case numberClass.includes(lastLetter):
           backspace();
          break;
    case lastLetter == '.':
           backspace();
           pointFlag=false;
          break;
    case operatorClass.includes(lastLetter):
          backspace();
          operandFirst = undefined;          operatorFlag = false;
    // checking if operandFirst includes 'point' or not
          displayScreen.value.includes('.')? pointFlag = true :pointFlag = false ;


          operator = '';

}

}

function backspace(){
    displayScreen.value = displayScreen.value.substring(0,displayScreen.value.length-1);
}


function notification(){
  alertSound.play() ;
  alert("Enable NumLock ")

}









//main
document.body.addEventListener('click',onclick,false);

//for keyboard event
document.body.addEventListener('keydown',onclick);




function onclick(event){

/*
      if (event.detail === 1)//for mouse event detail =1
      {
        var btn = event.target.id;
      }
      else {
       var btn = mappingKeyReverse[event.key];
      }

*/
   let  btn;
      event.detail === 1 ? btn = event.target.id : event.getModifierState("NumLock")==true ?btn = mappingKeyReverse[event.key] :notification();



      var digit = mappingDigit[btn];
      var opt  = mappingOperator[btn];   // operator stores the previous operator and opt stores the latest operator
                                // calculation is done for previous operator  :  1 + 2 -  ==> operator = '+' and opt = '-'
console.log('btn '+btn);

  switch(btn){
     case 'one':
     case 'two':
     case 'three':
     case 'four':
     case 'five':
     case 'six':
     case 'seven':
     case 'eight':
     case 'nine':
     case 'zero':
          clickSound.play();
        putDigit(digit);
        break;
    case 'point':
             clickSound.play();
                  if (pointFlag == false)
                      putDigit(digit);  //here digit includes point
                  pointFlag = true;
                  break;
   case 'plus':
   case 'min':
   case 'mul':
   case 'divi':
          clickSound.play();
              evlFlag = true;
              if (operandFirst == undefined ){
                     if (operatorFlag == false ){
                        fetchOperandFirst();
                        putOperator(opt);
                        operator = opt;
                        pointFlag =false;
                        evlFlag = true;
                      }
                      else{
                        overRideOperator(opt);
                      }
                }
              else if (operandFirst != undefined){

                   if (operatorFlag == false){
                      fetchOperandSecond();
                      var calculatedValue = giveResult(operator);
                      printResultScreen();
                      operandFirst = Number(calculatedValue);
                      operator = opt;
                      printDisplayScreen(calculatedValue,opt);
                    }
                    else if (operatorFlag == true){

                      overRideOperator(opt);
                      evlFlag = true;
                    }

              }

              pointFlag = false;
              break;


   case 'eqls':
         clickSound.play();
          if (operandFirst != undefined && operatorFlag == false){
            fetchOperandSecond();
            var calculatedValue = giveResult(operator);
            printResultScreen();
            printDisplayScreen(calculatedValue);

            operandFirst = calculatedValue ;
            ans = calculatedValue;

            operator = '=';
            evlFlag = false;
            operatorFlag = true; //prevent double or more equals to to enter

          }
       break;
  case 'del':
        clickSound.play();
        resetScreen();
        displayScreen.value = '0';
        break;

 case 'backspace':
       clickSound.play();
        deleteLastLetter();
        break;

  }
}
