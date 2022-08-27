// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyBiY9wh-LNdRGZtM3eCewFsnPQ3D3xXRRI",
authDomain: "mundo-invertido-dio-3d9c1.firebaseapp.com",
projectId: "mundo-invertido-dio-3d9c1",
storageBucket: "mundo-invertido-dio-3d9c1.appspot.com",
messagingSenderId: "701959963345",
appId: "1:701959963345:web:c27d674a6f25949296fbf0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app