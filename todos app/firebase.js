import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getFirestore  } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";

  const firebaseConfig = {
    apiKey: "AIzaSyCx-XJnvZdLxYxXf-xBq917FfPDRsXRLNA",
    authDomain: "test-597c8.firebaseapp.com",
    databaseURL: "https://test-597c8-default-rtdb.firebaseio.com",
    projectId: "test-597c8",
    storageBucket: "test-597c8.appspot.com",
    messagingSenderId: "365867476207",
    appId: "1:365867476207:web:e4ed7704b0b4b221f2a71a"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  export{db};
