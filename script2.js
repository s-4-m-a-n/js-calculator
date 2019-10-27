/*
   Advanced calculator : for solving
*/

var advancedCalculator = document.getElementById('checkBox1');
advancedCalculator.addEventListener('change',ac);


var link1 = document.querySelector('link').href;  //link to first css
var link2 = link1.replace('style.css','style-AC.css'); //link to second css


var status;
function ac(){
  status = advancedCalculator.checked;
  console.log(status);
  if (status == 'true'){
      document.querySelector('link').href = link2;
  }
  else{
     document.querySelector('link').href = link1;
  }
}
