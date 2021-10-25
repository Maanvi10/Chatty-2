const firebaseConfig = {
      apiKey: "AIzaSyA0_SNayQ607GBNIlJmoPpRQYbrQl5vB38",
      authDomain: "chatty-e37e7.firebaseapp.com",
      projectId: "chatty-e37e7",
      storageBucket: "chatty-e37e7.appspot.com",
      messagingSenderId: "264037811561",
      appId: "1:264037811561:web:e676b722237dfd23e929f8",
      measurementId: "G-9WJN1GZKYZ"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

function addRoom(){
      user_name= document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
          Barbie: "I am The Most Pinkest Barbie in the world!"
      });
}

