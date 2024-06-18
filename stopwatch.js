const counterEL = document.getElementById("counter");
const timeInputEL = document.getElementById("timeInput");
let count =0;
let intervalId =0;

function handleTimeInputChange(event){
  count = event.target.value *60;
  updateCounterUI();
}
function updateCounterUI()  {
  counterEL.innerText = count + "s";
}

function handleStart() {
  timeInputEL.style.display = "none"
  intervalId = setInterval(() => {
    count -= 1;
    updateCounterUI();
   
  },1000);
}

function handlePause(){
clearInterval(intervalId)
}

function handleReset() {
  clearInterval(intervalId);
  count = timeInputEL.value * 60;
  updateCounterUI();
 timeInputEL.style.display ="block";
}