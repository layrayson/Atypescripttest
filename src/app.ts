//MODEL

let keypadButtons = document.querySelectorAll<HTMLButtonElement>(".screenkeys");

let input = document.querySelector("input")!;
let inputDisplay: (string | number)[] = [];

//VIEWS
keypadButtons.forEach((keypadButton) => {
  keypadButton.addEventListener("click", (e) => {
    inputDisplay.push(keypadButton.innerText);
    input.value = inputDisplay.join("");
    e.preventDefault();
  });
});

//CONTROLLERS
const clearInput = () => {
  input.value = "";
};

const deleteInput = () => {
  inputDisplay.pop();
  input.value = inputDisplay.join("");
};
