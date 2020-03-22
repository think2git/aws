const input1 = document.querySelector('input');
const ul1 = document.querySelector('.js-ul');
const btn = document.querySelector('.js-btn');

const numCount = 6;
const lotto = [];

function resetBtn(event) {
  window.location.reload();
}

function getRandom() {
  let lotto = [];
  for (j = 0; j < numCount; j++) {
    const rnum = Math.ceil(Math.random() * 45, 0);
    console.log(rnum);
    lotto.push(rnum);
  }
  console.log(lotto);
  return lotto;
}

function printHappyNum(val) {
  const li1 = document.createElement('li');
  li1.innerHTML = val;
  ul1.appendChild(li1);
}

function getHappyNum(event) {
  console.log('event init');
  event.preventDefault();
  console.log(input1.value);
  for (i = 0; i < input1.value; i++) {
    const val = getRandom();
    console.log(val);
    printHappyNum(val);
  }
  input1.value = 'Click the button to reset';
  input1.disabled;
}
function init() {
  console.log('this is aws application init');
  input1.addEventListener('input', getHappyNum);
  btn.addEventListener('click', resetBtn);
}

init();
