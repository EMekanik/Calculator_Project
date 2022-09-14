//Creating a function that connects the calculator screen to all buttons on the calculator
(function () {
  const screen = document.querySelector(".screen");
  const buttons = document.querySelectorAll(".btn");
  const clear = document.querySelector(".btn-clear");
  const equal = document.querySelector(".btn-equal");

  //Using a forEach (High Order Array Method) to loop through every button and assign place it on the screen when clicked
  buttons.forEach((button) => {
    button.addEventListener("click", function (e) {
      let value = e.target.dataset.num;
      screen.value += value;
    });
  });
})();
