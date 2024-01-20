const firebaseConfig = {
    apiKey: "AIzaSyDmiFBPEC3ALqmNMIvJe87SvRGuXcOxQhY",
    authDomain: "plan-it-contact.firebaseapp.com",
    projectId: "plan-it-contact",
    storageBucket: "plan-it-contact.appspot.com",
    messagingSenderId: "111214089914",
    appId: "1:111214089914:web:e7695f9d0bc604bb37d483",
    databaseURL:"https://plan-it-hotel-default-rtdb.firebaseio.com/"};

    firebase.initializeApp(firebaseConfig);


var messagesRef = firebase.database().ref('messages');

document.getElementById("hotel").addEventListener('submit',submitForm);


async function submitForm(e){
    e.preventDefault();
    var name = getInputVal('name');
    var email = getInputVal('email');
    var date3 = getInputVal('date3');
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
