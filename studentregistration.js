function validate() {
    var fname = document.getElementById("fname").value
    var lname = document.getElementById("lname").value
    var fathername = document.getElementById("fathername").value
    var dob = document.getElementById("dob").value
    var teli = document.getElementById("teli").value
    var hschool = document.getElementById("hschool").value
    var address = document.getElementById("address").value
    var email = document.getElementById("email").value


    var regexpname = /^[a-zA-Z ]{3,30}$/
    var regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})([a-z]{2,3})?$/
    var phoneNum = /^([0-9]{4})([0-9]{3})([0-9]{3})$/


    if (regexpname.test(fname)) {
        document.getElementById("fname1").innerHTML = "Valid Name";
        fname1.style.color = "Green";
    }
    else {
        document.getElementById("fname1").innerHTML = "Field cannot be null";
    }


    if (regexpname.test(lname)) {
        document.getElementById("lname1").innerHTML = "Valid Name";
        lname1.style.color = "Green";
    }
    else {
        document.getElementById("lname1").innerHTML = "Field cannot be null";
    }

    
    if (regexpname.test(fathername)) {
        document.getElementById("fathername1").innerHTML = "Valid Name";
        fathername1.style.color = "Green";
    }
    else {
        document.getElementById("fathername1").innerHTML = "Field cannot be null";
    }

    if (dob == "") {
        document.getElementById("dob1").innerHTML = " Please enter valid date of birth";

    }
    else {
        document.getElementById("dob1").innerHTML = " valid";
        dob1.style.color = "green";
    }



    if (phoneNum.test(teli)) {
        document.getElementById("teli1").innerHTML = "valid phone number";
        teli1.style.color = "green"
    }
    else {
        document.getElementById("teli1").innerHTML = "Please enter valid phone number";
    }


    if (regexpname.test(hschool)) {
        document.getElementById("hschool1").innerHTML = "valid";
        hschool1.style.color = "green";
    }
    else {
        document.getElementById("hschool1").innerHTML = "not valid";
    }if (regexpname.test(address)) {
        document.getElementById("address1").innerHTML = "valid";
        address1.style.color = "green";
    }else {
        document.getElementById("address1").innerHTML = "not valid";
    }
    



    




    if (email == "") {
        document.getElementById("email1").innerHTML = "Field cannot be null";
    }
    else if (regexp.test(email)) {
        document.getElementById("email1").innerHTML = " valid email";
        email1.style.color = "Green";
        return true;
    }
    else {
        document.getElementById("email1").innerHTML = "not valid";
    }


}
