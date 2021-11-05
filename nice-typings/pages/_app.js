import { useEffect } from 'react'
import 'tailwindcss/tailwind.css'
import '../styles/global.css';
import { GetAuth } from 'firebase/auth';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
      apiKey: "AIzaSyDbWHXn5_6g3CzFDM_Do4uzv1hib_uSMUA",
      authDomain: "nice-typings.firebaseapp.com",
      projectId: "nice-typings",
      storageBucket: "nice-typings.appspot.com",
      messagingSenderId: "841368265446",
      appId: "1:841368265446:web:c6316b9abfbcd3b2a35127",
      measurementId: "G-YV72W8VK00"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
  }, [])

  return (
    <Component {...pageProps} />
  )
}

export default MyApp
