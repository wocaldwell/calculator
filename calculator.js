/*
  Create a function that multiplies two numbers
  passed in as arguments. Return the product.
 */
document.getElementById("multButton").addEventListener("click", multNums);
function multNums(firstNum, secondNum) {
  var firstNum = parseFloat(document.getElementById("firstNum").value);
  var secondNum = parseFloat(document.getElementById("secondNum").value);
  document.getElementById("ans").innerHTML = firstNum *= secondNum;
}

/*
  Create a function that adds two numbers
  passed in as arguments. Return the sum.
 */
document.getElementById("addButton").addEventListener("click", addNums);
function addNums(firstNum, secondNum) {
  var firstNum = parseFloat(document.getElementById("firstNum").value);
  var secondNum = parseFloat(document.getElementById("secondNum").value);
  document.getElementById("ans").innerHTML = firstNum += secondNum;
}

/*
  Create a function that subtracts two numbers
  passed in as arguments. Return the difference.
 */
document.getElementById("subButton").addEventListener("click", subNums);
function subNums(firstNum, secondNum) {
  var firstNum = parseFloat(document.getElementById("firstNum").value);
  var secondNum = parseFloat(document.getElementById("secondNum").value);
  document.getElementById("ans").innerHTML = firstNum -= secondNum;
}

/*
  Create a function that divides two numbers
  passed in as arguments. Return the quotient.
 */
document.getElementById("divButton").addEventListener("click", divNums);
function divNums(firstNum, secondNum) {
  var firstNum = parseFloat(document.getElementById("firstNum").value);
  var secondNum = parseFloat(document.getElementById("secondNum").value);
  document.getElementById("ans").innerHTML = firstNum /= secondNum;
}


/*
  Create a function that accepts three arguments.
    1. First number
    2. Second number
    3. A function that performs an operation on them

  Return the value of the operation.
 */

