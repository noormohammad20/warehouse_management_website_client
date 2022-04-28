
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyBaUg4H7QQ1kaBindyXOEaFv6xUOpg16gc",
    authDomain: "toy-warehouse.firebaseapp.com",
    projectId: "toy-warehouse",
    storageBucket: "toy-warehouse.appspot.com",
    messagingSenderId: "214742408591",
    appId: "1:214742408591:web:5d4be03207a72ea939bffa"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const auth = getAuth(app)

export default auth
