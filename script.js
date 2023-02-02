var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var symbols = "!@#$%^&*()";

var generatedPassword = "";

var generatePassword = function() {
  var options = "";

  if (document.getElementById("lowercase").checked) {
    options += lowercase;
  }
  if (document.getElementById("uppercase").checked) {
    options += uppercase;
  }
  if (document.getElementById("numbers").checked) {
    options += numbers;
  }
  if (document.getElementById("symbols").checked) {
    options += symbols;
  }

  generatedPassword = "";
  for (var i = 0; i < 8; i++) {
    generatedPassword += options.charAt(
      Math.floor(Math.random() * options.length)
    );
  }

  document.getElementById("generated-password").innerHTML = generatedPassword;
};

var copyPassword = function() {
  var passwordText = document.getElementById("generated-password");
  var password = passwordText.innerText;

  var textarea = document.createElement("textarea");
  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();

  alert("Password copied to clipboard!");
};

var savePassword = function() {
  var password = generatedPassword;

  var blob = new Blob([password], { type: "text/plain" });
  var link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "password.txt";
  link.click();
};

document.getElementById("symbols").addEventListener("click", function() {
  var label = document.getElementById("symbols-label");
  if (this.checked) {
    label.classList.add("yellow-background");
  } else {
    label.classList.remove("yellow-background");
  }
});
