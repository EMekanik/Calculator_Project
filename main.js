//Creating a function that connects the calculator screen to all buttons on the calculator
(function () {
  const screen = document.querySelector(".screen");
  const buttons = document.querySelectorAll(".btn");
  const clear = document.querySelector(".btn-clear");
  const equal = document.querySelector(".btn-equal");

  //Using a forEach (High Order Array Method) to loop through every button and assign place it on the screen when clicked
  buttons.forEach((button) => {
    // makes the calculator responsive or better still sensitive to any 'click' events
    // I decided to use an arrow function which makes the whole line of simpler and short, easy to understand as well
    button.addEventListener("click", function (e) {
      //Takes the assigned value data-num as seen in our index.html and passes it directly unto our calculator screen
      let value = e.target.dataset.num;
      screen.value += value;
    });
  });
})();
