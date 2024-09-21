const btnRetry = document.querySelector('.btn-retry');
const pieCircleH2 = document.querySelector('.pie-circle h2');
const score = localStorage.getItem('score');
const totalQuestion = localStorage.getItem('totalQuestion');
const resultPieGraph = document.querySelector('.result-pie-graph');
const correctResult = document.querySelector('.correct-result span');
const incorrectResult = document.querySelector('.incorrect-result span');
const pieCircle =document.querySelector('.pie-circle');
const statement = document.querySelector('.statement');

pieCircleH2.innerHTML = `${score}/${totalQuestion}`;

btnRetry.addEventListener("click",()=>{
    location.assign('index.html');
})
let correctDeg = (score / totalQuestion) * 360;
resultPieGraph.style.background = ` conic-gradient(rgba(53, 189, 58, 1) ${correctDeg}deg, rgba(255, 122, 122, 1) 0deg)`;

function rotatePieChart(degree) {
    resultPieGraph.style.transform = `rotateY(180deg)rotateZ(${degree}deg)`;
    pieCircle.style.transform = `rotateY(-180deg)rotateZ(${degree}deg)`;
}

if(score == 1){
    rotatePieChart(45);
    statement.innerText = '"you need practice better than"';
}else if(score == 2){
    rotatePieChart(11);
    statement.innerText = '"you need practice better than"';
}else if(score == 3){
    rotatePieChart(345);
    statement.innerText = '"Keep learning,you have a good Score!"';
}else{
    rotatePieChart(311);
    statement.innerText = '"Keep learning,you have very good Score!"';
}

if(score == 0){
    correctResult.parentElement.style.display = 'none';
    statement.innerText = '"It is Very Poor,you need learn more"';
}

if(score == totalQuestion){
    incorrectResult.parentElement.style.display = 'none';
    statement.innerText = '"Excellent Work!"';
}


correctResult.innerHTML = `${(score / totalQuestion) * 100}%`;
incorrectResult.innerHTML = `${((totalQuestion - score) / totalQuestion) * 100}%`;