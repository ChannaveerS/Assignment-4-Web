function validateTitle() {
    var titleInputs = document.getElementsByName("title");
    var titleChecked = false;

    for (var i = 0; i < titleInputs.length; i++) {
      if (titleInputs[i].checked) {
        titleChecked = true;
        break;
      }
    }

    return titleChecked;
  }

    function toggleNameWarning(show) {
      var nameWarning = document.getElementById("NameWarning");
      nameWarning.style.display = show ? "block" : "none";
    }
    
    function toggleFNameWarning(show) {
      var nameWarning = document.getElementById("FNameWarning");
      nameWarning.style.display = show ? "block" : "none";
    }
    
  // Function to check if first name meet the validation criteria
  function validateFirstName() {
    var firstName = document.getElementById("firstName").value;
    var regex = /^(?=.{1,50}$)[a-z]+(?:['_.\s][a-z]+)*$/i; // Should not contain alphanumeric characters, 1-25 characters long

    var isValid = regex.test(firstName);
    toggleFNameWarning(!isValid && firstName.trim().length > 0)

    return isValid;
  }

  // Function to check if last name meet the validation criteria
  function validateLastName() {
    var lastName = document.getElementById("lastName").value;
    var regex = /^(?=.{1,50}$)[a-z]+(?:['_.\s][a-z]+)*$/i; // Should not contain alphanumeric characters, 1-25 characters long

    var isValid = regex.test(lastName);
    toggleNameWarning(!isValid && lastName.trim().length > 0)

    return isValid;
  }

  
  // Function to check if phone number has 10 digits
   function togglePhoneNumberWarning(show) {
  var phoneNumberWarning = document.getElementById("phoneNumberWarning");
  phoneNumberWarning.style.display = show ? "block" : "none";
}

// Function to validate phone number
function validatePhoneNumber() {
  var phoneNumber = document.getElementById("phoneNumber").value;
  var regex = /^\d{10}$/; // Should have exactly 10 digits
  var isValid = regex.test(phoneNumber);

  togglePhoneNumberWarning(!isValid && phoneNumber.trim().length > 0); // Show warning if phone number is invalid

  return isValid;
}

  // Attach event listener to the phone number input
  var phoneNumberInput = document.getElementById("phoneNumber");
  phoneNumberInput.addEventListener("input", validatePhoneNumber);
  
  function toggleZipCodeNumberWarning(show) {
    var zipNumberWarning = document.getElementById("zipcodeWarning");
    zipNumberWarning.style.display = show ? "block" : "none";
  }
  
  // Function to check if zip code has 5 digits
  function validateZipCode() {
    var zipCode = document.getElementById("zipcode").value;
    var regex = /^\d{6}$/; // Should have exactly 6 digits
    var isValid = regex.test(zipCode);

    toggleZipCodeNumberWarning(!isValid && zipCode.trim().length > 0); // Show warning if phone number is invalid

    return isValid;
  }

  function toggleEmailIdWarning(show) {
  var emailIdWarning = document.getElementById("emailIdWarning");
  emailIdWarning.style.display = show ? "block" : "none";
}

// Function to validate emailId
function validateMail() {
  var emailId = document.getElementById("emailId").value;
  var regex = /^[^@\s]+@northeastern.edu$/i; 
  var isValid = regex.test(emailId);

  toggleEmailIdWarning(!isValid && emailId.trim().length > 0); // Show warning if emailId is invalid and not empty

  return isValid;
}

// Attach event listener to the emailId input
var emailIdInput = document.getElementById("emailId");
emailIdInput.addEventListener("input", validateMail);

  function validateTextfields(data){
    if(document.getElementById(data).value == "")
    {
      return false;
    }
    else
    {
      return true;
    }
  }

  function toggleCityNameWarning(show) {
    var nameWarning = document.getElementById("cityNameWarning");
    nameWarning.style.display = show ? "block" : "none";
  }

  function toggleStateNameWarning(show) {
    var nameWarning = document.getElementById("stateNameWarning");
    nameWarning.style.display = show ? "block" : "none";
  }

  function validateCityState(data) {
    var str = document.getElementById(data).value;
    var regex = /^(?=.{1,50}$)[a-z]+(?:['_.\s][a-z]+)*$/i; // Should not contain alphanumeric characters, 1-25 characters long
    var isValid = regex.test(str);

    if(data === "city")
    {
      toggleCityNameWarning(!isValid && str.trim().length > 0)
    }
    else if (data === "state")
   {
      toggleStateNameWarning(!isValid && str.trim().length > 0)
   }
    return isValid;
  }

  function validateSocialNetworkCheck() {
    var titleInputs = document.getElementsByName("source");
    var titleChecked = false;

    for (var i = 0; i < titleInputs.length; i++) {
      if (titleInputs[i].checked) {
        titleChecked = true;
        break;
      }
    }

    return titleChecked;
  }

  // Function to enable/disable submit button based on all validations
  function enableSubmitButton() {
    var submitButton = document.getElementById("submitButton");
    var titleValid = validateTitle();
    var firstnameValid = validateFirstName();
    var lastnameValid = validateLastName();

    var phoneValid = validatePhoneNumber();
 
    var zipValid = validateZipCode();
    var mailValid = validateMail();

     var address1Valid = validateTextfields("address1");
     var commentValid = validateTextfields("comments");
     var stateValid = validateCityState("state");
     var cityValid = validateCityState("city");
     var socialValid = validateSocialNetworkCheck();

    submitButton.disabled = !(titleValid && firstnameValid && lastnameValid && phoneValid && zipValid && mailValid && address1Valid && commentValid && stateValid && cityValid && socialValid);
  }


  // Attach event listeners to form elements to enable/disable submit button
  var formElements = document.querySelectorAll("input, textarea");
  for (var i = 0; i < formElements.length; i++) {
    formElements[i].addEventListener("input", enableSubmitButton);
  }

  function showTeams() {
          var sportSelect = document.getElementById("clubs");
          var animeTeamsDiv = document.getElementById("animeTeams");
          var recreationTeamsDiv = document.getElementById("recreationTeams");
          var favoritePlayerDiv = document.getElementById("favoritePlayer");

          if (sportSelect.value === "anime") {
              animeTeamsDiv.style.display = "block";
              recreationTeamsDiv.style.display = "none";
              favoritePlayerDiv.style.display = "block";
          } else if (sportSelect.value === "recreation") {
              recreationTeamsDiv.style.display = "block";
              animeTeamsDiv.style.display = "none";
              favoritePlayerDiv.style.display = "block";
          } else {
              animeTeamsDiv.style.display = "none";
              recreationTeamsDiv.style.display = "none";
          }

          
      }

      function limitCheckbox(checkbox) {
          var checkboxes = document.getElementsByName(checkbox.name);
          for (var i = 0; i < checkboxes.length; i++) {
              if (checkboxes[i] !== checkbox) {
                  checkboxes[i].checked = false;
              }
          }
      }
      function getSelectedCheckboxes(checkboxes) {
      var selectedValues = [];
      for (var i = 0; i < checkboxes.length; i++) {
          if (checkboxes[i].checked) {
              selectedValues.push(checkboxes[i].value);
          }
      }
      return selectedValues.join(', ');
  }

  function getSelectedTeams(checkboxes) {
  var selectedValues = [];
  for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
          selectedValues.push(checkboxes[i].value);
      }
  }
  return selectedValues.join(', ');
}


function submitForm() {
  var form = document.getElementById("feedbackForm");
  var tableBody = document.getElementById("tableBody");

  // Create a new row in the table
  var row = tableBody.insertRow();

  // Define headers
  var headers = ["title", "firstName", "lastName", "emailId", "phoneNumber", "clubs", "teams", "favoritePlayer", "city", "zipcode", "source", "comments"];

  // Iterate through headers and add values to the table
  for (var i = 0; i < headers.length; i++) {
    var header = headers[i];
    var fieldValue;

    if (header === "source") {
      fieldValue = getCheckboxValues(form.elements[header]);
    } else if (header === "teams") {
      fieldValue = getSelectedTeams(form.elements["animeTeam"]);
      fieldValue += ", " + getSelectedTeams(form.elements["recreationTeam"]);
    }
    else if (header === "city") {
      fieldValue = form.elements["address1"].value;
      fieldValue += ", " +form.elements["address2"].value;
      fieldValue +=", " +form.elements[header].value;
    }
     else {
      fieldValue = form.elements[header].value;
    }

    // Add data to the row
    var cell = row.insertCell();
    cell.innerHTML = fieldValue;
  }

  // Reset form after submission
  form.reset();
  enableSubmitButton();
  resetStylesAndWarnings(); // Ensure warnings are reset
}

function resetWarnings() {
  var warnings = ["NameWarning", "FNameWarning", "phoneNumberWarning", "zipcodeWarning", "emailIdWarning", "cityNameWarning", "stateNameWarning"];

  for (var i = 0; i < warnings.length; i++) {
    var warningId = warnings[i];
    var warningElement = document.getElementById(warningId);

    if (warningElement) {
      warningElement.style.display = "none";
    }
  }
}

// Function to reset all input fields
function resetFields() {
  var formElements = document.querySelectorAll("input, textarea");
  for (var i = 0; i < formElements.length; i++) {
    formElements[i].value = "";
  }
}

// Function to reset all styles and warnings
function resetStylesAndWarnings() {
  resetWarnings();
  resetHiddenDivs();
}

      // Helper function to get values of checked checkboxes
      function getCheckboxValues(checkboxes) {
          var values = [];
          for (var i = 0; i < checkboxes.length; i++) {
              if (checkboxes[i].checked) {
                  values.push(checkboxes[i].value);
              }
          }
          return values.join(', ');
      }

         // Reset hidden div elements when the form is reset
      function resetHiddenDivs() {
          document.getElementById("animeTeams").style.display = "none";
          document.getElementById("recreationTeams").style.display = "none";
          document.getElementById("favoritePlayer").style.display = "none";
          
      }