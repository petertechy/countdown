let timerInterval;
let audio = new Audio("./asset/music.mp3");

function startCountdown() {
  clearInterval(timerInterval);

  let inputHour = parseInt(document.getElementById("inputHour").value) || 0;
  let inputMinute = parseInt(document.getElementById("inputMinute").value) || 0;
  let inputSecond = parseInt(document.getElementById("inputSecond").value) || 0;

  let hour = document.getElementById("hour");
  let minute = document.getElementById("minute");
  let second = document.getElementById("second");

  hour.innerText = formatTime(inputHour);
  minute.innerText = formatTime(inputMinute);
  second.innerText = formatTime(inputSecond);

  timerInterval = setInterval(countdown, 1000);
  displayMessage("Countdown Started");
  document.getElementById("resumeButton").disabled = true;
}

function pauseCountdown() {
  clearInterval(timerInterval);
  displayMessage("Countdown Paused");
  document.getElementById("resumeButton").disabled = false;
}

function resumeCountdown() {
  timerInterval = setInterval(countdown, 1000);
  displayMessage("Countdown Resumed");
  document.getElementById("resumeButton").disabled = true;
}

function countdown() {
  let hour = document.getElementById("hour");
  let minute = document.getElementById("minute");
  let second = document.getElementById("second");

  if (hour.innerText > 0 || minute.innerText > 0 || second.innerText > 0) {
    // setTimeout(function () {
      if (second.innerText > 0) {
        second.innerText = formatTime(second.innerText - 1);
      } else if (minute.innerText > 0) {
        minute.innerText = formatTime(minute.innerText - 1);
        second.innerText = 59;
      } else if (hour.innerText > 0) {
        hour.innerText = formatTime(hour.innerText - 1);
        minute.innerText = 59;
        second.innerText = 59;
      }
    // }, 1000);
  } else {
    playMusic();
    clearInterval(timerInterval);
    displayMessage("Countdown Completed");
    // return
  }
}

function playMusic() {
  audio.play();
}

function pauseMusic() {
  audio.pause();
}

function stopMusic() {
  audio.pause();
  audio.currentTime = 0;
}

function refreshBrowser() {
  location.reload();
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

function displayMessage(message) {
  let toast = document.getElementById("toast");
  toast.innerText = message;
  toast.style.display = "block";

  setTimeout(function () {
    toast.style.display = "none";
  }, 3000);
}
