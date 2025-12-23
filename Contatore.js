
let counter = 0;
const app = document.createElement("div");
const counterDisplay = document.createElement("h1");
counterDisplay.textContent = counter;
app.textContent = "Contatore"


const incrementButton = document.createElement("button");
incrementButton.textContent = "+";
const decrementButton = document.createElement("button");
decrementButton.textContent = "-";
const resetButton = document.createElement("button");
resetButton.textContent = "reset";


function updateDisplay() {
  counterDisplay.textContent = counter;
}


incrementButton.addEventListener("click", () => {
  counter++;
  updateDisplay();
});


decrementButton.addEventListener("click", () => {
  counter--;
  updateDisplay();
});

resetButton.addEventListener("click", ()=>{
    counter = 0;
    updateDisplay();
})


document.body.append(app);
app.appendChild(counterDisplay);
app.appendChild(incrementButton);
app.appendChild(decrementButton);
app.appendChild(resetButton);
