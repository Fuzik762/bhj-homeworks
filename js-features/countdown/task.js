timer = document.getElementById('timer');
startTime = timer.textContent;
  timerInt = setInterval(() => {
    startTime--;
    timer.textContent = startTime;
    if(startTime === 0) {
      alert("Вы победитель!");
      clearInterval(timerInt);
    }
  }, 1000);
