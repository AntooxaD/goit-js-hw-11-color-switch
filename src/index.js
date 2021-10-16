import './sass/main.scss';

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
const startBtn = document.querySelector('.js-start');
const stopBtn = document.querySelector(".js-stop");
const delay = 500;
let timerId = null;
       
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
startBtn.addEventListener('click', onStartBtn);
stopBtn.addEventListener('click', onStopBtn);

function onStartBtn() {
  timerId = setInterval(changeColor, delay)
  startBtn.disabled = true
}
function changeColor() {
  const colorId = randomIntegerFromInterval(0, colors.length - 1);
  document.body.style.setProperty('background-color', colors[colorId]);
}
function onStopBtn() {
  clearInterval(timerId);
  startBtn.disabled = false;
}