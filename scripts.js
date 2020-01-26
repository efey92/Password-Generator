var lowercase=["a","b","c","d","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var capital=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number= ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var symbol= ["!","@","#","$","%","^","&","*","(",")","-","_","=","+","{","}","[","]",":",";","'","<",">","?","/",",",".","~","`","\""];
function generate() {
  var lowerEl = document.getElementById("lowercase");
  var capitalEl = document.getElementById("capital");
  var numberEl = document.getElementById("number");
  var symbolEl = document.getElementById("symbol");
  var passwordLength = document.getElementById("numberText").value;
  var characters = [];
  var passwords = '';
  if(lowerEl.checked)
  {
    characters = characters.concat(lowercase);
  }
  if(capitalEl.checked)
  {
    characters = characters.concat(capital);
  }
  if (numberEl.checked) {
    characters = characters.concat(number);
  }
  if (symbolEl.checked) {
    characters = characters.concat(symbol);
  }
  for (var i = 0; i < passwordLength; i++) {
      passwords += characters[Math.floor(Math.random() * characters.length)];
  }
  var currentPass = document.getElementById('currentPassword');
  var previousPass = document.getElementById('previousPasswords');
  previousPass.innerHTML = currentPass.innerHTML + '<br>' + previousPass.innerHTML;
  currentPass.innerHTML = passwords;
  document.getElementById('currentPassInput').value = passwords;
}
function copyToClipboard() {
  var currentPass = document.getElementById('currentPassInput');
  currentPass.select();
  document.execCommand('copy');
}