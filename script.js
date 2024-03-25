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

//calendar ID: calendar



;