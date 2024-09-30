// -------------------------------- Question 01 -------------------------------- 
var num1=8;
var num2=2;
var answer= num1+num2;
document.write("sum of "+num1+" and "+num2+" is "+answer);
 // -------------------------------- Question 02 -------------------------------- 
 var num1=8;
 var num2=2;
 var answer= num1-num2;
 document.write("<br> Differece of "+num1+" and "+num2+" is "+answer);

 var answer= num1*num2;
 document.write("<br> multplication of "+num1+" and "+num2+" is "+answer);

 var answer= num1/num2;
 document.write("<br> division of "+num1+" and "+num2+" is "+answer);

 var answer= num1%num2;
 document.write("<br> reminder of "+num1+" and "+num2+" is "+answer);
 // -------------------------------- Quest/ion 03 --------------------------------
 
 var number;
 document.write("<br><br>Value after variable declaration is: "+number);
 number=6;
 document.write("<br>Initial value: "+number);
 number++;
 document.write("<br>Value after increment is:"+number);
 number=number+7;
 document.write("<br>Value after addition is: "+number);
 number--;
 document.write("<br>Value after decrement is: "+number);
 number=number%3;
 document.write("<br>The remainder is "+number);

 // -------------------------------- Quest/ion 04 --------------------------------
 
 var ticket=600;
 var buying=5;
 var cost_of_buying=buying*ticket;
 document.write("<br><br>Total cost to buy "+buying+" tickets to a movie is "+cost_of_buying+"PKR")

 // -------------------------------- Quest/ion 05 --------------------------------
 table=2;
 document.write("<br><br>Table of 2");
 document.write("<br>2x1="+table*1);
 document.write("<br>2x2="+table*2);
 document.write("<br>2x3="+table*3);
 document.write("<br>2x4="+table*4);
 document.write("<br>2x5="+table*5);
 document.write("<br>2x6="+table*6);
 document.write("<br>2x7="+table*7);
 document.write("<br>2x8="+table*8);
 document.write("<br>2x9="+table*9);
 document.write("<br>2x10="+table*10);


 // -------------------------------- Quest/ion 06 --------------------------------
//tep in ceti
 tempetatre_c=25;
 tempetatre_f=(tempetatre_c*9/5)+32;
 document.write("<br><br>"+tempetatre_c+"oC is "+tempetatre_f+"oF");

 //tep in F
 tempetatre_c=(tempetatre_f-32)*5/9;
 document.write("<br>"+tempetatre_f+"oF is "+tempetatre_c+"oC");


 // -------------------------------- Quest/ion 07 --------------------------------
var item1=50;
var quentity1=100;
var item2=80;
var quentity2=200;
var shopping_charges=100;
total_cost=item1+item2+quentity1+quentity2+shopping_charges;

document.write("<br><br><h2>Shopping Cart</h2>");
document.write("<br>Price of item 1 is "+item1);
document.write("<br>Quentity of item 1 is "+quentity1);
document.write("<br>Price of item 2 is "+item2);
document.write("<br>Quentity of item 2 is "+quentity2);
document.write("<br><br>Total cost of your order is "+total_cost);

 // -------------------------------- Quest/ion 08 --------------------------------
var total_marks=150;
var obtained_marks=80;

var percentage=(obtained_marks/total_marks)*100;

document.write("<br><br><h2>Mark Sheet</h2>");
document.write("<br>Total marks: "+total_marks);
document.write("<br>Obtained marks: "+obtained_marks);
document.write("<br>Percetage: "+percentage+"%");

 // -------------------------------- Quest/ion 09 --------------------------------
var doller=10;
var riyal=25;
var total_pkr=(doller*104.80)+(riyal*28);

document.write("<br><br><h2>Currecy in PKR</h2>");
document.write("<br>Total Currecy in PKR: "+total_pkr);


 // -------------------------------- Quest/ion 10 --------------------------------

var number = 4;
var result = ((number+5)*10)/2;
document.write("<br><br><h2> +,* and / in single expression</h2>")
document.write("<br>The result of +,* and / in single expression is: "+result );


 // -------------------------------- Quest/ion 11 --------------------------------

 var current_year = 2024;
 var birth_year = 2004;
 var age=current_year-birth_year;
 document.write("<br><br><h2> Age Calclator</h2>")
document.write("<br>Current year: ",current_year );
document.write("<br>Birth year: ",birth_year );
document.write("<br>Age: ",age );

 // -------------------------------- Quest/ion 12 --------------------------------
var radius=20;
var pi=3.142;
var circumference_of_c = 2*pi*radius;
var area_of_c = pi*radius*radius;

document.write("<br><br><h2> The Geoetrizer</h2>")
document.write("<br>Radius of a circle: ",radius );
document.write("<br>Te circumferece is: ",circumference_of_c );
document.write("<br>The area is: ",area_of_c );


 // -------------------------------- Quest/ion 13 --------------------------------

var snack=" Lays";
var current_age = 15;
var max_age = 65;
var snack_per_day=3;
var remaining_age=max_age-current_age;
var eat_total=remaining_age*snack_per_day;

document.write("<br><br><h2> The Lifetime Supply Calculator</h2>")
document.write("<br>Favourite Snack: ",snack );
document.write("<br>Current age: ",current_age );
document.write("<br>Estimated Maximum Age: ",max_age );
document.write("<br>Amount of snacks per day: ",snack_per_day );
document.write("<br>You will need ",eat_total,snack,"to last you until the ripe old age of ",max_age);