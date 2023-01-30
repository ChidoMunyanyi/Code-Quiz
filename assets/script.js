const startButton = document.getElementById('start')
const timer = document.getElementById('time')



//startButton.addEventListener("click", function() 

   // const timer = 60;

 //   var timeInterval = setInterval(function () {
   //     if 
   // }
 //   )
//})
startButton.onclick = () => {
    showQuestion();
    //timer = setInterval(timer,1000)
}

function showQuestion () {
    questionTitle.textContent = quizQs[currentQuestion].question1
}