const emailInput = document.getElementById("email-input")
const emailWarn = document.getElementById("email-warn")
const messageInput = document.getElementById("message-input")
const messageWarn = document.getElementById("message-warn")
const messageWindow = document.getElementById("contact-straight")
//sendMail("email", "message");

function checkInfo(){
  emailWarn.style.display = "none"
  messageWarn.style.display = "none"
  let devidedEmail = emailInput.value.split("@")
  if(devidedEmail.length !== 2 || devidedEmail[1].split(".").length < 2){
    emailWarn.style.display = "inline";
    emailWarn.innerHTML = "please enter a valid email adress";
    return false;
  }
  if(messageInput.value.replace(/\s/g, "").length < 2){
    messageWarn.style.display = "inline";
    messageWarn.innerHTML = "please enter a message";
    return false;
  }
  sendMail(emailInput.value, messageInput.value)
  messageWindow.innerHTML = "<h3>Thanks for contacting me</h3><span>I'll get back to you as soon as I read my e-mail, if you have any other question feel free to send me a message on any of my social meadia -></span>"
  return true;
}




function sendMail(email, message) {
  //for testing purposses
  console.log("https://en.kagamast.life/mail/?email=" + email + "&msg=" + message)


  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://en.kagamast.life/mail/?email=" + email + "&msg=" + message);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  const body = JSON.stringify({
    email: "My POST request",
    message: "Hello World",
    userId: 900,
  });
  xhr.send();
  xhr.responseType = "json";
  xhr.onload = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
      const data = xhr.response;
      console.log(data);
    } else {
      console.log(`Error: ${xhr.status}`);
    }
  };
}
