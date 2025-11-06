const allButtons = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "+","-","x","÷","=","AC", ".", "+/-"];
const arithmetic =["+","-","x","÷","="];
const controls = ["AC", ".", "+/-"];

let firstNum = 0;
let operator = null;
let secondNum = null;

const display = document.getElementById("display")
const buttons = document.getElementById("buttons");

//attach numbers to buttons
for (let i = 0; i < allButtons.length; i++) {
    const button = document.createElement('button');
    const value = allButtons[i];
    button.innerText = value;


}