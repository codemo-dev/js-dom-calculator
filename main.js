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
            let marks = "-+/*%";
            for (let i = 0; i < currentProcess.value.length; i++) {
                let char = currentProcess.value[i];
                if (marks.includes(char)) {
                    let parts = currentProcess.value.split(char);
                    let num1 = parseInt(parts[0]);
                    let num2 = parseInt(parts[1]);

                    if (char === "+") return num1 + num2;
                    if (char === "-") return num1 - num2;
                    if (char === "*") return num1 * num2;
                    if (char === "/") return num1 / num2;
                    if (char === "%") return num1 % num2;
                }
            }
            return null;
        }
        let finalResult = calc()
        if (finalResult !== null && !isNaN(finalResult)) {
            result.value = finalResult;
        }
    }
});
