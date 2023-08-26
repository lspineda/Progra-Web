document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll(".number, .operator");
    const clearButton = document.getElementById("clear");
    const backspaceButton = document.getElementById("backspace");
    const percentButton = document.getElementById("percent");
    const changeSignButton = document.getElementById("change-sign");

    let currentInput = "";

    function updateDisplay() {
        display.value = currentInput;
    }

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const buttonText = button.textContent;

            if (buttonText === "=") {
                try {
                    currentInput = eval(currentInput);
                } catch (error) {
                    currentInput = "Error";
                }
            } else {
                currentInput += buttonText;
            }

            updateDisplay();
        });
    });

    percentButton.addEventListener("click", function () {
        currentInput = (parseFloat(currentInput) / 100).toString();
        updateDisplay();
    });

    changeSignButton.addEventListener("click", function () {
        currentInput = (-parseFloat(currentInput)).toString();
        updateDisplay();
    });

    clearButton.addEventListener('click', () => {
        display.value = '';
        currentInput = '';
    });

    backspaceButton.addEventListener('click', () => {
        display.value = display.value.slice(0, -1);
        currentInput = currentInput.slice(0, -1);
    });
});

