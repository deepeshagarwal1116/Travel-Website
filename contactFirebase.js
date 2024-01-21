const firebaseConfig = {
    apiKey: "AIzaSyDmiFBPEC3ALqmNMIvJe87SvRGuXcOxQhY",
    authDomain: "plan-it-contact.firebaseapp.com",
    projectId: "plan-it-contact",
    storageBucket: "plan-it-contact.appspot.com",
    messagingSenderId: "111214089914",
    appId: "1:111214089914:web:e7695f9d0bc604bb37d483",
    databaseURL:"https://plan-it-contact-default-rtdb.firebaseio.com"
  };

  

firebase.initializeApp(firebaseConfig);


var messagesRef = firebase.database().ref('messages');

document.getElementById("contact").addEventListener('submit',submitForm);


async function submitForm(e){
    e.preventDefault();
    var name = getInputVal('name');
    var email = getInputVal('email');
    var subject = getInputVal('subject');
    var message = getInputVal('message');

    await saveMessage(name, email, subject,message);
    alert("Your Response has been recorded.\nThank you for choosing us; Our execution team will contact you soon to discuss the details and ensure a smooth process 💓🙂");
    // Clear form
    document.getElementById('contact').reset();
  }
  
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name, email, subject,message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      email:email,
      subject:subject,
      message:message
    });
  }
