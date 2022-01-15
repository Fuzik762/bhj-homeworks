counterDom = document.getElementById("clicker__counter");
counter = counterDom.textContent;
cookie = document.getElementById("cookie");
flag = false;
cookie.onclick = () => {
  if(flag) {
    cookie.width+= 20;
    cookie.height+= 20;
    flag = false;
  } else {
    cookie.width-= 20;
    cookie.height-= 20;
    flag = true;
  }
  counter++;
  counterDom.textContent = counter;
}