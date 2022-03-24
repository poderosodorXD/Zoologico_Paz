import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAGF10X9Cpm2iq0oJcoSq4aI7v7NnNKaKw",
    authDomain: "zoologicopaz.firebaseapp.com",
    projectId: "zoologicopaz",
    storageBucket: "zoologicopaz.appspot.com",
    messagingSenderId: "781657703909",
    appId: "1:781657703909:web:afe2b4f9814113a4625b0c"
};

const app = initializeApp(firebaseConfig);

export default function getFirestoreApp() {
    return app
}