<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDZn308lYi7iaQEPpGnZdI8sZb0C-6FjfQ",
    authDomain: "krishnaa-tech.firebaseapp.com",
    projectId: "krishnaa-tech",
    storageBucket: "krishnaa-tech.appspot.com",
    messagingSenderId: "448296690816",
    appId: "1:448296690816:web:263b7949c5ebddf0b43265",
    measurementId: "G-WJN37FR4FR"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>