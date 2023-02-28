
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyCKhUtaD5O7JFTD2zDRJrCqFV_sy85-gSw",
      authDomain: "kwitter-5c060.firebaseapp.com",
      databaseURL: "https://kwitter-5c060-default-rtdb.firebaseio.com",
      projectId: "kwitter-5c060",
      storageBucket: "kwitter-5c060.appspot.com",
      messagingSenderId: "410979515985",
      appId: "1:410979515985:web:a583160bfb20018fad4270"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name;
function addRoom(){
      room_name=document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });

      localStorage.setItem("room_name",room_name);

      window.location="kwitter_page.html";

}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
 function redirectToRoomName(name)
 {
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";
 }