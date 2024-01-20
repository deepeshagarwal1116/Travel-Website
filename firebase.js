const firebaseConfig = {
    apiKey: "AIzaSyB6w7M-nVzRU-OEDdT1M5OItnWrpIHgvtg",
    authDomain: "plan-it-4029e.firebaseapp.com",
    databaseURL: "https://plan-it-4029e-default-rtdb.firebaseio.com",
    projectId: "plan-it-4029e",
    storageBucket: "plan-it-4029e.appspot.com",
    messagingSenderId: "348366850121",
    appId: "1:348366850121:web:b61f276792f4df0fa69798"
};


firebase.initializeApp(firebaseConfig);


var messagesRef = firebase.database().ref('messages');

document.getElementById("tourBook").addEventListener('submit',submitForm);


async function submitForm(e){
    e.preventDefault();
    var name = getInputVal('name');
    var email = getInputVal('email');
    var datetime = getInputVal('datetime');
    var select1 = getInputVal('select1');
    var message = getInputVal('message');

    await saveMessage(name, email, msg);
    alert("Your Response has been recorded.\nThanks For Your Response 💓🙂");
    // Clear form
    document.getElementById('tourBook').reset();
  }
  
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name, email, datetime,select1,message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      email:email,
      datetime:datetime,
      select1:select1,
      message:message
    });
  }
