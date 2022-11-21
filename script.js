function getData() {
  const name = document.forms["contactForm"]["Name"];
  const email = document.forms["contactForm"]["Email"];
  const message = document.forms["contactForm"]["Message"];
  console.log(name.value, email.value, message.value);
  {
    if (name.value == "") {
      window.alert("Please enter your name.");
      name.focus();
      return false;
    }

    if (email.value == "") {
      window.alert("Please enter a valid e-mail address.");
      email.focus();
      return false;
    }

    if (email.value.indexOf("@", 0) < 0) {
      window.alert("Please enter a valid e-mail address.");
      email.focus();
      return false;
    }

    if (email.value.indexOf(".", 0) < 0) {
      window.alert("Please enter a valid e-mail address.");
      email.focus();
      return false;
    }

    if (message.value == "") {
      window.alert("Please enter your message.");
      message.focus();
      return false;
    }
  }
}
