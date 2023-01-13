document.getElementById("login-submit").addEventListener("click", function(){
    const user_email = document.getElementById("user-email").value;
    const user_password = document.getElementById("user-password").value;
    if (user_email == "sabbir@gmail.com" && user_password == "1234"){
        console.log("valid user");
        location.href="home.html"
    }
})
