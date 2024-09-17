const audio = document.createElement('img');
const audioBox = document.querySelector('.audio');
const QuestionBox = document.querySelector('.question-box');
const options = document.querySelectorAll('.option');
const timer = document.querySelector('.timer span');
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

function dingCorrect() {
    let sound = document.querySelector('#correct');
    sound.play();
}

function dongWrong() {
    let sound = document.querySelector('#incorrect');
    sound.play();
}





let a = 30;
function setTimer() {
    a--;
    if(a <= 15){
        document.documentElement.style.setProperty('--timer-bg-color', 'rgba(197, 177, 0, 0.43)');
        document.documentElement.style.setProperty('--body-bg-color', 'rgba(228, 229, 199, 1)');
        document.documentElement.style.setProperty('--btn-color', 'rgba(197, 136, 0, 1)');
    }
    if(a <= 5){
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

const stopTimer = setInterval(setTimer, 1000);

function stopInterval() {
    clearInterval(stopTimer);
    timer.innerText = '00:00'
}

