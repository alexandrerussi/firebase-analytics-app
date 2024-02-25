import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyA54KyGDHsGYs-aGfpAruWIj5Pt1EZhku0",
    authDomain: "fir-analytics-f507c.firebaseapp.com",
    projectId: "fir-analytics-f507c",
    storageBucket: "fir-analytics-f507c.appspot.com",
    messagingSenderId: "761405602593",
    appId: "1:761405602593:web:aa1fb24f5a0559f233dc60",
    measurementId: "G-TFZRH8MM12"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

if (typeof window !== "undefined") {
    logEvent(analytics, 'codigo-rendereizado');
}

export { analytics, logEvent};