// PAGE NAVIGATION

function showPage(pageId){

let pages = document.querySelectorAll(".page");

pages.forEach(function(page){
page.classList.remove("active");
});

document.getElementById(pageId).classList.add("active");

}


// DEFAULT PAGE
showPage("home");


// LOGIN FORM
document.getElementById("login-form").addEventListener("submit",function(e){

e.preventDefault();

alert("Login Successful!");

showPage("dashboard");

});


// BOOK APPOINTMENT

document.getElementById("book-form").addEventListener("submit",function(e){

e.preventDefault();

alert("Appointment Booked Successfully!");

});


// DARK MODE

document.getElementById("theme").addEventListener("change",function(){

if(this.checked){

document.body.style.background="#1e1e1e";
document.body.style.color="white";

}else{

document.body.style.background="#f4f6f9";
document.body.style.color="black";

}

});