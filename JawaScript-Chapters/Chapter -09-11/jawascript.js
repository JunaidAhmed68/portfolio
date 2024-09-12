// -------------------------------- Question 01 --------------------------------
var city=prompt("Enter your city name: ");
if(city==="karachi"){
  alert("Welcome to the city of lights");
}
else{
  alert("Welcome to "+city);
}

 // -------------------------------- Question 02 --------------------------------
 var gender=prompt("Enter your gender: ");
 if(gender==="male"){
   alert("Good Morning Sir.");
 }
 if(gender==="female") {
  alert("Good Morning Ma'am.");

 }
 else {
  alert("Please enter correct gender.");

 }

 // -------------------------------- Question 03 --------------------------------
 var trafic_color=prompt("Enter the color of trafic light: ");
 if(trafic_color==="red"){
   alert("Must stop.");
 }
 if(trafic_color==="yellow") {
  alert("Ready to move.");

 }
 if(trafic_color==="green") {
  alert("Move now.");
 }

 else{
  alert("Enter correct color please.");
 }
 // -------------------------------- Question 04 --------------------------------
 var feul_level=prompt("Enter the feul level of the car (in liter): ");
 if(+feul_level===0.25){
   alert("“Please refill the fuel in your car”.");
 }

 // -------------------------------- Question 05 --------------------------------
 var obt_marks1=prompt("Enter the obtained marks in subject 1 : ");
 var obt_marks2=prompt("Enter the obtained marks in subject 2 : ");
 var obt_marks3=prompt("Enter the obtained marks in subject 3 : ");

 var total_marks1=prompt("Enter the total marks of subject 1 : ");
 var total_marks2=prompt("Enter the total marks of subject 2 : ");
 var total_marks3=prompt("Enter the total marks of subject 3 : ");
 var total_obt= (+obt_marks1)+(+obt_marks2)+(+obt_marks3);
 var total_marks= (+total_marks1)+(+total_marks2)+(+total_marks3);
 var percentage= ((total_obt/total_marks)*100);

 var grade;
 var remarks;

 if(percentage>=80){
  grade="A-One";
  remarks="Exellent";
}

 var grade;
 if(percentage>=70){
  grade="A";
  remarks="Good";
}

 var grade;
 if(percentage>=60){
  grade="B";
  remarks="You need to improve";
}

 var grade;
 if(percentage<60){
  grade="Fail";
  remarks="Sorry";
}

document.write("<h1>Markseet</h1>");
document.write("<br><br>Total marks: ",total_marks);
document.write("<br>Marks obtaiened: ",total_obt);
document.write("<br>Percentage: ",percentage);
document.write("<br>Grade: ",grade);
document.write("<br>Remarks: ",remarks);

// -------------------------------- Question 06 --------------------------------

var secret_num=5;
var guess_num=prompt("Guess the number (from 1 to 10): ");
if (guess_num>0 && guess_num<=10){
  if (+guess_num===secret_num){
    alert("Bingo! Correct answer");
  }
  else if (+guess_num===secret_num-1){
    alert("Close enough to the correct answer.");
  }
  else{
    alert("Try again!");
  }
}
else{
  alert("You entered out of range number!");
}

// -------------------------------- Question 07 --------------------------------
 var num=prompt("Enter number: ");
 if (+num%3==0){
  alert("Your given number is divisible by 3");
 }
 else{
  alert("Your given number is'nt divisible by 3");
 }

// -------------------------------- Question 08 --------------------------------
 var num=prompt("Enter number: ");
 if (+num==1){
  alert("Your given number is odd.");
 }
 else if(+num%2==0) {
  alert("Your given number is even.");
 }
 else{
  alert("Your given number is odd.");
 }

// -------------------------------- Question 08 --------------------------------
 var temp=prompt("Enter temperature: ");
 if (+temp>40){
  alert("It is too hot outside.");
 }
 else if(+temp>30) {
  alert("The Weather today is Normal.");
 }
 else if(+temp>20) {
  alert("Today’s Weather is cool.");
 }
 else if(+temp>10) {
  alert("OMG! Today’s weather is so Cool.");
 }

// -------------------------------- Question 09 --------------------------------
var num1 = prompt("Enter first number: ");
var num2 = prompt("Enter second number: ");
var operation = prompt("Enter operation sign (+,-,/,* and %) : ");

if (operation === "+") {
  var add = +num1 + +num2;
  alert("Answer: " + add);
}
if (operation === "-") {
  var sub = +num1 - +num2;
  alert("Answer: " + sub);
}
if (operation === "/") {
  if (+num2 === 0) {
    alert("Zero can't be divide");
  } else {
    var div = +num1 / +num2;
    alert("Answer: " + div);
  }
}
if (operation === "*") {
  var mul = +num1 * +num2;
  alert("Answer: " + mul);
}
if (operation === "%") {
  var rem = +num1 % +num2;
  alert("Answer: " + rem);
}
