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
let timerid = null;

startBtn.addEventListener('click', () => {
    timerId = setInterval(changeCollor, 2000);
})
        
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};        