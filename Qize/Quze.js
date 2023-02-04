function calculateScore() {
   var questions = document.querySelectorAll('input[type="radio"]:checked');
   var score = 0;

   questions.forEach(function (question) {
     
       if (question.value === 'a') {
           score++;
    
       }
   });
   
   var resultElement = document.getElementById('result') ;
   resultElement.innerHTML = 'Your score: ' + score + ' out of ' + questions.length;
   alert("Thank you for feedback totle" + score + "yes");

}
