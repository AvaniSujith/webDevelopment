var n = 1;
for(i=1;i<=4;i++){
    var num = n + i - 1;
    for(j=0;j<i;j++){
       document.write(num - j+ " ");
      }
      n +=i;
      document.write("<br>");
}

document.write("<br>Using While loop<br>");
// while loops
var n= 1;
var i =1;
while(i<=4){
    let j =0;
    var num = n + i - 1;
    while(j<i){
        document.write(num - j+ ' ');
        
        j++;
    }
    n +=i;
    document.write("<br>")
    i++;
}

document.write("<hr>");

for(i=1;i<=5;i++){
    for(j=5;j>=i;j--){
        document.write(i+" ");
    }
    document.write("<br>");
}
document.write("<br>Using While loop<br>");
// while loops
var i = 1;
while (i <= 5) {
    var j = 1;
    while (j <= 6 - i) {
        document.write(i + ' ');
        j++;
    }
    document.write('<br>');
    i++;
}

document.write("<hr>");

for(i=5;i>=1;i--){
    for(j=1;j<=i;j++){
        document.write(i+" ");
    }
    document.write("<br>");
}
document.write("<br>Using While loop<br>");
// while loops
var i = 5;
while (i >= 1) {
    var j = 1;
    while (j <= i) {
        document.write(i + ' ');
        j++;
    }
    document.write('<br>');
    i--;
}

document.write("<hr>");
for(i=1;i<=10;i++){
    for(j=1;j<=i;j++){
        document.write((i*j)+" ")
    }
    document.write("<br>")
}
document.write("<br>Using While loop<br>")
// while loops
var i = 1;
while (i <= 10) {
    var j = 1;
    while (j <= i) {
        document.write(i * j + ' ');
        j++;
    }
    document.write('<br>');
    i++;
}


document.write("<hr>");
 
// for(i=1;i<=6;i++){
//     var space = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
//     document.write(space);
//     for(j=1;j<=i;j++){
//         document.write(j+ ' ');
//     }
//    document.write("<br>");
// }

for(i=1;i<=6;i++){
    for(j=1;j<=(6-i);j++){
        document.write('&nbsp;&nbsp;&nbsp;');

    }
    for(k=1;k<=i;k++){
        document.write(k+' ');
    }
    document.write("<br>")
}
document.write("<br>Using While loop<br>")
// while loops
var i = 1;
while (i <= 6) {
    var spaces = 6 - i;
    var j = 1;
    while (spaces > 0) {
        document.write('&nbsp;&nbsp;&nbsp;'); 
        spaces--;
    }
    while (j <= i) {
        document.write(j + ' ');
        j++;
    }
    document.write('<br>');
    i++;
}

document.write("<hr>");

var size = 5; 

for (i = 1; i <= size; i++) {
    for (j = 1; j <= size; j++) {
        if (i === 1 || i === size || j === 1 || j === size) {
            document.write('* ');
        } else {
            document.write('&nbsp;&nbsp;&nbsp;');
        }
    }
    document.write('<br>');
}
document.write("<br>Using While loop<br>")
// while loops
var size = 5; 
var i = 1;

while (i <= size) {
    var j = 1;
    while (j <= size) {
        if (i === 1 || i === size || j === 1 || j === size) {
            document.write('* ');
        } else {
            document.write('&nbsp;&nbsp;&nbsp;');
        }
        j++;
    }
    document.write('<br>');
    i++;
}
document.write("<hr>");
for(i=1;i<=5;i++){
   for(k=1;k<=5-i;k++){
    document.write('&nbsp;&nbsp;');
   }
    for(j=1;j<i;j++){
        document.write("* ");
    }
    document.write("<br>")
}

