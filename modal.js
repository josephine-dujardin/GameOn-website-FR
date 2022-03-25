function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalClose = document.querySelectorAll(".close");
const btnClose = document.querySelectorAll('.btn-close');

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
modalClose.forEach((btn) => btn.addEventListener("click", closeModal));
btnClose.forEach((btn) => btn.addEventListener("click", closeModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal
function closeModal() {
  modalbg.style.display = "none";
}

// Display values ​​in console
function checkAll()
{
  var lastName = document.getElementById("last").value;
  var firstName = document.getElementById('first').value;
  var email = document.getElementById('email').value
  var quantity = document.getElementById('quantity').value
  var checkbox1 = displayCheckbox1Value();
  var checkbox2 = displayCheckbox2Value();
  var birthDate = myValidator();
  var city = displayRadioValue();
  myValidator();
  displayRadioValue();
  displayCheckbox1Value();
  displayCheckbox2Value();

  if(birthDate && firstName && lastName && email && quantity && city && checkbox1){
    dataArray = ['Prénom : '+firstName,'Nom : '+lastName,'Email : '+email,'Date de naissance : '+birthDate,'Nombres de tournois : '+quantity,'Ville : '+city,'Coché : '+checkbox1,'Coché : '+checkbox2];
    console.log(dataArray);
  } else 
  {
    console.log('fields to fill');
  }
  
}

// Form validation
var inputs = document.getElementsByTagName('input');

function toggleInvalid(conditions, el) {
	if (conditions) {
		el.parentNode.classList.add('invalid');
    return false
	} else {
		el.parentNode.classList.remove('invalid');
	}
}


for (var i=0; i<inputs.length; i++) {
	inputs[i].addEventListener('focus', function() {
		this.previousSibling.previousSibling.classList.remove('fadeIn');
		this.previousSibling.previousSibling.classList.add('fadeOut');
	});
	
	inputs[i].addEventListener('blur', function() {
		if (!this.value.length) {
			this.previousSibling.previousSibling.classList.remove('fadeOut');
			this.previousSibling.previousSibling.classList.add('fadeIn');
		} else if (this.id !== 'lastname') {
			toggleInvalid(!this.checkValidity(), this);
		}
	});
}

// Form validation empty lastname
function isEmptylast(){
  var str = document.getElementById("last").value;
  if( !str.replace(/\s+/, '').length ) {
    document.getElementById("name-error").innerHTML   
    = "Ce champ ne doit pas être vide";   
  return false 
}   
else {   
document.getElementById("name-error").innerHTML   
  = "";  
}  
}

// Form validation empty firstname
function isEmptyfirst(){
  var str = document.getElementById("first").value;
  if( !str.replace(/\s+/, '').length ) {
    document.getElementById("first-error").innerHTML   
    = "Ce champ ne doit pas être vide";   
  return false 
}   
else {   
document.getElementById("first-error").innerHTML   
  = "";  
}  
}

// Form validation empty email
function isEmptyemail(){
  var str = document.getElementById("email").value;
  if( !str.replace(/\s+/, '').length ) {
    document.getElementById("email-error").innerHTML   
    = "Ce champ ne doit pas être vide";   
  return false 
}   
else {   
document.getElementById("email-error").innerHTML   
  = "";  
}  
}

// Form validation empty birthday
function isEmptybirthday(){
  var str = document.getElementById("birthdate").value;
  if( !str.replace(/\s+/, '').length ) {
    document.getElementById("birthdate-error").innerHTML   
    = "Ce champ ne doit pas être vide";   
  return false 
}   
else {   
document.getElementById("birthdate-error").innerHTML   
  = "";  
}  
}

// Form validation empty tournois
function isEmptytournois(){
  var str = document.getElementById("quantity").value;
  if( !str.replace(/\s+/, '').length ) {
    document.getElementById("quantity-error").innerHTML   
    = "Ce champ ne doit pas être vide";   
  return false 
}   
else {   
document.getElementById("quantity-error").innerHTML   
  = "";  
}  
}

// Form validation birthday
function myValidator() {
  var birthday = document.getElementById("birthdate").value; // Don't get Date yet...
  var regexVar = /^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/; // add anchors; use literal
  var regexVarTest = regexVar.test(birthday); // pass the string, not the Date
  var userBirthDate = new Date(birthday.replace(regexVar, "$3-$2-$1")); // Use YYYY-MM-DD format
  var todayYear = (new Date()).getFullYear(); // Always use FullYear!!
  var cutOff19 = new Date(); // should be a Date
  cutOff19.setFullYear(todayYear - 19); // ...
  var cutOff95 = new Date();
  cutOff95.setFullYear(todayYear - 95);
  if (!regexVarTest) { // Test this before the other tests
    dateErrMsg.innerHTML = "";
  } else if (isNaN(userBirthDate)) {
    dateErrMsg.innerHTML = "date of birth is invalid";
  } else {
    dateErrMsg.innerHTML = "";
  }
  return userBirthDate; // Return the date instead of an undefined variable
}

// Form validation radio
function checkButton() {    
  if(document.getElementById('location1').checked) {   
    document.getElementById("error").innerHTML   
          = "";   
  }   
  else if(document.getElementById('location2').checked) {   
    document.getElementById("error").innerHTML   
          = "";   
  }   
  else if(document.getElementById('location3').checked) {   
    document.getElementById("error").innerHTML   
          = "";     
  }   
  else if(document.getElementById('location4').checked) {   
    document.getElementById("error").innerHTML   
          = "";   
  }  
  else if(document.getElementById('location5').checked) {   
    document.getElementById("error").innerHTML   
          = "";   
  }   
  else if(document.getElementById('location6').checked) {     
    document.getElementById("error").innerHTML   
          = "";   
  }  
  else {   
      document.getElementById("error").innerHTML   
          = "Veuillez sélectionner une ville";  
          return false 
  }
  return true;   
}  

// Display radio value
function displayRadioValue() {
  var ele = document.getElementsByName('location');
    
  for(i = 0; i < ele.length; i++) {
      if(ele[i].checked)
        return ele[i].value;
  }

}

// Display checkbox1 value
function displayCheckbox1Value() {
  var ele = document.getElementsByName('checkbox1');
    
  for(i = 0; i < ele.length; i++) {
      if(ele[i].checked)
      return ele[i].value;
      else {
        return false
      }
  }

}

// Display checkbox2 value
function displayCheckbox2Value() {
  var ele = document.getElementsByName('checkbox2');
    
  for(i = 0; i < ele.length; i++) {
      if(ele[i].checked)
      return ele[i].value;  
      else {
        return false
      }
  }

}

// Form validation checkbox
function checkCheckbox() {  
  if(document.getElementById('checkbox1').checked) {   
    document.getElementById("checkbox-error").innerHTML   
          = "";   
  }   
  else {   
    document.getElementById("checkbox-error").innerHTML   
        = "Cette case est nécessaire";  
        return false 
}  
}

// Display validation message
document.querySelector(".bground").addEventListener('submit', function(evt){
  evt.preventDefault();
  document.getElementById('modal-body').style.display = 'none';
  document.getElementById('validation-text').style.display = 'block';
  document.getElementById('btn-close').style.display = 'block';
})