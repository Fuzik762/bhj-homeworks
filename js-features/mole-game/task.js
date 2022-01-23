getHole = index => document.getElementById(`hole${index}`);
dead = document.getElementById("dead");
miss = document.getElementById("lost");
deadCount = dead.textContent;
missCount = miss.textContent;

reloadPage = (deadCount, missCount) => {
  dead.textContent = 0;
  miss.textContent = 0;
  deadCount = 0;
  missCount = 0;
  location.reload(true);
}

winLost = (deadCount, missCount) => {
  if(deadCount === 10) {
    alert("Вы выйграли!");
    reloadPage(deadCount, missCount);
  }
  if(missCount === 5) {
    alert("Вы проиграли!");
    reloadPage(deadCount, missCount);
  }
}

for(let i=1; i<=9; i++) {
  getHole(i).onclick = function() {
    hasMole = this.className.includes('hole_has-mole');
    console.log(hasMole);
    if(hasMole) {
      deadCount++;
      dead.textContent = deadCount;
    } else {
      missCount++;
      miss.textContent = missCount;
    }
    winLost(deadCount, missCount);
  }
}


