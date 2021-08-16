var firebaseConfig = {
      apiKey: "AIzaSyBZt5gaCyhp3SjbKLPa5ITxU2Qudxpzu5Y",
      authDomain: "let-s-chat-project-7c334.firebaseapp.com",
      databaseURL: "https://let-s-chat-project-7c334-default-rtdb.firebaseio.com",
      projectId: "let-s-chat-project-7c334",
      storageBucket: "let-s-chat-project-7c334.appspot.com",
      messagingSenderId: "175334737063",
      appId: "1:175334737063:web:6c8a1b847c96dc7e160782",
      measurementId: "G-MY9BG01VBQ"
    };
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");

    function send()
    {
    message= document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:message,
          like:0
    });
    document.getElementById("msg").value="";

    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
