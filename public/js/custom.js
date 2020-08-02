// Defining a function to display error message
function showError(elemId, message) {
    document.getElementById(elemId).innerHTML = message;
}

// // Client error
// function clientError(elemId, message) {
//     document.getElementById(elemId).innerHTML = message;
// }

// Defining a function to validate form
function productForm(){
    // Retrieving the values of product form elements
    const pdtName = document.newProduct.pdt_name.value;
    const pdtMake = document.newProduct.make.value;
    const pdtColor = document.newProduct.pdt_color.value;
    const pdtCategory = document.newProduct.pdt_category.value;
    const pdtSerial = document.newProduct.serial_no.value;
    const pdtPrice = document.newProduct.pdt_price.value;
    const pdtInterval = document.newProduct.pay_interval.value;
    const pdtScheme = document.newProduct.pdt_scheme.value;
    const pdtStock = document.newProduct.pdt_stock.value;
    const pdtImage = document.newProduct.pdt_image.value;

    // Defining error variables with a default value
    let nameErr = makeErr = colorErr = categoryErr = serialErr = priceErr = intervalErr = schemeErr = stockErr = imageErr = true;

    // Validate product name
    if(pdtName == "") {
        showError("nameErr", "Please enter product name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(pdtName) === false) {
            showError("nameErr", "Please enter a valid name");
        } else {
            showError("nameErr", "");
            nameErr = false;
        }
    }
    
    // Validate make address
    if(pdtMake == "") {
        showError("makeErr", "Please enter product make");
    } else {
        // check for uppercase
        var regex = /^[A-Z]+$/;
        if(regex.test(pdtMake) === false) {
            showError("makeErr", "Please capital letter only");
        } else{
            if(pdtMake.length < 2 || pdtMake.length > 2){
                showError('makeErr', "Two letters expected")
            }else{
                showError("makeErr", "");
                makeErr = false;
            }
        }
    }
    
    // Validate color
    if(pdtColor == "") {
        showError("colorErr", "Please type a color");
    } else {
        showError("colorErr", "");
        colorErr = false;
    }
    
    // Validate category
    if(pdtCategory == "") {
        showError("categoryErr", "Please select a category");
    } else {
        showError("categoryErr", "");
        categoryErr = false;
    }
    
    // Validate serial Number
    if(pdtSerial == "") {
        showError("serialErr", "Please enter product serial no");
    } else {
        //Checkfor alphanumeric
        var regex = /^[a-zA-Z0-9]*$/;
        if(regex.test(pdtSerial) === false){
            showError("serialErr", "Serial no should be alphanumeric");
        } else{
            if(pdtSerial.length < 6 || pdtSerial.length > 22){
                showError("serialErr", "Should be between 6 and 22 characters");
            }else{
                showError("serialErr", "");
                serialErr = false;
            }
        } 
    }

     // Validate price
     if(pdtPrice == "") {
        showError("priceErr", "Price should not be empty");
    } else {
        var regex = /^[0-9]*$/;
        if(regex.test(pdtPrice) === false){
            showError("priceErr", "Price should be Numbers");
        } else {
            showError("priceErr", "");
            priceErr = false;
        }
    }

     // Validate pay interval
     if(pdtInterval == "") {
        showError("intervalErr", "Interval should not be empty");
    } else {
        var regex = /^[A-z]*$/;
        if(regex.test(pdtInterval) === false){
            showError("intervalErr", "Interval should be Letters");
        } else {
            showError("intervalErr", "");
            intervalErr = false;
        }
    }

    // Validate scheme
    if(pdtScheme == "") {
        showError("schemeErr", "Please select a scheme");
    } else {
        showError("schemeErr", "");
        schemeErr = false;
    }
    
     // Validate stock
     if(pdtStock == "") {
        showError("stockErr", "Stock should not be empty");
    } else {
        var regex = /^[0-9]*$/;
        if(regex.test(pdtStock) === false){
            showError("stockErr", "Stock should be Numbers");
        } else {
            showError("stockErr", "");
            stockErr = false;
        }
    }

    // Validate scheme
    if(pdtImage == "") {
        showError("imageErr", "Please select an image");
    } else {
        showError("imageErr", "");
        imageErr = false;
    }
    
    // Prevent the form from being submitted if there are any errors
    if((nameErr || makeErr || colorErr || categoryErr || serialErr || priceErr || intervalErr || schemeErr || stockErr || imageErr) == true) {
       return false;
    } else {
        //Allow form to submit
        return true;
    }
};


// //Validating client form
// function clientForm(){
//   // Retrieving the values of client form elements
//     const clientName = document.clientForm.cname.value;
//     const clientLocation = document.clientForm.clocation.value;
//     const clientPhone = document.clientForm.cphone.value;
//     const clientEmail = document.clientForm.cemail.value;
//     const clientInitPay = document.clientForm.cinitialPay.value;
//     const clientNatId = document.clientForm.cnid.value;
//     const clientItemName = document.clientForm.citemName.value;
//     const clientItemSerial = document.clientForm.itemSerial.value;
//     const clientNextPayDate = document.clientForm.nextPayDate.value;
//     const clientNextPayAmt = document.clientForm.nextPayAmt.value;
//     const clientRefereeNo = document.clientForm.refereeNo.value;

//     // Defining error variables with a default value
//     let cnameErr = clocationErr = cphoneErr = cemailErr = cpayErr = cnidErr = citemNameErr = 
//     citemSerialErr = cnextDateErr = cnextPayErr = cRefErr = true;

