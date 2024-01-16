//JavaScript Operators start.
let x; //JavaScript Variables
x = 6; //JavaScript Variables

// assigning JS operators
let T, F;
  T = 12;
  F = 3 ;
  document.getElementById ('opr').innerHTML = T + F ;
  document.getElementById('xp').innerHTML = 5 * 10; //JavaScript Expressions
document.getElementById("ops").innerHTML = (5 + 5) * 1;
document.getElementById("mo").innerHTML = "This is the value of x:" + x ;
document.getElementById("number").innerHTML = 10.5; //number
document.getElementById("string").innerHTML = "John Doe"; //Strings
document //JavaScript Operators end.

document.getElementById('st').innerHTML ="Tamirat" + " " + "Teferi";
document.getElementById('g').innerHTML = y;



 // JavaScript code within the script tag
    let myVariable = "Hello, World!";

    // Output the value of the variable to the console
    console.log(myVariable);

    // You can use the variable within this block
    if (true) {
      let anotherVariable = "This is another variable.";
      console.log(anotherVariable);
    }

    // This would result in an error because anotherVariable is not accessible here
    // console.log(anotherVariable); // ReferenceError: anotherVariable is not defined


    // Using var
      function exampleVar() {
        if (true) {
          var x = 10;
        }
        console.log(x); // Outputs 10, var is function-scoped
      }

      // Using let
      function exampleLet() {
        if (true) {
          let y = 20;
        }
        console.log(y); // ReferenceError: y is not defined, let is block-scoped
      }
