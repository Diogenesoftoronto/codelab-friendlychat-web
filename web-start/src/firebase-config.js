/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  /* TODO: ADD YOUR FIREBASE CONFIGURATION OBJECT HERE */
  apiKey: "AIzaSyBe3uWg1O1fgDITKYus01xn_mgP-L-u8LU",
  authDomain: "friendlychat-ba6ca.firebaseapp.com",
  projectId: "friendlychat-ba6ca",
  storageBucket: "friendlychat-ba6ca.appspot.com",
  messagingSenderId: "572317760238",
  appId: "1:572317760238:web:54b6bac5c0d3cb94e011ff"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}