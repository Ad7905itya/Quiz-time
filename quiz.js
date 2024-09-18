const audio = document.createElement('img');
const audioBox = document.querySelector('.audio');
const QuestionBox = document.querySelector('.question-box');
const options = document.querySelectorAll('.option');
const timer = document.querySelector('.timer span');
const btn = document.querySelector('.btn-next');
turn0 = true;


audio.src = 'images/🦆 icon _Volume Up_.svg';
audioBox.append(audio);
audioBox.addEventListener('click', () => {
    let sound1 = document.querySelector('#correct');
    let sound2 = document.querySelector('#incorrect');
    if (turn0 === true) {
        audio.src = 'images/🦆 icon _Volume Mute_.svg';
        sound1.muted = true;
        sound2.muted = true;
        turn0 = false;
    } else {
        audio.src = 'images/🦆 icon _Volume Up_.svg';
        turn0 = true;
        sound1.muted = false;
        sound2.muted = false;
    }
})

let currentQuestion = {};
let AvailableQuestion = [];
let score = 0;

async function Questions() {
    let response = await fetch('questions.json');
    let questions = await response.json();
    startQuiz(questions);
}

function startQuiz(question) {
    AvailableQuestion = [...question];
    let indx = Math.floor(Math.random() * AvailableQuestion.length);
    currentQuestion = AvailableQuestion[indx];
    QuestionBox.innerText = currentQuestion.Question;
    options.forEach((option) => {
        let number = option.dataset.number;
        option.innerHTML = currentQuestion['Option' + number];
    })
    AvailableQuestion.splice(indx, 1);
}

btn.addEventListener('click', () => { 
    if (AvailableQuestion.length === 0) {
        return location.assign('Result.html');
    }
    startQuiz(AvailableQuestion);
    a = 30;
    startTimer();
    if(a == 0){
        stopInterval();
    }
})

Questions()



function dingCorrect() {
    let sound = document.querySelector('#correct');
    sound.play();
}

function dongWrong() {
    let sound = document.querySelector('#incorrect');
    sound.play();
}


function getTimer(){
    a--;
    if (a <= 15) {
        document.documentElement.style.setProperty('--timer-bg-color', 'rgba(197, 177, 0, 0.43)');
        document.documentElement.style.setProperty('--body-bg-color', 'rgba(228, 229, 199, 1)');
        document.documentElement.style.setProperty('--btn-color', 'rgba(197, 136, 0, 1)');
    }else{
        document.documentElement.style.setProperty('--timer-bg-color', 'rgba(0, 163, 5, 0.48)');
        document.documentElement.style.setProperty('--body-bg-color', '#CCE2C2');
        document.documentElement.style.setProperty('--btn-color', 'hsla(122, 100%, 32%)');
    }
    if (a <= 5) {
        document.documentElement.style.setProperty('--timer-bg-color', 'rgba(197, 12, 0, 0.43)');
        document.documentElement.style.setProperty('--body-bg-color', 'rgba(219, 173, 173, 1)');
        document.documentElement.style.setProperty('--btn-color', 'rgba(197, 0, 0, 1)');
    }
    timer.innerText = '00:' + a;
    if (a.toString().split('').length == 1) {
        timer.innerText = '00:0' + a;
    }
    if (a == 0) {
        stopInterval();
    }
}

let a = 30;
let stopTimer = null;
function startTimer(){
    stopTimer = setInterval(getTimer, 1000);       
}

function stopInterval() {
    clearInterval(stopTimer);
    timer.innerText = '00:00'
}
startTimer();