// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyCzL-y0TeNIbO2YS9Y3N1NNiBoG6oZX5cM",
    authDomain: "my-react-website-login-page.firebaseapp.com",
    projectId: "my-react-website-login-page",
    storageBucket: "my-react-website-login-page.appspot.com",
    messagingSenderId: "322703349984",
    appId: "1:322703349984:web:c5a0e23a3f50e73050d885",
    measurementId: "G-0FY5GDXZNB"
  };
// Your web app's Firebase configuration

const app = initializeApp(firebaseConfig);

// Optional: only if you're using analytics
const analytics = getAnalytics(app);



// Initialize Firebase


// Export auth instance
export const auth = getAuth(app);
 