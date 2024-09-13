// -------------------------------- Question 01 --------------------------------
var char=prompt("Enter character (number or string): ");
char=char.charCodeAt(0);

if(char>=65 && char<=90){
  alert("The given character is uppercase");
}
else if(char>=97 && char<=122){
  alert("The given character is lowercase");
}
else if (char>=48 && char<=57){
  alert("The given character is number");
}
else {
  alert("The given character is neither a letter nor a number");
}


 // -------------------------------- Question 02 --------------------------------
 var num1=prompt("Enter first number : ");
 var num2=prompt("Enter second number: ");
 if(num1===num2){
   alert("Both numbers are equal.");
 }
 else if(num1>num2) {
  alert("First number is greater than second number. ");

 }
 else {
  alert("Second number is greater than first number. ");
 }

 // -------------------------------- Question 03 --------------------------------
var num=prompt("Enter a number : ");
if(num>0){
   alert("The given number is positive.");
 }
else if(num<0){
   alert("The given number is negative.");
 }
else{
  alert("The given number is zero.");
}
 // -------------------------------- Question 04 --------------------------------
 var vowel=prompt("Enter a vowel : ");
 if(vowel=="a" || vowel=="A" || vowel=="e" || vowel=="E" || vowel=="i" || vowel=="I" || vowel=="o" || vowel=="O" || vowel=="u" || vowel=="U" ){
   alert("True");
 }
 else{
  alert("False");
 }

 // -------------------------------- Question 05 --------------------------------
 var org_pass="color";
 var teken_pass=prompt("Enter your password: ");
 if (teken_pass==""){
  alert("Please enter your password");
 }
 else if(teken_pass===org_pass){
  alert("Correct! The password you entered matches the original password.");
 }
 else{
  alert("Incorrect password.");
 }
// -------------------------------- Question 06 --------------------------------

var greeting;
var hour = 19;
if (hour < 18) {
greeting = "Good day";
}
else{
greeting = "Good evening";
}
// -------------------------------- Question 07 --------------------------------
 var time=prompt("Enter time (2400 formet): ");

 if (+time>=0000 && time<1200){
  alert("Good morning!");
 }
 else if (+time>=1200 && time<1700){
  alert("Good afternoon!");
 }
 else if (+time>=1700 && time<2100){
  alert("Good evening!");
 }
 else if (+time>=2100 && time<=2359){
  alert("Good night!");
 }
