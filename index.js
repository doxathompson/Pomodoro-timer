// Function to update the counter value
function updateCounter(counterId, increment) {
  const counterInput = document.getElementById(counterId);
  let currentValue = parseInt(counterInput.value);
  counterInput.value = currentValue + increment;
  updateClock();
}

// Function to update the clock display
function updateClock() {
  const hoursValue = parseInt(document.getElementById("counter1").value);
  const minsValue = parseInt(document.getElementById("counter2").value);
  const secondsValue = parseInt(document.getElementById("counter3").value);

  document.getElementById("hours").textContent = hoursValue;
  document.getElementById("mins").textContent = minsValue;
  document.getElementById("seconds").textContent = secondsValue;
}

// Add event listeners to the buttons
document.getElementById("increment1").addEventListener("click", function () {
  updateCounter("counter1", 1);
});

document.getElementById("decrement1").addEventListener("click", function () {
  updateCounter("counter1", -1);
});

document.getElementById("increment2").addEventListener("click", function () {
  updateCounter("counter2", 1);
});

document.getElementById("decrement2").addEventListener("click", function () {
  updateCounter("counter2", -1);
});

document.getElementById("increment3").addEventListener("click", function () {
  updateCounter("counter3", 1);
});

document.getElementById("decrement3").addEventListener("click", function () {
  updateCounter("counter3", -1);
});

// Initial update of the clock
updateClock();

// Button functions
let countdown;
let hoursInput = document.getElementById("counter1");
let minsInput = document.getElementById("counter2");
let secondsInput = document.getElementById("counter3");
let hours = document.getElementById("hours");
let mins = document.getElementById("mins");
let seconds = document.getElementById("seconds");


// Display PopUP
function displaypopUp() {
  const congratulationsDiv = document.getElementById("pop-up");
  congratulationsDiv.style.display = "block";
// Play the sound
const congratulationsSound = document.getElementById("congratulationsSound");
congratulationsSound.play();
}
function closepopUp() {
  const congratulationsDiv = document.getElementById("pop-up");
  congratulationsDiv.style.display = "none";

  const congratulationsSound = document.getElementById("congratulationsSound");
congratulationsSound.pause();
}



document.getElementById("start-btn").addEventListener("click", () => {
  const hoursValue = parseInt(hoursInput.value);
  const minsValue = parseInt(minsInput.value);
  if (isNaN(hoursValue) || isNaN(minsValue)) {
    alert("Please enter values for hours and minutes.");
  } else {
    if (!countdown) {
      let totalSeconds = hoursValue * 3600 + minsValue * 60 + parseInt(secondsInput.value);
      countdown = setInterval(() => {
        if (totalSeconds > 0) {
          totalSeconds--;
          hours.textContent = Math.floor(totalSeconds / 3600);
          mins.textContent = Math.floor((totalSeconds % 3600) / 60);
          seconds.textContent = totalSeconds % 60;
        } else {
          clearInterval(countdown);
          countdown = null;
          // Display a pop-up message when countdown reaches zero
          displaypopUp();
        }
      }, 1000);
    }
  }
});

document.getElementById("stop-btn").addEventListener("click", () => {
  if (countdown) {
    clearInterval(countdown);
    countdown = null;
  }
});

document.getElementById("clear-btn").addEventListener("click", () => {
  if (countdown) {
    clearInterval(countdown);
    countdown = null;
  }
  hoursInput.value = "0";
  minsInput.value = "0";
  secondsInput.value = "0";
  hours.textContent = "0";
  mins.textContent = "0";
  seconds.textContent = "0";
});







