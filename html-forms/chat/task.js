const chat = document.querySelector('.chat-widget');
const chatInputText = document.querySelector('.chat-widget__input');
const chatMessages = document.querySelector('#chat-widget__messages');

const answerRobot = [ 
  'Кто тут?', 
  'Где ваша совесть?', 
  'К сожалению все операторы сейчас заняты! Не пишите нам больше!',
]
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; 
}

chat.onclick = () => {
  chat.classList.add('chat-widget_active');
}

chatInputText.addEventListener('keyup', (e) => {
  if(e.key === 'Enter' && chatInputText.value !== '') {
    var nowTime = new Date().toLocaleTimeString().slice(0, -3);
    let idx = getRandomInt(0, answerRobot.length);
    chatMessages.innerHTML += `
    <div class="message message_client">
      <div class="message__time">${nowTime}</div>
      <div class="message__text">${chatInputText.value}</div>
    </div>
    `;
    chatInputText.value = '';
    chatMessages.innerHTML += `
    <div class="message">
      <div class="message__time">${nowTime}</div>
      <div class="message__text">${answerRobot[idx]}</div>
    </div>` 
  }
})



