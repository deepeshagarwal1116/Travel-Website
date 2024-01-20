const firebaseConfig = {
    apiKey: "AIzaSyAsW6mi9VjBi2FKcaDf8OrS_taKXXjb8TM",
    authDomain: "plan-it-hotel.firebaseapp.com",
    projectId: "plan-it-hotel",
    storageBucket: "plan-it-hotel.appspot.com",
    messagingSenderId: "748756725170",
    appId: "1:748756725170:web:01ef27620f089623e388ab",
    databaseURL:"https://plan-it-hotel-default-rtdb.firebaseio.com/"
};

    firebase.initializeApp(firebaseConfig);


var messagesRef = firebase.database().ref('messages');

document.getElementById("hotel").addEventListener('submit',submitForm);


async function submitForm(e){
    e.preventDefault();
    var name = getInputVal('name');
    var email = getInputVal('email');
    var date3 = getInputVal('datetime');
    var message = getInputVal('message');

    await saveMessage(name, email, date3,message);
    alert("Your Response has been recorded.\nThanks For Your Response 💓🙂");
    // Clear form
    document.getElementById('hotel').reset();
  }
  
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name, email, date3,message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      email:email,
      date3:date3,
      message:message
    });
  }
