//Patricia Orty
//Student ID 0004002218
// 9/23/13

// Conditionals Worksheet - Group 2 : Check the Login

//Expression's goal is to verify if the username and password entered are correct.
//if both are correct then console.log Welcome, username!
//if username is incorrect then console.log User not found. Try Again.
//if password is incorrect then console.log Password does not match our records.

//Declaration of variables necesary for if else statement and console.log printouts.
var username;
var password;
var correctUsername;
var correctPassword;

//Definition of variables as prompts to gain information for if else statement.

username = prompt("Please enter your username : ", "username");
correctUsername = prompt("Please retype your username : ", "username");
password = prompt("Please enter your password :", "password");
correctPassword = prompt("Please retype your password : ", "password");

//Setting up if statement to console.log Welcome, username! if username matches correct username and password matches correct password.
//Test of intial if statement sucessful


if(username === correctUsername && password === correctPassword){
	console.log("Welcome, " + username + "!");
}