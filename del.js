import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js";
import { getDatabase ,
    ref,
onChildAdded,
remove } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";
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


var main = document.getElementById("main")
console.log(main);
var getRef = ref(database,'questions/')
var arry = [];
onChildAdded(getRef,function(data){
    
    arry.push( data.val())
    main.innerHTML = ""
    // console.log(data.val());
    for(var i = 0 ; i < arry.length; i++){
        // console.log(arry[i]);

    main.innerHTML += `<div class="deleteData">
    <div class="question">
    <h3>Question: ${arry[i].question}</h3>
    </div>
    <div class="option">
    <apan>options :</span>
<button class=  'deleterow'> ${arry[i].options} </button>
</div>
<div class="correct">
<P class="correctans">correctAnswer : ${arry[i].correctAnswer}</P>
</div>
<div id="btn">
<button onclick="delrow('${arry[i].id}')" class="btn py-2 px-3 hover">DELETE</button>
</div>
</div>
<hr>`
}
})

window.delrow = function(id){
remove(ref(database , `questions/${id}/`))
window.location.replace("../delQuiz/delQuiz.html")
}

window.back = function(){
    window.location.replace("../../index.html")
  }