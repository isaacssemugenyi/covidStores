// Defining a function to display error message
function showError(elemId, message) {
    document.getElementById(elemId).innerHTML = message;
}

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


//Validating client form
 function clientForm(){
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
        showError("cnameErr", "Please provide a name");
    } else {
        //Check of letters
        var regex = /^[A-z]*$/;
        if(regex.test(clientName) === false){
            showError("cnameErr", "Name should be letters");
        }else {
            showError("cnameErr", "");
            cnameErr = false;
        }
    }
    
    //Validate client location
    if(clientLocation == "") {
        showError("clocationErr", "Please provide a name");
    } else {
        //Check of letters
        var regex = /^[A-z]*$/;
        if(regex.test(clientLocation) === false){
            showError("clocationErr", "Name should be letters");
        }else {
            showError("clocationErr", "");
            clocationErr = false;
        }
    }
    

    // Validate Phone Number
    if(clientPhone == "") {
        showError("cphoneErr", "Please enter phone number");
    } else {
        //Checkfor numbers
        var regex = /^[0-9]*$/;
        if(regex.test(clientPhone) === false){
            showError("cphoneErr", "Phone number should be numbers");
        } else{
            if(clientPhone.length < 9 || clientPhone.length > 12){
                showError("serialErr", "Phone should be 9 to 12 numbers ");
            }else{
                showError("cphoneErr", "");
                cphoneErr = false;
            }
        } 
    }

    //Validate email address
    if(clientEmail == "") {
        showError("cemailErr", "Please enter email address");
    } else {
        //Check for email
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(clientEmail) === false){
            showError("cemailErr", "Valid email required");
        } else{
            if(clientEmail.length < 5){
                showError("cemailErr", "Email should atleast be 5 letters");
            }else{
                showError("cemailErr", "");
                cemailErr = false;
            }
        } 
    }

    //cpayErr

    //cnidErr

    //citemNameErr

    //citemSerialErr

    //cnextDateErr

    //cnextPayErr

    //cRefErr 

    /**
 * Purchase details It is recorded by an agent after logging in with the details 
 * from the manager. He or she, should record, the name of the customer, location, 
 * phone number email, initial pay, national id, item name, item serial number, 
 * date of pay, next date of payment. Amount next payable, referee number, purchase receipt. 
 * Note; ● Item name is mandatory, all characters. ● National id, starts with 3 characters 
 * in capital letters, followed by numbers and ends with characters in capital letters. 
 * Making up 13 all together. ● All payments should be numbers ending with .00 ugx 
 * ● Initial pay should be 50% of the product price ● Referee number is a number for a 
 * customer who has been using this program. ● All fields are mandatory.
 */

    

    // Prevent the form from being submitted if there are any errors
    if((cnameErr || clocationErr || cphoneErr || ccemailErr || cpayErr || cnidErr || citemNameErr || citemSerialErr || cnextDateErr || cnextPayErr || cRefErr) == true) {
        return false;
     } else {
         //Allow form to submit
         return true;
     }
 }