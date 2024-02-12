const input = document.querySelector(".input");
const buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const buttonText = event.target.innerText;

    if (buttonText === "=") {
      input.value = eval(input.value);
    } else if (buttonText === "C") {
      input.value = "";
    } else {
      input.value += buttonText;
    }
  });
});
