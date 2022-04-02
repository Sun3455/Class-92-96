var firebaseConfig = {
      apiKey: "AIzaSyCdWPs08C-oKhpHtH0z9OaXOst6q-8C2Os",
      authDomain: "kwitter-6bd81.firebaseapp.com",
      databaseURL: "https://kwitter-6bd81-default-rtdb.firebaseio.com",
      projectId: "kwitter-6bd81",
      storageBucket: "kwitter-6bd81.appspot.com",
      messagingSenderId: "90363506789",
      appId: "1:90363506789:web:e9a723757201803c4ad68c"
    };
    

     firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name")
room_name = localStorage.getItem("room_name")

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = "";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
