    // Client error
    function agentError(elemId, message) {
        document.getElementById(elemId).innerHTML = message;
    }

    //Validating client form
   const agentEditForm = document.getElementById('agentEdit');

   agentEditForm.addEventListener('submit', (e)=>{
        // Retrieving the values of client form elements
      const fnameEdit = document.agentEdit.fname.value;
      const lnameEdit = document.agentEdit.lname.value;
      const unameEdit = document.agentEdit.username.value;
      const emailEdit = document.agentEdit.email.value;
      const phoneEdit = document.agentEdit.phone.value;
      const eIdEdit = document.agentEdit.eid.value;
      const nIdEdit = document.agentEdit.nid.value;
      const roleEdit = document.agentEdit.role.value;

      // Defining error variables with a default value
     let firstEditErr = lastEditErr = userEditErr = emailEditErr = phoneEditErr = eIdEditErr = nIdEditErr = roleEditErr = true;
  
      // Validate firstname
      if(fnameEdit == "") {
          agentError("firstEditErr", "Field can't be empty");
      } else {
          //Check of letters
          var regex = /^[A-z]*$/;
          if(regex.test(fnameEdit) === false){
              agentError("firstEditErr", "Name should be letters");
          }else {
              agentError("firstEditErr", "");
              firstEditErr = false;
          }
      }

       // Validate lastname
       if(lnameEdit == "") {
        agentError("lastEditErr", "Field can't be empty");
    } else {
        //Check of letters
        var regex = /^[A-z]*$/;
        if(regex.test(lnameEdit) === false){
            agentError("lastEditErr", "Name should be letters");
        }else {
            agentError("lastEditErr", "");
            lastEditErr = false;
        }
    }
      
     // Validate username
     if(unameEdit == "") {
        agentError("userEditErr", "Field can't be empty");
    } else {
        //Check of Alphanumeric
        var regex = /^[A-z0-9]*$/;
        if(regex.test(unameEdit) === false){
            agentError("userEditErr", "Name should letters or alphanum");
        }else {
            agentError("userEditErr", "");
            userEditErr = false;
        }
    }  
  
      //Validate staff email address
      if(emailEdit == "") {
        agentError("emailEditErr", "Field can't be empty");
    } else {
        //Check for email
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(emailEdit) === false){
            agentError("emailEditErr", "Valid email required");
        } else{
            if(emailEdit.length < 5){
                agentError("emailEditErr", "Email should atleast be 5 letters");
            }else{
                agentError("emailEditErr", "");
                emailEditErr = false;
            }
        } 
    }
      // Validate staff Phone Number
      if(phoneEdit == "") {
          agentError("phoneEditErr", "Field can't be empty");
      } else {
          //Check for numbers
          var regex = /^[0-9]*$/;
          if(regex.test(phoneEdit) === false){
              agentError("phoneEditErr", "Phone should be numbers");
          } else{
              if(phoneEdit.length < 9 || phoneEdit.length > 12){
                  agentError("phoneEditErr", "Phone should be 9 to 12 numbers ");
              }else{
                  agentError("phoneEditErr", "");
                  phoneEditErr = false;
              }
          } 
      }
      // Employee ID
      if(eIdEdit == "") {
        agentError("eIdEditErr", "Field can't be empty");
        } else {
        //Check for alphanumeric
        var regex = /^[A-z0-9]+$/;
        if(regex.test(eIdEdit) === false){
            agentError("eIdEditErr", "Should be Alphanumeric");
        } else{
            if(eIdEdit.length < 5) {
                agentError("eIdEditErr", "Employee ID should be high 5 letters");
            } else {
                agentError("eIdEditErr", "");
                eIdEditErr = false;
            }
        } 
    }

      //Validating national ID
      if(nIdEdit == "") {
          agentError("nIdEditErr", "Field can't be empty");
      } else {
          //Check for alphanumeric
          var regex = /^[A-Z]{3}[0-9]{1,8}[A-Z]*$/;
          if(regex.test(nIdEdit) === false){
              agentError("nIdEditErr", "Alphanum e.g CMD596..495BMD");
          } else{
              if(nIdEdit.length != 13) {
                  agentError("nIdEditErr", "National ID should be 13 characters");
              } else {
                  agentError("nIdEditErr", "");
                  nIdEditErr = false;
              }
          } 
      }
  
     // Validating a User role
        if(roleEdit == "") {
            agentError("roleEditErr", "Field can't be empty");
        } else {
            agentError("roleEditErr", "");
            roleEditErr = false;
        }
   

      // Prevent the form from being submitted if there are any errors
      if((firstEditErr || lastEditErr || userEditErr || emailEditErr || phoneEditErr || eIdEditErr || nIdEditErr || roleEditErr) == true) {
          e.preventDefault()
       } else {
           //Allow form to submit
        e.currentTarget.submit();
       }
   }
)


 