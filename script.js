let displayValue = "0";
let firstNumber = null;
let operator = null;
let secondNumber = null;

const updateDisplay = () => {
  const displayElement = document.querySelector(".display");
  displayElement.textContent = displayValue;
};

const appendNumber = (number) => {
  if (displayValue === "0" || displayValue === "Error") {
    displayValue = number;
  } else {
    displayValue += number;
  }
  updateDisplay();
};

const setOperator = (op) => {
  if (firstNumber === null) {
    firstNumber = parseFloat(displayValue);
  } else if (operator !== null) {
    operate();
  }
  operator = op;
  displayValue = "0";
};

const operate = () => {
  if (operator !== null && displayValue !== "Error") {
    secondNumber = parseFloat(displayValue);
    switch (operator) {
      case "+":
        displayValue = (firstNumber + secondNumber).toString();
        break;
      case "-":
        displayValue = (firstNumber - secondNumber).toString();
        break;
      case "*":
        displayValue = (firstNumber * secondNumber).toString();
        break;
      case "/":
        if (secondNumber === 0) {
          displayValue = "Error";
        } else {
          displayValue = (firstNumber / secondNumber).toString();
        }
        break;
    }
    firstNumber = parseFloat(displayValue);
    operator = null;
    secondNumber = null;
    updateDisplay();
  }
};

const clearDisplay = () => {
  displayValue = "0";
  firstNumber = null;
  operator = null;
  secondNumber = null;
  updateDisplay();
};

const addDecimal = () => {
  if (!displayValue.includes(".")) {
    displayValue += ".";
  }
  updateDisplay();
};

const numberButtons = document.querySelectorAll(".number");
numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const number = button.textContent;
    appendNumber(number);
  });
});

const operatorButtons = document.querySelectorAll(".operator");
operatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const op = button.textContent;
    setOperator(op);
  });
});

const equalsButton = document.querySelector(".equals");
equalsButton.addEventListener("click", operate);

const clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", clearDisplay);

const decimalButton = document.querySelector(".decimal");
decimalButton.addEventListener("click", addDecimal);
