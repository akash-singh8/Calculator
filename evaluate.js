let expression = document.getElementById("expression");
let buttons = document.querySelectorAll("button");

let Ans = 0;
let flag = false;

function evaluate() {
  if (expression.value.length) {
    try {
      Ans = eval(expression.value);
      expression.style.color = "#939393";
      expression.value += `=${Ans}`;
      flag = true;
    } catch (err) {
      console.log(err);
      alert("Invalid Expression : " + expression.value);
      expression.value = "";
    }
  }
}

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (flag) {
      expression.value = "";
      expression.style.color = "white";
      flag = false;
    }
    let txt = btn.innerText;
    if (txt === "=") {
      evaluate();
    } else if (txt === "del") {
      expression.value = expression.value.substr(
        0,
        expression.value.length - 1
      );
    } else if (txt === "C") {
      expression.value = "";
    } else if (txt === "Ans") {
      expression.value += Ans;
    } else if (txt === "^") {
      expression.value += "**";
    } else {
      expression.value += txt;
    }
  });
});

document.querySelector("a").addEventListener("mouseenter", () => {
  document.querySelector("strong").style.color = "cyan";
});
document.querySelector("a").addEventListener("mouseleave", () => {
  document.querySelector("strong").style.color = "white";
});
