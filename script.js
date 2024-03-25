//Date ID: currentDate
var currentDate = new Date();
var day = currentDate.getDate();
var month = currentDate.getMonth();
var year = currentDate.getFullYear(); 
var monthName =[
    "January","February","March","April","May","June",
    "July","August","September","October","November","December"];
var formattedDate = "Today's Date: " + monthName[month]+ " " + day + ', ' + year; 
//display date
document.getElementById('currentDate').textContent = formattedDate;

//login/signup form 
function toggleForm() {
    var loginForm = document.getElementById("loginForm");
    var signupForm = document.getElementById("signupForm");
    var message = document.getElementById("message");

    if (loginForm.style.display === "none") {
        loginForm.style.display = "block";
        signupForm.style.display = "none";
        message.innerHTML = "Don't have an account? <a href=\"#\" onclick=\"toggleForm()\">Sign Up</a>";
    } else {
        loginForm.style.display = "none";
        signupForm.style.display = "block";
        message.innerHTML = "Already have an account? <a href=\"#\" onclick=\"toggleForm()\">Login</a>";
    }
}