//     // Validate client Name
//     if(clientName == "") {
//         clientError("cnameErr", "Please provide a name");
//     } else {
//         //Check of letters
//         var regex = /^[A-z]*$/;
//         if(regex.test(clientName) === false){
//             clientError("cnameErr", "Name should be letters");
//         }else {
//             clientError("cnameErr", "");
//             cnameErr = false;
//         }
//     }
    
//     //Validate client location
//     if(clientLocation == "") {
//         clientError("clocationErr", "Please provide a name");
//     } else {
//         //Check of letters
//         var regex = /^[A-z]*$/;
//         if(regex.test(clientLocation) === false){
//             clientError("clocationErr", "Name should be letters");
//         }else {
//             clientError("clocationErr", "");
//             clocationErr = false;
//         }
//     }
    

//     // Validate Phone Number
//     if(clientPhone == "") {
//         clientError("cphoneErr", "Please enter phone number");
//     } else {
//         //Check for numbers
//         var regex = /^[0-9]*$/;
//         if(regex.test(clientPhone) === false){
//             clientError("cphoneErr", "Phone number should be numbers");
//         } else{
//             if(clientPhone.length < 9 || clientPhone.length > 12){
//                 clientError("cphoneErr", "Phone should be 9 to 12 numbers ");
//             }else{
//                 clientError("cphoneErr", "");
//                 cphoneErr = false;
//             }
//         } 
//     }

//     //Validate email address
//     if(clientEmail == "") {
//         clientError("cemailErr", "Please enter email address");
//     } else {
//         //Check for email
//         var regex = /^\S+@\S+\.\S+$/;
//         if(regex.test(clientEmail) === false){
//             clientError("cemailErr", "Valid email required");
//         } else{
//             if(clientEmail.length < 5){
//                 clientError("cemailErr", "Email should atleast be 5 letters");
//             }else{
//                 clientError("cemailErr", "");
//                 cemailErr = false;
//             }
//         } 
//     }

//      //Validate initialpay
//      if(clientInitPay == "") {
//         clientError("cpayErr", "Please fill in initial pay");
//     } else {
//         //Check for number
//         var regex = /^[0-9]*$/;
//         if(regex.test(clientInitPay) === false){
//             clientError("cpayErr", "Pay should be a number required");
//         } else{
//             clientError("cpayErr", "");
//             cpayErr = false;
//         } 
//     }

//     //Validating national ID
//     if(clientNatId == "") {
//         clientError("cnidErr", "Field can't be empty");
//     } else {
//         //Check for alphanumeric
//         var regex = /^[A-Z]{3}[0-9]{1,8}[A-Z]*$/;
//         if(regex.test(clientNatId) === false){
//             clientError("cnidErr", "Alphanum e.g CMD596..495BMD");
//         } else{
//             if(clientNatId.length != 13) {
//                 clientError("cnidErr", "National ID should be 13 characters");
//             } else {
//                 clientError("cnidErr", "");
//                 cpayErr = false;
//             }
//         } 
//     }

//     //Validate item name
//     if(clientItemName == "") {
//         clientError("citemNameErr", "Field can't be empty");
//     } else {
//         //Check for Letters
//         var regex = /^[A-z]*$/;
//         if(regex.test(clientItemName) === false){
//             clientError("citemNameErr", "Name should be characters");
//         } else{
//             clientError("citemNameErr", "");
//             citemNameErr = false;
//         } 
//     }

//     //Validating Serial No
//     if(clientItemSerial == "") {
//         clientError("citemSerialErr", "Field can't be empty");
//     } else {
//         //Check for alphanumeric
//         var regex = /^[A-z0-9]$/;
//         if(regex.test(clientItemSerial) === false){
//             clientError("citemSerialErr", "Serial No should not contain symbols");
//         } else{
//             if(clientItemSerial.length < 2 || clientItemSerial.length > 30) {
//                 clientError("citemSerialErr", "Serial No should be btn 2 and 30 characters");
//             } else {
//                 clientError("citemSerialErr", "");
//                 citemSerialErr = false;
//             }
//         } 
//     }

//     //Validating Next date of Payment
//     if(clientNextPayDate == "") {
//         clientError("cnextDateErr", "Field can't be empty");
//     } else {
//         clientError("cnextDateErr", "");
//         cnextDateErr = false;
//     }

//     //Validate Next Payment
//     if(clientNextPayAmt == "") {
//         clientError("cnextPayErr", "Field can't be empty");
//     } else {
//         var regex = /^[0-9]*$/
//         if(regex.test(clientNextPayAmt) === false){
//             clientError("cnextPayErr", "Only number expected");
//         } else {
//             clientError("cnextPayErr", "");
//             cnextPayErr = false;
//         }
//     }

//     //Validating Serial Number
//     if(clientRefereeNo == "") {
//         clientError("cRefErr", "Field can't be empty");
//     } else {
//         //Check for alphanumeric
//         var regex = /^[A-Z]{2}[-]{1}[A-z0-9]{0,8}$/;
//         if(regex.test(clientRefereeNo) === false){
//             clientError("cRefErr", "Should be in format CM-49dC...");
//         } else{
//             if(clientRefereeNo.length < 7 || clientRefereeNo.length > 11) {
//                 clientError("cRefErr", "Serial No should be btn 7 and 11 characters");
//             } else {
//                 clientError("cRefErr", "");
//                 cRefErr = false;
//             }
//         } 
//     }  

//     // Prevent the form from being submitted if there are any errors
//     if((cnameErr || clocationErr || cphoneErr || ccemailErr || cpayErr || cnidErr || citemNameErr || citemSerialErr || cnextDateErr || cnextPayErr || cRefErr) == true) {
//         return false;
//      } else {
//          //Allow form to submit
//          return true;
//      }
//  }