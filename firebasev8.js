var config = {
    apiKey: "AIzaSyC-l9VdSKzYww9hZ7soSUffIJxwT2aLA3I",
    authDomain: "d3-database-21abf.firebaseapp.com",
    projectId: "d3-database-21abf",
    storageBucket: "d3-database-21abf.appspot.com",
    messagingSenderId: "564128085624",
    appId: "1:564128085624:web:0a4ee7701aa64358351f8d"
};

// Initialize Firebase
firebase.initializeApp(config);
const db = firebase.firestore();
const settings = ({  timestampInSnapshots: true, merge: true });
db.settings(settings);

export default db;