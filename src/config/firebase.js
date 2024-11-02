import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "dash-portfolio-fda18.firebaseapp.com",
  projectId: "dash-portfolio-fda18",
  storageBucket: "dash-portfolio-fda18.appspot.com",
  messagingSenderId: "131745217437",
  appId: "1:131745217437:web:21e0d1388af52caa1fcd74",
  measurementId: "G-3LF98B0XLB",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
