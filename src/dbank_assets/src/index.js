import { dbank } from "../../declarations/dbank";

window.addEventListener("load", async () => {
  console.log("Gotcha!");
  update();
})

async function update() {
  const currentAmount = await dbank.chackBalance();
  document.getElementById("value").innerText = Math.round(currentAmount * 100) / 100;
}

document.querySelector("form").addEventListener("submit", async (event) => {

  event.preventDefault();
  const button = event.target.querySelector("#submit-btn");
  // console.log(button);
  const increase = parseFloat(document.getElementById("input-amount").value);
  const decrease = parseFloat(document.getElementById("withdrawal-amount").value);

  if (document.getElementById("input-amount").value.length != 0) {
    await dbank.topUp(increase);
    button.setAttribute("disabled", true);
  } else if (document.getElementById("withdrawal-amount").value.length != 0) {
    await dbank.withdraw(decrease);
    button.setAttribute("disabled", true);
  }

  await dbank.compound();


  update();
  document.getElementById("input-amount").value = "";
  document.getElementById("withdrawal-amount").value = "";
  button.removeAttribute("disabled");
})
