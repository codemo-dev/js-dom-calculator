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
    } else if (value === "=") {
        try {
            result.value = eval(currentProcess.value);
        } catch {
            result.value = "Error";
        }
    }
});
