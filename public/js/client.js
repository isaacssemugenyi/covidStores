    // Client error
    function clientError(elemId, message) {
        document.getElementById(elemId).innerHTML = message;
    }

    //Validating client form
   const cForm = document.getElementById('clientForm');
   cForm.addEventListener('submit', (e)=>{
    // Retrieving the values of client form elements
      const clientName = document.clientForm.cname.value;
      const clientLocation = document.clientForm.clocation.value;
      const clientPhone = document.clientForm.cphone.value;
      const clientEmail = document.clientForm.cemail.value;
      const clientInitPay = document.clientForm.cinitialPay.value;
      const clientNatId = document.clientForm.cnid.value;
      const clientItemName = document.clientForm.citemName.value;
      const clientItemSerial = document.clientForm.itemSerial.value;
      const clientNextPayDate = document.clientForm.nextPayDate.value;
      const clientNextPayAmt = document.clientForm.nextPayAmt.value;
      const clientRefereeNo = document.clientForm.refereeNo.value;
  
      // Defining error variables with a default value
      let cnameErr = clocationErr = cphoneErr = cemailErr = cpayErr = cnidErr = citemNameErr = 
      citemSerialErr = cnextDateErr = cnextPayErr = cRefErr = true;
  
      // Validate client Name
      if(clientName == "") {
          clientError("cnameErr", "Field can't be empty");
      } else {
          //Check of letters
          var regex = /^[A-z]*$/;
          if(regex.test(clientName) === false){
              clientError("cnameErr", "Name should be letters");
          }else {
              clientError("cnameErr", "");
              cnameErr = false;
          }
      }
      
      //Validate client location
      if(clientLocation == "") {
          clientError("clocationErr", "Field can't be empty");
      } else {
          //Check of letters
          var regex = /^[A-z]*$/;
          if(regex.test(clientLocation) === false){
              clientError("clocationErr", "Name should be letters");
          }else {
              clientError("clocationErr", "");
              clocationErr = false;
          }
      }
      
  
      // Validate Phone Number
      if(clientPhone == "") {
          clientError("cphoneErr", "Field can't be empty");
      } else {
          //Check for numbers
          var regex = /^[0-9]*$/;
          if(regex.test(clientPhone) === false){
              clientError("cphoneErr", "Phone should be numbers");
          } else{
              if(clientPhone.length < 9 || clientPhone.length > 12){
                  clientError("cphoneErr", "Phone should be 9 to 12 numbers ");
              }else{
                  clientError("cphoneErr", "");
                  cphoneErr = false;
              }
          } 
      }
  
      //Validate email address
      if(clientEmail == "") {
          clientError("cemailErr", "Field can't be empty");
      } else {
          //Check for email
          var regex = /^\S+@\S+\.\S+$/;
          if(regex.test(clientEmail) === false){
              clientError("cemailErr", "Valid email required");
          } else{
              if(clientEmail.length < 5){
                  clientError("cemailErr", "Email should atleast be 5 letters");
              }else{
                  clientError("cemailErr", "");
                  cemailErr = false;
              }
          } 
      }
  
       //Validate initialpay
       if(clientInitPay == "") {
          clientError("cpayErr", "Field can't be empty");
      } else {
          //Check for number
          var regex = /^[0-9]*$/;
        //   /^[0-9]+\.?[0-9]*$/
        // /^[0-9]+\.?[0-9]{2}$/
          if(regex.test(clientInitPay) === false){
              clientError("cpayErr", "Pay should be a number");
          } else{
              clientError("cpayErr", "");
              cpayErr = false;
          } 
      }
  
      //Validating national ID
      if(clientNatId == "") {
          clientError("cnidErr", "Field can't be empty");
      } else {
          //Check for alphanumeric
          var regex = /^[A-Z]{3}[0-9]{1,8}[A-Z]*$/;
          if(regex.test(clientNatId) === false){
              clientError("cnidErr", "Alphanum e.g CMD596..495BMD");
          } else{
              if(clientNatId.length != 13) {
                  clientError("cnidErr", "National ID should be 13 characters");
              } else {
                  clientError("cnidErr", "");
                  cpayErr = false;
              }
          } 
      }
  
      //Validate item name
      if(clientItemName == "") {
          clientError("citemNameErr", "Field can't be empty");
      } else {
          //Check for Letters
          var regex = /^[A-z]*$/;
          if(regex.test(clientItemName) === false){
              clientError("citemNameErr", "Name should be characters");
          } else{
              clientError("citemNameErr", "");
              citemNameErr = false;
          } 
      }
  
      //Validating Serial No
      if(clientItemSerial == "") {
          clientError("citemSerialErr", "Field can't be empty");
      } else {
          //Check for alphanumeric
          var regex = /^[A-z0-9]+$/;
          if(regex.test(clientItemSerial) === false){
              clientError("citemSerialErr", "Serial No should not contain symbols");
          } else{
              if(clientItemSerial.length < 2 || clientItemSerial.length > 30) {
                  clientError("citemSerialErr", "Serial No should be btn 2 and 30 characters");
              } else {
                  clientError("citemSerialErr", "");
                  citemSerialErr = false;
              }
          } 
      }
  
      //Validating Next date of Payment
      if(clientNextPayDate == "") {
          clientError("cnextDateErr", "Field can't be empty");
      } else {
          clientError("cnextDateErr", "");
          cnextDateErr = false;
      }
  
      //Validate Next Payment
      if(clientNextPayAmt == "") {
          clientError("cnextPayErr", "Field can't be empty");
      } else {
          var regex = /^[0-9]*$/
          if(regex.test(clientNextPayAmt) === false){
              clientError("cnextPayErr", "Only number expected");
          } else {
              clientError("cnextPayErr", "");
              cnextPayErr = false;
          }
      }
  
      //Validating Serial Number
      if(clientRefereeNo == "") {
          clientError("cRefErr", "Field can't be empty");
      } else {
          //Check for alphanumeric
          var regex = /^[A-Z]{2}[-]{1}[A-z0-9]{0,8}$/;
          if(regex.test(clientRefereeNo) === false){
              clientError("cRefErr", "Should be in format CM-49dC...");
          } else{
              if(clientRefereeNo.length < 7 || clientRefereeNo.length > 11) {
                  clientError("cRefErr", "Ref No should be btn 7 and 11 characters");
              } else {
                  clientError("cRefErr", "");
                  cRefErr = false;
              }
          } 
      }  
  
      // Prevent the form from being submitted if there are any errors
      if((cnameErr || clocationErr || cphoneErr || ccemailErr || cpayErr || cnidErr || citemNameErr || citemSerialErr || cnextDateErr || cnextPayErr || cRefErr) == true) {
          e.preventDefault()
       } else {
           //Allow form to submit
        //    return true;
        e.currentTarget.submit();
       }
   })


 