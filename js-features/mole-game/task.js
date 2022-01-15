getHole = index => document.getElementById(`hole${index}`);
dead = document.getElementById("dead");
miss = document.getElementById("lost");
deadCount = dead.textContent;
missCount = miss.textContent;

winLost = (deadCount, missCount) => {
  if(deadCount === 10) {
    alert("Вы выйграли!");
    location.reload;
  }
  if(missCount === 5) {
    alert("Вы проиграли!");
    location.reload;
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


