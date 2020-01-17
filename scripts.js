var char = 'abcdefghijklmnopqrstuvwxyz';
var num = '0123456789';
var sym = '!@#$%^&*=-_';
var cap = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

var charNum = document.getElementById("charNum");
var numBox = document.getElementById("num");
var symBox = document.getElementById("sym");
var capBox = document.getElementById("cap");
var submit = document.getElementById("submit");
var copy = document.getElementById("copy");
var newPass = document.getElementById("newPass");

var charLength = prompt("How many total characters?");

if (charLength < 8 || charLength > 128) {
  alert("Must have between 8 and 128 characters");
}

submit.addEventListener("click",function(e){
    var characters = char;
    (numBox.checked) ? characters += num : '';
    (symBox.checked) ? characters += sym : '';
    (capBox.checked) ? characters += cap : '';
    newPass.value = password(charNum.value, characters);
});

function password(l,characters){
		var pwd = '';
    for(var i = 0; i<l; i++){
    		pwd += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return pwd;

}

copy.onclick = function(){
  newPass.select();
  document.execCommand("Copy");
}