const calcScreen = document.getElementById("calc-screen");
const resultScreen = document.getElementById("result-screen");
const nob = document.querySelector(".nob");

const number = document.querySelectorAll(".number");
const operator = document.querySelectorAll(".operator");


let numbers = [];





//numbers
number.forEach((num) => {
  num.addEventListener("click", () => {

    if (resultScreen.innerHTML.length == 0) {
      if (calcScreen.innerHTML == 0 && num.id == 0) {
        calcScreen.innerHTML = 0;
      } else {
        if (calcScreen.innerHTML == 0 && calcScreen.innerHTML.length == 1) {
          calcScreen.innerHTML = num.id;
        } else {
          calcScreen.innerHTML += num.id;
        }
      }
    } else {
      calcScreen.innerHTML = resultScreen.innerHTML;
      calcScreen.innerHTML = num.id;
      resultScreen.innerHTML = ""
    }
  });
});

// operators
operator.forEach((op) => {
  op.addEventListener("click", () => {
      
    if (resultScreen.innerHTML.length == 0) {
      if (calcScreen.innerHTML.length == 0) {
        calcScreen.innerHTML = "";
      } else {
    
 

        if (
          op.id == "=" ||
          op.id == "sqrt" ||
          op.id == "sqr" ||
          op.id == "bkspace" ||
          op.id == "onefr"||
          op.id == 'plus-minus'
        ) {
        } else {

                if (isNaN(calcScreen.innerHTML.substr(calcScreen.innerHTML.length - 1)) == true) {
                calcScreen.innerHTML =    calcScreen.innerHTML.substring(0,calcScreen.innerHTML.length - 1);
                calcScreen.innerHTML+=op.id;
     } else {
         calcScreen.innerHTML += op.id;
     }

       
        }
      }

      // Plus or Minus

        if(op.id == 'plus-minus'){
              let plusMinus = -Number(calcScreen.innerHTML);
              if (isNaN(plusMinus)){
                   
              } else{
                calcScreen.innerHTML = plusMinus; 
                    

              }
        }

      // Plus or Minus



      // Clear
      if (op.id == "clear") {
        calcScreen.innerHTML = "";
        resultScreen.innerHTML = "";
      }
      // Clear

      // Square Root
      if (op.id == "sqrt") {
        resultScreen.innerHTML = Math.sqrt(calcScreen.innerHTML);
      }
      // Square Root

      // Equal
      if (op.id == "=") {
        let ans = eval(calcScreen.innerHTML);

        resultScreen.innerHTML = Number(ans.toString().substr(0, 10));
        // console.log(eval(calcScreen.innerHTML));
      }
      // Equal
        

      // Square
      if (op.id == "sqr") {
        resultScreen.innerHTML = Math.pow(calcScreen.innerHTML, 2);
      }
      // Square

      // bkspace
      if (op.id == "bkspace") {
        let bkSpaceStr = calcScreen.innerHTML.toString();
        calcScreen.innerHTML = bkSpaceStr.substr(
          0,
          calcScreen.innerHTML.length - 1
        );
      }
      // bkspace

      // onefr
      if (op.id == "onefr") {
        resultScreen.innerHTML = 1 / calcScreen.innerHTML;
      }
      // onefr
    } else {
      if (op.id != "clear") {
        if (op.id == "sqrt") {
          calcScreen.innerHTML = resultScreen.innerHTML;
          resultScreen.innerHTML = Math.sqrt(calcScreen.innerHTML);
        } else if (op.id == "sqr") {
          calcScreen.innerHTML = resultScreen.innerHTML;
          resultScreen.innerHTML = Math.pow(calcScreen.innerHTML, 2);
        } else if (op.id == "=") {
          // something can still be done
          //dont know what yet
        } else if (op.id == "onefr") {
          calcScreen.innerHTML = resultScreen.innerHTML;
          resultScreen.innerHTML = 1 / calcScreen.innerHTML;
        } else if(op.id == 'plus-minus'){
                  calcScreen.innerHTML =  resultScreen.innerHTML;
                  resultScreen.innerHTML = "";
                 let plusMinus = -Number(calcScreen.innerHTML);
              if (isNaN(plusMinus)){

              }else{
                calcScreen.innerHTML = plusMinus; 
              }
                 
        } else {
          calcScreen.innerHTML = resultScreen.innerHTML;


          calcScreen.innerHTML += op.id;
          resultScreen.innerHTML = "";
        }
      } else {
        calcScreen.innerHTML = "";
        resultScreen.innerHTML = "";
      }
    }
  });
});
     
nob.addEventListener("click", () => {
  nob.classList.toggle("switch");
  document.documentElement.classList.toggle("dark-mode");
  // document.querySelectorAll(".inverted").forEach((invert) => {
  //   invert.classList.toggle("dark-mode");
  // });

});