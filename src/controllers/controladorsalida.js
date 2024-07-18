import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-analytics.js";

import { getAuth, onAuthStateChanged, signOut } from 'https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js'

const firebaseConfig = {
    apiKey: "AIzaSyCR_SvEKLnrJBx1ZRYi_aIMznIqJJ2rvmU",
    authDomain: "loginsuradualjp.firebaseapp.com",
    projectId: "loginsuradualjp",
    storageBucket: "loginsuradualjp.appspot.com",
    messagingSenderId: "150395081816",
    appId: "1:150395081816:web:a6434ed6651f779469262d",
    measurementId: "G-S8PSSBLD06"
  };

  const app = initializeApp(firebaseConfig);

  let avatar=document.getElementById("avatar")
  let botonSalir=document.getElementById("botonsalir")

  //utilizando la información del usuario loggeado
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if(user){
        let uid=user.uid
        avatar.classList.remove("invisible")
        avatar.textContent=user.email

    }else{

    }
  })

  botonSalir.addEventListener("click", function() {
    signOut(auth).then(()=>{
        avatar.classList.add("invisible")
        window.location.href="./views/login.html"
    })
  })