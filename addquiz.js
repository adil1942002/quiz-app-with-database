// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js";
import { getDatabase ,
ref ,
set ,
push ,
 } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBprb1WQC1-54rCPHEYxi9xWuXUUDmbSnQ",
  authDomain: "quiz-app-1b59e.firebaseapp.com",
  databaseURL: "https://quiz-app-1b59e-default-rtdb.firebaseio.com",
  projectId: "quiz-app-1b59e",
  storageBucket: "quiz-app-1b59e.appspot.com",
  messagingSenderId: "661376923763",
  appId: "1:661376923763:web:9ef4addc8518d01aba9206",
  measurementId: "G-G462EMV3YV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase();


var question = document.getElementById('question');
var option = document.getElementById('option');
var optionsParent = document.getElementById('optionsParent');
var correctAnswerElem = document.getElementById('correctAnswer');
function allEmty(){
  question.value = "";
  option.value = "";
  optionsParent.innerHTML = ""
  correctAnswerElem.innerHTML = ""
}

  var correctAnswer
var options = []

function renderOptions(){
    optionsParent.innerHTML = "";
    for(var i = 0 ; i < options.length ; i++){
        optionsParent.innerHTML += `<li class ="p-2 bg-light fs-5 rounded-2" onclick="setCorrectAnswer('${options[i]}')">${options[i]}</li>`
    }
}

window.addOptions = function(){

options.push(option.value)

renderOptions()
option.value = ""
}

window.setCorrectAnswer = function(a){
correctAnswer = a
correctAnswerElem.innerHTML = correctAnswer

}

window.submitQuestion = function(){
  var  quizIdRef = push(ref(database,'questions')).key
    var obj = {
      question: question.value,
      options: options,
      correctAnswer: correctAnswer,
      id : quizIdRef
    }


    var quizRef = ref(database,`questions/${quizIdRef}/`)
set(quizRef,obj) 
allEmty()
  }

window.back = function(){
  window.location.replace("../../index.html")
}
window.resetp = function(){
  window.location.replace("../setPassword/setPasswordindex.html ")
}
window.delQuiz = function(){
  window.location.replace("../delQuiz/delQuiz.html")
}



