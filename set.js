// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js";
import { getDatabase ,
    ref,
set } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";
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

var password = document.getElementById("password")
function call() {   

    window.location.replace("/index.html")
}
window.setPassword = function () {
    var obj = {
        password: password.value
    }
    var userRef = ref(database, "setPassword/");
    set(userRef,obj)
    setTimeout(function(){
        call()
        },2000)
        password.value = ""
}
