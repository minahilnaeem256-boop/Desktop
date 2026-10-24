function getHistory(){
    return document.getElementById("history-value").innerText;
}

function printHistory(value){
    document.getElementById("history-value").innerText = value;
}

function getOutput(){
    return document.getElementById("output-value").innerText;
}

function printOutput(value){
    if(value===""){
        document.getElementById("output-value").innerText = "";
    } else{
        document.getElementById("output-value").innerText= getFormattedNumber(value);
    }
}

function getFormattedNumber(num){
    if (num=== "-"){
        return "";
    }
    return Number(num).toLocaleString("en");
}

function reverseNumberFormat(num){
    return Number(num.replace(/,/g,""));
}

let operators = document.getElementsByClassName("operator");

for(let i= 0; i < operators.length; i++){
    operators[i].addEventListener("click", function() {
        let output = getOutput();
        let history = getHistory();

        if(this.id === "clear"){
            printHistory("");
            printOutput("");
        }
        else if (this.id === "backspace"){
            output = reverseNumberFormat(output).toString();
            output = output.slice(0, -1);
            printOutput(output);
        }
        else if(output !== "" || history !== ""){
            if(output === "" && history !== ""){
                if (isNaN(history[history.length -1])){
                    history = history.slice(0, -1);
                }
            }

            output = output === "" ? "" : reverseNumberFormat(output);
            history =  history + output;

            if(this.id === "="){
                printOutput(eval(history));
                printHistory("");
            }
            else{
                printHistory(history + this.id);
                printOutput("");
            }
        }
    });
}

let numbers = document.getElementsByClassName("number");

for(let i = 0; i < numbers.length; i++){
    numbers[i].addEventListener("click", function (){
        let output = reverseNumberFormat(getOutput());
        output= output.toString() + this.id;
        printOutput(output);
    });
}