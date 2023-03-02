function loginForm(){

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    //validate the form
    if(email==""){
        alert("Email is reqruired");
        return false;
    }
    if(password==""){
        alert("Password is required");
        return false;
    }

    if (email && password != ""){
        //Write a Program for Authentication
        //I am Giridhar Just Writing an Alert message just for Functionality
        alert("Login Successfully")
    }



}
// function myfunction(){
//     alert("Login Successfully");
// }