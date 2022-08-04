// Assignment Code
var generateBtn = document.querySelector("#generate");

// generates a list of all possible characters based on criteria and randomly selects
// from the list to fill a string of the user-specified length
function generatePassword(checkValues, passLen) {
  var password = '';
  var validValues = '';
  if (checkValues.includes("numbers")) {
    validValues += '0 1 2 3 4 5 6 7 8 9 ';
  }
  if (checkValues.includes("uppercase")) {
    validValues += 'Q W E R T Y U I O P A S D F G H J K L Z X C V B N M ';
  }
  if (checkValues.includes("lowercase")) {
    validValues += 'q w e r t y u i o p a s d f g h j k l z x c v b n m ';
  }
  if (checkValues.includes("special")) {
    validValues += String.raw `! @ # $ % ^ & * ( ) _ + = - { [ } ] : ; " ' | \ < , > . ? / `;
  }
  validValues = validValues.split(' ');

  for (var i = 0; i < passLen; i++) {
    password += validValues[Math.floor(Math.random() * validValues.length)];
  }
  writePassword(password);
}

// create checkboxes and number input
// https://www.techiedelight.com/dynamically-create-checkbox-with-javascript/
function generatePrompts(container) {
  var lowCharCheck = document.createElement('input');
  lowCharCheck.type = 'checkbox';
  lowCharCheck.id = 'lowercase';
  lowCharCheck.name = 'charSelect';
  lowCharCheck.value = 'lowercase';

  var labelLower = document.createElement('label')
  labelLower.htmlFor = 'lowercase';
  labelLower.appendChild(document.createTextNode('Lower Case'));

  var uppCharCheck = document.createElement('input');
  uppCharCheck.type = 'checkbox';
  uppCharCheck.id = 'uppercase';
  uppCharCheck.name = 'charSelect';
  uppCharCheck.value = 'uppercase';

  var labelUpper = document.createElement('label')
  labelUpper.htmlFor = 'uppercase';
  labelUpper.appendChild(document.createTextNode('Upper Case'));

  var numCharCheck = document.createElement('input');
  numCharCheck.type = 'checkbox';
  numCharCheck.id = 'numbers';
  numCharCheck.name = 'charSelect';
  numCharCheck.value = 'numbers';

  var labelNum = document.createElement('label')
  labelNum.htmlFor = 'numbers';
  labelNum.appendChild(document.createTextNode('Numbers'));

  var specCharCheck = document.createElement('input');
  specCharCheck.type = 'checkbox';
  specCharCheck.id = 'special';
  specCharCheck.name = 'charSelect';
  specCharCheck.value = 'special';

  var labelSpec = document.createElement('label')
  labelSpec.htmlFor = 'special';
  labelSpec.appendChild(document.createTextNode('Special Characters'));

  var lengthSelect = document.createElement('input');
  lengthSelect.type = 'number';
  lengthSelect.id = 'passLength';
  lengthSelect.name = 'passLength';
  lengthSelect.value = '8';
  lengthSelect.min = '8';
  lengthSelect.max = '128';

  var labelLength = document.createElement('label');
  labelLength.htmlFor = 'passLength';
  labelLength.appendChild(document.createTextNode('Password Length:'));

  var submitBtn = document.createElement('input');
  submitBtn.type = 'submit';
  submitBtn.value = 'Submit';

  container.appendChild(lowCharCheck);
  container.appendChild(labelLower);
  container.appendChild(document.createElement('br'));
  container.appendChild(uppCharCheck);
  container.appendChild(labelUpper);
  container.appendChild(document.createElement('br'));
  container.appendChild(numCharCheck);
  container.appendChild(labelNum);
  container.appendChild(document.createElement('br'));
  container.appendChild(specCharCheck);
  container.appendChild(labelSpec);
  container.appendChild(document.createElement('br'));
  container.appendChild(labelLength);
  container.appendChild(lengthSelect);

  // set up any click on inputs (assumed to be a change to the criteria) to update the password
  container.onclick = function (event) {
    if (event.target.tagName == 'INPUT') {
      checkInput();
    }
  }
}

// make sure inputs are valid
function checkInput() {
  const passLen = document.querySelector('#passLength').value;

  const checkboxes = document.querySelectorAll('input[name="charSelect"]:checked');
  let checkValues = [];
  checkboxes.forEach((checkbox) => {
    checkValues.push(checkbox.value);
  });



  var passLenBad = passLen < 8 || passLen > 128;
  var charBad = checkValues.length === 0;

  var errorMsgChar = document.getElementById('error-msg-char');
  var errorMsgLen = document.getElementById('error-msg-len');
  if (errorMsgChar !== null) {
    errorMsgChar.remove();
  }
  if (errorMsgLen !== null) {
    errorMsgLen.remove();
  }

  if (passLenBad || charBad) {
    writePassword('');
    if (charBad) {
      errorMsgChar = document.getElementById('error-msg-char');
      if (errorMsgChar === null) {
        var errorMsgChar = document.createElement('p');
        errorMsgChar.role = 'alert';
        errorMsgChar.id = 'error-msg-char';
        errorMsgChar.classList.add('error-msg');
        errorMsgChar.innerHTML = 'You must select at least 1 type of character.';

        var container = document.getElementById('container');

        container.appendChild(errorMsgChar);
      }
    }
    if (passLenBad) {
      errorMsgLen = document.getElementById('error-msg-len');
      if (errorMsgLen === null) {
        var errorMsgLen = document.createElement('p');
        errorMsgLen.role = 'alert';
        errorMsgLen.id = 'error-msg-len';
        errorMsgLen.classList.add('error-msg');
        errorMsgLen.innerHTML = 'Password length must be between 8 and 128.';

        var container = document.getElementById('container');

        container.appendChild(errorMsgLen);
      }
    }
  } else {
    generatePassword(checkValues, passLen);
  }
}

// Write password to the #password input
function writePassword(password) {
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button to generate a new password or, on first click, generate prompts
generateBtn.addEventListener(
  "click",
  () => {
    var container = document.getElementById('container');
    // only generate promts if they haven't been generated yet, otherwise generate a new password
    if (container.innerHTML === "") {
      generatePrompts(container);
    } else {
      checkInput();
    };
  }
);