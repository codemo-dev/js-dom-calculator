let container = document.getElementsByClassName("container")[0];
let result = document.querySelector("[name='result']");
let currentProcess = document.querySelector("[name='currProcess']");

container.addEventListener("click", function (e) {
    if (e.target.tagName !== "BUTTON") return;
    const value = e.target.dataset.value;
    
    if (value === "d") {
        currentProcess.value = currentProcess.value.slice(0, -1);

    } else if (value === "ac") {
        result.value = "";
        currentProcess.value = "";

    } else if (value !== "=" && value !== "+/-") {
        currentProcess.value += value;

    }  else if (isNaN(Number(currentProcess.value)) && currentProcess.value.length === 1) {
        result.value = "";
        currentProcess.value = ""

    } else if (value === "=") {

        function calc() {
            let process = currentProcess.value;

            let nums = process.split(/[\+\-\*\/\%]/).map(n => parseFloat(n));
            let marks = ["+", "-", "*", "/", "%"];
            let operators = process.split("").filter(char => marks.includes(char));

            let total = nums.reduce((acc, curr, i) => {
                let op = operators[i - 1];

                if (op === "+") return acc + curr;
                if (op === "-") return acc - curr;
                if (op === "*") return acc * curr;
                if (op === "/") return acc / curr;
                if (op === "%") return acc % curr;

                return curr;
            },);
            return total;
        }
        let finalResult = calc()

        if (finalResult !== null && !isNaN(finalResult)) {
            result.value = finalResult;
        }
    }
});
