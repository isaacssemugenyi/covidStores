// Defining a function to display error message
function showError(elemId, message) {
    document.getElementById(elemId).innerHTML = message;
}

// Defining a function to validate form
function validateForm(){
    // Retrieving the values of form elements
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
        user.role = "Admin";
        return true;
    }
};

