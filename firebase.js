import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js"

import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js"

const firebaseConfig = {

apiKey: "YOUR_KEY",

authDomain: "rk-bakery.firebaseapp.com",

projectId: "rk-bakery",

storageBucket: "rk-bakery.appspot.com",

messagingSenderId: "123456",

appId: "APPID"

}

const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

window.db=db