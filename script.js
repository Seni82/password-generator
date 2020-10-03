// Assignment Code

// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");
  //passwordText.value = password;
}

//open criteria modal.
var openPopUpButton =  document.querySelector("#specifyCriteria");
openPopUpButton.addEventListener("click", function(){
  document.body.classList.add("mainLayout")
});

//dismiss popup with cancel
var cancelPopUpIcon = document.querySelector(".popup-close");
cancelPopUpIcon.addEventListener("click", function(){
  document.body.classList.remove("mainLayout")
});


// validate atleast one character type is selected and submit the criteria for processing.
var generateButton = document.querySelector("#submit");
generateButton.addEventListener("click", function(){
  var userLowerCase; 
  var userUpperCase; 
  var usernumeric; 
  var userSpecChar
var listOfCheckBoxes = document.getElementsByName("charTypeCheckBox");
var dataLengthUserSelects = document.querySelector("#charLength").value
console.log("User selects character lenght of "+dataLengthUserSelects);
listOfCheckBoxes.forEach(function(checkBox, index){
   if(checkBox.checked){
    document.querySelector('#charTypeError').style.display = "none";
    document.body.classList.remove("mainLayout")
    if(checkBox.value == "lower case"){
      userLowerCase = "lower case";
      console.log("User selects data type of "+checkBox.value); 
    }else if(checkBox.value == "upper case")
    {
      userUpperCase = "upper case";
      console.log("User selects data type of "+checkBox.value); 
    }else if(checkBox.value == "numeric")
    {
      usernumeric = "numeric";
      console.log("User selects data type of "+checkBox.value); 
    }else
    {
      userSpecChar = "special character";
      console.log("User selects data type of "+checkBox.value); 
    }
   }else if(index === listOfCheckBoxes.length-1){
    index = index+=1
    document.querySelector('#charTypeError').style.display = "block";
    return;
   }
  });
  //method call for generating password!
  performPasswordGenerationOperation(dataLengthUserSelects,userLowerCase,userUpperCase,userSpecChar,usernumeric);
  document.querySelector('#clipBoard').style.display = "block";
});


//clear validation if it exist when checkbox is clicked.
function hideValidationOnCheckBoxClick(){
  document.querySelector('#charTypeError').style.display = "none";
}


//collect data based on selection
function performPasswordGenerationOperation(userPaswordLenght, lowerCase, upperCase, specialChar, numeric)
{
  var requiredPasswordCharacters = [];
  var charactersToChooseFrom =[];
  if(lowerCase != ""){
     var lower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
     requiredPasswordCharacters.push(lower[Math.floor(Math.random() * lower.length)]);
     charactersToChooseFrom = charactersToChooseFrom.concat(lower);
  }
  if(upperCase != ""){
    var upper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    requiredPasswordCharacters.push(upper[Math.floor(Math.random() * upper.length)]);
    charactersToChooseFrom = charactersToChooseFrom.concat(upper);
  }
  if(specialChar != ""){
    var special = ['@','£','$','%','^','&','*','(','_',')','-','_','+','=','!','#','€','{','}','[',']',':','~','?'];
    requiredPasswordCharacters.push(special[Math.floor(Math.random() * special.length)]);
    charactersToChooseFrom = charactersToChooseFrom.concat(special);
  }
  if(numeric != ""){
    var num = ['0','1','2','3','4','5','6','7','8','9'];
    requiredPasswordCharacters.push(num[Math.floor(Math.random() * num.length)]);
    charactersToChooseFrom = charactersToChooseFrom.concat(num);
  }
  while(requiredPasswordCharacters.length < userPaswordLenght){
    requiredPasswordCharacters.push(charactersToChooseFrom[Math.floor(Math.random() * charactersToChooseFrom.length)]);
  }
  var actualFinalPassword = requiredPasswordCharacters.join('');
  console.log("Actual password is - "+ actualFinalPassword)
  var passwordText = document.querySelector("#password");
  passwordText.value = actualFinalPassword; 
}


//copy password onto clipboard
function copied() {	
  var textArea = document.getElementById("password").select();
  if(textArea === ""){
    console.log("No password to copy yet as area is blank!!!")
  }else{  
    document.execCommand("copy");
    document.querySelector('#passClipoard').style.display = "block"
  }   
}



