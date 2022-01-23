counterDom = document.getElementById("clicker__counter");
counter = counterDom.textContent;
cookie = document.getElementById("cookie");
cookie.onclick = () => {
  if(counter%2 === 0) {
    cookie.width+= 20;
    cookie.height+= 20;
  } else {
    cookie.width-= 20;
    cookie.height-= 20;
  }
  counter++;
  counterDom.textContent = counter;
}