const allButtons = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "+","-","x","÷","=","AC", ".", "+/-"];
const arithmetic =["+","-","x","÷","="];
const controls = ["AC", ".", "+/-"];

let firstNum = 0;
let operator = null;
let secondNum = null;


for (let i = 0; i < allButtons.length; i++) {
    let button = document.createElement('button');
    let value = allButtons[i];
    button.innerText = value;

    button.addEventListener('click', (e) => {
        console.log("clicked");
    })









    document.getElementById("buttons").appendChild(button);
    const display = document.getElementById("display");

}