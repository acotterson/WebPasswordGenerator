// Assignment Code
var generateBtn = document.querySelector("#generate");


// https://www.techiedelight.com/dynamically-create-checkbox-with-javascript/
function generatePassword() {
  var lowCharCheck = document.createElement('input');
  lowCharCheck.type = 'checkbox';
  lowCharCheck.id = 'lowercase';
  lowCharCheck.name = 'lowercase';
  lowCharCheck.value = 'lowercase';

  var labelLower = document.createElement('label')
  labelLower.htmlFor = 'lowercase';
  labelLower.appendChild(document.createTextNode('Lower Case'));

  var uppCharCheck = document.createElement('input');
  uppCharCheck.type = 'checkbox';
  uppCharCheck.id = 'uppercase';
  uppCharCheck.name = 'uppercase';
  uppCharCheck.value = 'uppercase';

  var labelUpper = document.createElement('label')
  labelUpper.htmlFor = 'uppercase';
  labelUpper.appendChild(document.createTextNode('Upper Case'));

  var numCharCheck = document.createElement('input');
  numCharCheck.type = 'checkbox';
  numCharCheck.id = 'numbers';
  numCharCheck.name = 'numbers';
  numCharCheck.value = 'numbers';

  var labelNum = document.createElement('label')
  labelNum.htmlFor = 'numbers';
  labelNum.appendChild(document.createTextNode('Numbers'));

  var specCharCheck = document.createElement('input');
  specCharCheck.type = 'checkbox';
  specCharCheck.id = 'special';
  specCharCheck.name = 'special';
  specCharCheck.value = 'special';

  var labelSpec = document.createElement('label')
  labelSpec.htmlFor = 'special';
  labelSpec.appendChild(document.createTextNode('Special Characters'));

  var lengthSelect = document.createElement('input');
  lengthSelect.type = 'number';
  lengthSelect.id = 'passLength';
  lengthSelect.name = 'passLength';
  lengthSelect.min = '8';
  lengthSelect.max = '128';

  var labelLength = document.createElement('label');
  labelLength.htmlFor = 'passLength';
  labelLength.appendChild(document.createTextNode('Password Length (between 8 and 128 characters):'));

  var submitBtn = document.createElement('input');
  submitBtn.type = 'submit';
  submitBtn.value = 'Submit';




  var container = document.getElementById('container');
  container.appendChild(lowCharCheck);
  container.appendChild(labelLower);
  container.appendChild(uppCharCheck);
  container.appendChild(labelUpper);
  container.appendChild(numCharCheck);
  container.appendChild(labelNum);
  container.appendChild(specCharCheck);
  container.appendChild(labelSpec);  
  container.appendChild(labelLength);
  container.appendChild(lengthSelect);
  container.appendChild(submitBtn);
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
