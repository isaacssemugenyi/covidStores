    // Client error
    function agentError(elemId, message) {
        document.getElementById(elemId).innerHTML = message;
    }

    //Validating client form
   const agentForm = document.getElementById('agentForm');

   agentForm.addEventListener('submit', (e)=>{
        // Retrieving the values of client form elements
      const firstname = document.agentForm.fname.value;
      const lastname = document.agentForm.lname.value;
      const username = document.agentForm.username.value;
      const email = document.agentForm.email.value;
      const phone = document.agentForm.phone.value;
      const employeeId = document.agentForm.eid.value;
      const nationalId = document.agentForm.nid.value;
      const role = document.agentForm.role.value;
      const password = document.agentForm.password.value;
      const password_2 = document.agentForm.c_password.value;
  
      // Defining error variables with a default value
     let firstErr = lastErr = userErr = emailErr = phoneErr = eidErr = nidErr = roleErr = passErr = c_passErr = true;
  
      // Validate firstname
      if(firstname == "") {
          agentError("firstErr", "Field can't be empty");
      } else {
          //Check of letters
          var regex = /^[A-z]*$/;
          if(regex.test(firstame) === false){
              agentError("firstErr", "Name should be letters");
          }else {
              agentError("firstErr", "");
              firstErr = false;
          }
      }

       // Validate lastname
       if(lastname == "") {
        agentError("lastErr", "Field can't be empty");
    } else {
        //Check of letters
        var regex = /^[A-z]*$/;
        if(regex.test(lastame) === false){
            agentError("lastErr", "Name should be letters");
        }else {
            agentError("lastErr", "");
            lastErr = false;
        }
    }
      
     // Validate username
     if(username == "") {
        agentError("userErr", "Field can't be empty");
    } else {
        //Check of Alphanumeric
        var regex = /^[A-z0-9]*$/;
        if(regex.test(username) === false){
            agentError("userErr", "Name should letters or alphanum");
        }else {
            agentError("userErr", "");
            userErr = false;
        }
    }  
  
      //Validate staff email address
      if(email == "") {
        agentError("emailErr", "Field can't be empty");
    } else {
        //Check for email
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false){
            agentError("emailErr", "Valid email required");
        } else{
            if(email.length < 5){
                agentError("emailErr", "Email should atleast be 5 letters");
            }else{
                agentError("emailErr", "");
                emailErr = false;
            }
        } 
    }
      // Validate staff Phone Number
      if(phone == "") {
          agentError("phoneErr", "Field can't be empty");
      } else {
          //Check for numbers
          var regex = /^[0-9]*$/;
          if(regex.test(phone) === false){
              agentError("phoneErr", "Phone should be numbers");
          } else{
              if(clientPhone.length < 9 || clientPhone.length > 12){
                  agentError("phoneErr", "Phone should be 9 to 12 numbers ");
              }else{
                  agentError("phoneErr", "");
                  phoneErr = false;
              }
          } 
      }
      // Employee ID
      if(employeeId == "") {
        agentError("eidErr", "Field can't be empty");
        } else {
        //Check for alphanumeric
        var regex = /^[A-z0-9]+$/;
        if(regex.test(employeeId) === false){
            agentError("eidErr", "Should be Alphanumeric");
        } else{
            if(employeeId.length < 5) {
                agentError("eidErr", "Employee ID should be high 5 letters");
            } else {
                agentError("eidErr", "");
                eidErr = false;
            }
        } 
    }

      //Validating national ID
      if(nationalId == "") {
          agentError("nidErr", "Field can't be empty");
      } else {
          //Check for alphanumeric
          var regex = /^[A-Z]{3}[0-9]{1,8}[A-Z]*$/;
          if(regex.test(nationalId) === false){
              agentError("nidErr", "Alphanum e.g CMD596..495BMD");
          } else{
              if(nationalId.length != 13) {
                  agentError("nidErr", "National ID should be 13 characters");
              } else {
                  agentError("nidErr", "");
                  nidErr = false;
              }
          } 
      }
  
     // Validating a User role
        if(role == "") {
            agentError("roleErr", "Field can't be empty");
        } else {
            agentError("roleErr", "");
            roleErr = false;
        }
   
        //Validating Password
        if(password == "") {
            agentError("passErr", "Field can't be empty");
        } else {
            if(password.length < 8 || password.length > 25){
                agentError("passErr", "Password should be btn 8 to 25 characters")
            } else {
                var regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,25}$/;
                if(regex.test(password) === false){
                    agentError("passErr", "symbols, numbers, capital & small letters required")
                } else {
                    if(password_2 !== password){
                        agentError('passErr', 'Passwords do not match')
                    } else {
                        agentError("passErr", "");
                        passErr = false;
                    }
                }
            }
        }
        
        //Checking password match
        if(password_2 == "") {
            agentError('c_passErr', 'Field can-t be empty')
        } else {
            if(password_2 !== password){
                agentError('c_passErr', 'Passwords do not match')
            } else {
                agentError('c_passErr', '')
                c_passErr = false;
            }
        }

      // Prevent the form from being submitted if there are any errors
      if((firstErr || lastErr || userErr || emailErr || phoneErr || eidErr || nidErr || roleErr || passErr || c_passErr) == true) {
          e.preventDefault()
       } else {
           //Allow form to submit
        e.currentTarget.submit();
       }
   }
)


 