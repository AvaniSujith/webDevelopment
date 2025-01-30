// for(i=1;i<=1;i++){
//     for(j=10;j>=1;j--){
//         var n = 0;
//         n = 5 * j;
//         document.write(n)
//     }
//     document.write("<br>")
// }

for(i=10;i>=1;i--){
    var n = 0;
    n = 5 * i;
    document.write("5 * "+ i+"  = " +n+"<br>")
}


document.write("<hr>")

for(i=20;i>=0;i--){
    if(i%2==0){
        document.write(i+"<br>")
    }else{
       continue; 
    }
}

document.write("<hr>")

var n = 0;
var m = 1;
for(i=1;i<=10;i++){
    document.write(n + " ")
    temp = n + m;
    n = m;
    m = temp;
}

document.write("<hr>")
var n =1 ;
for(i=1;i<=4;i++){
    for(j=1;j<=i;j++){
       
       document.write(n+" ");
       n++;
    }
    document.write("<br>")
}

document.write("<hr>")
var n = 2 ;
for(i=1;i<=4;i++){
    for(j=1;j<=i;j++){
       
       document.write(n+" ");
       n += 2;
    }
    document.write("<br>")
}
document.write("<hr>")

for(i=1;i<=5;i++){
    var n = i;
    for(j=1;j<=i;j++){
       
       document.write(n+" ");
       n = n+ 5 - j;
    }
    document.write("<br>")
}


