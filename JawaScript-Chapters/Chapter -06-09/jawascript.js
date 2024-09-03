// -------------------------------- Question 01 -------------------------------- 

document.write("<h2>Result</h2>");
var a=10;
document.write("<br>The value of a is : ",a);
document.write("<br>-------------------------------");
 
document.write("<br><br>The value of ++a is : ",++a);
document.write("<br>Now the value of a is : ",a);

document.write("<br><br>The value of a++ is : ",a++);
document.write("<br>Now the value of a is : ",a);

document.write("<br><br>The value of --a is : ",--a);
document.write("<br>Now the value of a is : ",a);

document.write("<br><br>The value of a-- is : ",a--);
document.write("<br>Now the value of a is : ",a);


 // -------------------------------- Question 03 -------------------------------- 
 var userName=prompt("Enter your name: ");
 if (userName){
  document.write("<br><br>Hello! "+userName+" Welcome!");
 }
else{
  document.write("<br><br>Hello Welcome!");
}

//  // -------------------------------- Quest/ion 05 --------------------------------
var number=prompt("Enter Number for table: ");

if(number){
document.write("<br><br><h2>Table of ",number,"</h2>");
 for(i=1;i<=10;i++){
  document.write("<br>",number," x ",i," = ",number*i);
 }
}
else{
  number=5;
  document.write("<br><br><h2>Table of ",number,"</h2>");
for(i=1;i<=10;i++){
  document.write("<br>",number," x ",i," = ",number*i);
 }
}


 // -------------------------------- Quest/ion 06 --------------------------------
 
 var sub1Name=prompt("Enter subect one name: ");
 var sub2Name=prompt("Enter subect two name: ");
 var sub3Name=prompt("Enter subect three name: ");
 var total_marks_E=100;
 var sub1_obtainedM=prompt("Enter the obtained marks in ",sub1Name,": ");
 var sub2_obtainedM=prompt("Enter the obtained marks in ",sub2Name,": ");
 var sub3_obtainedM=prompt("Enter the obtained marks in ",sub3Name,": ");

 var sub1_per=(total_marks_E/sub1_obtainedM)*100;
 var sub2_per=(total_marks_E/sub2_obtainedM)*100;
 var sub3_per=(total_marks_E/sub3_obtainedM)*100;

 var final_of_each_T=total_marks_E*3;
 var final_of_each_obtaied=(+sub1_obtainedM)+(+sub2_obtainedM)+(+sub3_obtainedM);
 var final_percentage= (final_of_each_T/final_of_each_obtaied)*100;

document.write("<br><br><h4>Subject   Total Marks   Obtained Marks    Percentage </h4>");
            document.write("<br>",sub1Name,"    ",total_marks_E,"  ",sub1_obtainedM,"  ",sub1_per.toFixed(0),"%");
            document.write("<br>",sub2Name,"     ",total_marks_E,"  ",sub2_obtainedM,"  ",sub2_per.toFixed(0),"%");
            document.write("<br>",sub3Name,"      ",total_marks_E,"  ",sub3_obtainedM,"  ",sub3_per.toFixed(0),"%");
            document.write("<br>           <h4>",final_of_each_T,"  ",final_of_each_obtaied,"  ",final_percentage.toFixed(0),"%","</h4>");
