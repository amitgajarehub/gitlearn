
// Defining a function to display error message
function printError(elemId, hintMsg) {
  document.getElementById(elemId).innerHTML = hintMsg;
}

// Defining a function to validate form 
function validateForm() {
    
    // Retrieving the values of form elements 
    var firstname = document.profile.firstname.value;  
    var lastname = document.profile.lastname.value;  
    
    var phone = document.profile.phone.value;  
    var office = document.profile.office.value;  
    var email = document.profile.email.value;  
    
    var password = document.profile.password.value;  
    var confirm_password = document.profile.confirm_password.value;     
    
    var age = document.profile.age.value;  
    var gender = document.profile.gender.value;   
    
    var interest = document.profile.interest.value;   
    var aboutyou = document.profile.aboutyou.value;   
    
    // Defining error variables with a default value
    var firstnameErr = lastnameErr = phoneErr = officeErr = emailErr = passwordErr = confirm_passwordErr = genderErr = interestErr = aboutyouErr = dobErr = true;
    

    // Validate firstname
    if(firstname == "") {
		//alert("please enter your firstname");
        printError("firstnameErr", "Compulsory");
        document.getElementById("firstnameErr").classList.add("mystyle");
        //return false;
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(firstname) === false) {
            printError("firstnameErr", "Please enter a valid firstname");
            document.getElementById("firstnameErr").classList.add("mystyle");
            //return false;
        } else {
            printError("firstnameErr", "");
            document.getElementById("firstnameErr").classList.remove("mystyle");
            firstnameErr = false;
        }
    }

    //validate lastname
    if(lastname == "") {
		//alert("please enter your lastname");
        printError("lastnameErr", "Compulsory");
        document.getElementById("lastnameErr").classList.add("mystyle");
        //return false;
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(lastname) === false) {
            printError("lastnameErr", "Please enter a valid lastname");
            document.getElementById("lastnameErr").classList.add("mystyle");
            //return false;
        } else {
            printError("lastnameErr", "");
            document.getElementById("lastnameErr").classList.remove("mystyle");
            lastnameErr = false;
        }
    }

    // Validate phone number
    if(phone == "") {
        printError("phoneErr", "Compulsory, Only Nos, exact 10 digit");
        document.getElementById("phoneErr").classList.add("mystyle");
        //return false;
    } else {
        var regex = /^[1-9]\d{9}$/;
        if(regex.test(phone) === false) {
            printError("phoneErr", "Please enter a valid 10 digit");
            document.getElementById("phoneErr").classList.add("mystyle");
            //return false;
        } else{
            printError("phoneErr", "");
            document.getElementById("phoneErr").classList.remove("mystyle");
            phoneErr = false;
        }
    }

    // Validate office number
    if(office == "") {
        printError("officeErr", "Only Nos");
        document.getElementById("officeErr").classList.add("mystyle");
        //return false;
    } else {
        var regex = /^[1-9]\d{9}$/;
        if(regex.test(office) === false) {
            printError("officeErr", "Please enter a valid number");
            document.getElementById("officeErr").classList.add("mystyle");
            //return false;
        } else{
            printError("officeErr", "");
            document.getElementById("officeErr").classList.remove("mystyle");
            officeErr = false;
        }
    }

    // Validate email address
    if(email == "") {
        printError("emailErr", "Compulsory, Email validation");
        document.getElementById("emailErr").classList.add("mystyle");
        //return false;
    } else {
        // Regular expression for basic email validation
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
            document.getElementById("emailErr").classList.add("mystyle");
            //return false;
        } else{
            printError("emailErr", "");
            document.getElementById("emailErr").classList.remove("mystyle");
            emailErr = false;
        }
    }

    // Validate Password
    if(password == "") {
        printError("passwordErr", "8 to 12 chars, Alphanumeric char, No Special char");
        document.getElementById("passwordErr").classList.add("mystyle");
        //return false;
    } else {
        // Regular expression for basic password validation
        var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?!.*[!@#\$%\^&\*]).{8,12}$/;
      //var regex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

        if(regex.test(password) === false) {
            printError("passwordErr", "Please enter a valid password");
            document.getElementById("passwordErr").classList.add("mystyle");
            //return false;
        } else{
            printError("passwordErr", "");
            document.getElementById("passwordErr").classList.remove("mystyle");
            passwordErr = false;
        }
    }

    //Validate confirm confirm_password
    if(confirm_password == "") {
        printError("confirm_passwordErr", "Compulsory, Exactly same as Password");
        document.getElementById("confirm_passwordErr").classList.add("mystyle");
        //return false;
    } else {
        // Regular expression for basic confirm_password validation
        //var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,12}$/;
      //var regex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

        /*if(regex.test(confirm_password) === false) {
            printError("confirm_passwordErr", "Please enter a valid confirm password");
            document.getElementById("officeErr").classList.add("mystyle");
            return false;
        } else{
            printError("confirm_passwordErr", "");
            confirm_passwordErr = false;
        }*/

        if (password !== confirm_password) {
      			printError("confirm_passwordErr", "Compulsory, Exactly same as Password");
      			document.getElementById("confirm_passwordErr").classList.add("mystyle");
        		//return false;
        } else {
            printError("confirm_passwordErr", "");
            document.getElementById("confirm_passwordErr").classList.remove("mystyle");
            confirm_passwordErr = false;
        }
    }

    // Date of birth
    var mm = document.getElementById("id_month").value;
    var dd = document.getElementById("id_day").value;
    var yy = document.getElementById("id_year").value;

    var valid_mm = "month" !== mm;
    var valid_dd = "day" !== dd;
    var valid_yy = "year" !== yy;

    if (valid_mm && valid_dd && valid_yy == true) {
        printError("dobErr", "");
        document.getElementById("dobErr").classList.remove("mystyle");
        dobErr = false;
    } else {
        printError("dobErr", "DOB Compulsary");
        document.getElementById("dobErr").classList.add("mystyle");
        //return false;
    }

    //validate Age
    if (valid_mm && valid_dd && valid_yy == true) {
        
        var valid_Dob = mm + "/" + dd + "/" + yy;
        
        var today = new Date();                 // Current Date
        var birthDate = new Date(valid_Dob);    // Date of Birth 

        var today_Y = today.getFullYear();      // current year
        var today_M = today.getMonth();         // DOB year
        
        var birthDate_Y = birthDate.getFullYear();  // current month
        var birthDate_M = birthDate.getMonth();     // DOB month
        
        var age_Y =  today_Y - birthDate_Y;
        //alert(age_Y);
        
        //var m = today.getMonth() - birthDate.getMonth();
        if (today_M >= birthDate_M) {
            var monthAge = today_M - birthDate_M;
            //alert(monthAge);
        } else {  
            age_Y--;  
            var monthAge = 12 + today_M - birthDate_M;  
            //alert(monthAge);
        } 
        document.getElementById("age").value = age_Y + "." + monthAge + " years";
        document.getElementById("age").disabled = true;
    }

    // Validate gender
    if(gender == "") {
        printError("genderErr", "Compulsory");
        document.getElementById("genderErr").classList.add("mystyle");
        //return false;
    } else {
        printError("genderErr", "");
        document.getElementById("genderErr").classList.remove("mystyle");
        genderErr = false;
    }

    // Validate interest
    var check18 = document.getElementById("checkbox_sample18").checked;
    var check19 = document.getElementById("checkbox_sample19").checked;
    var check20 = document.getElementById("checkbox_sample20").checked;
    
    if(check18 || check19 || check20 == true) {
        printError("interestErr", "");
        document.getElementById("interestErr").classList.remove("mystyle");
        interestErr = false;
    } else {
        printError("interestErr", "It should have min 1 value selected");
        document.getElementById("interestErr").classList.add("mystyle");
        //return false;
    }

    // Validate aboutyou
    if(aboutyou == "") {
        printError("aboutyouErr", "Compulsory");
        document.getElementById("aboutyouErr").classList.add("mystyle");
        //return false;
    } else {
        printError("aboutyouErr", "");
        document.getElementById("aboutyouErr").classList.remove("mystyle");
        aboutyouErr = false;
    }

    if ((firstnameErr || lastnameErr || phoneErr || officeErr || emailErr || passwordErr || confirm_passwordErr || genderErr || interestErr || aboutyouErr || dobErr) == true) {
        return false;
    }else {
        alert('Your details saved. Go through next step');
    }

}

