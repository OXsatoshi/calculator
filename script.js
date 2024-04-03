function add(a,b){console.log("from add"); return a + b;}
function multiply(a,b){return a*b;}
function substract(a,b){return a-b;}
function divide(a,b){return a/b;}
let operation ;
let firstOperand ="";
let secondOperand="";
let operationButtonPressed = false;
const display = document.querySelector(".display");
function handleClick(e) {
            if(e.target.classList.contains("operation")){
                operation = e.target.classList.item(0) ;
                operationButtonPressed=true;
            }
            if(!operationButtonPressed){
                firstOperand+=e.target.textContent;
                display.textContent= firstOperand;
            }        
            else{
                secondOperand+=e.target.textContent;
            }
            console.log(operation);

        
    
    
}
function handleEqual(){
    let result = operate(operation,parseInt(firstOperand),parseInt(secondOperand));
    display.textContent = result;
    operationButtonPressed = false;
}
const numberContainer = document.querySelector(".buttons");
const divsNumbers = document.querySelectorAll("div.buttons > div:not(.equal) ");
divsNumbers.forEach(div => div.addEventListener("click",handleClick));
document.querySelector("div.buttons >  div.equal").addEventListener("click",handleEqual);
function operate(operation,firstOperand,secondOperand){
    const functionOfoperation = getOperationFunction(operation);
    console.log(functionOfoperation);
    return functionOfoperation(firstOperand,secondOperand);
    
}
function getOperationFunction(operation){
    if(operation.toLowerCase() === "add") return add;
    if(operation.toLowerCase() === "divide") return divide;
    if(operation.toLowerCase() === "multiply") return multiply;
    if(operation.toLowerCase() === "substract") return substract;

}
console.log(operate("substract",1,2));