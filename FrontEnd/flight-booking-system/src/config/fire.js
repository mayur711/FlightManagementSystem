import firebase from 'firebase';



  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyANjXf52RuG0BXstZabxusfCveQzEE8r6Q",
    authDomain: "flightbookingsystem-f7e1f.firebaseapp.com",
    databaseURL: "https://flightbookingsystem-f7e1f.firebaseio.com",
    projectId: "flightbookingsystem-f7e1f",
    storageBucket: "flightbookingsystem-f7e1f.appspot.com",
    messagingSenderId: "947320023004",
    // appId: "1:947320023004:web:aa03987acaf5675722d119",
    // measurementId: "G-4FJCD7FR06"
  };
  // Initialize Firebase
 const fire= firebase.initializeApp(firebaseConfig);

export default fire;