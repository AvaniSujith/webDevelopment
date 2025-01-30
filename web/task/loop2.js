for(i=1;i<=20;i++){
    if(i==13){
        break;
    }else{
        document.write(i +"<br>")
    }
}

document.write("<hr>")

for(i=1;i<=20;i++){
    if(i==13){
        continue;
    }else{
        document.write(i +"<br>")
    }
}

document.write("<hr>")

for(i=1;i<=50;i++){
    if(i%5==0){
        continue;
    }else{
        document.write(i +"<br>")
    }
}



for (i = 10; i >= 1; i--) {
   console.log(i)
}


document.write("<hr>")
for(i=0;i<=5;i++){
    for(j=0;j<=5;j++)
    {
        document.write(i);

    }
    document.write("<br>")
}

document.write("<hr>")
for(i=0;i<=5;i++){
    for(j=0;j<=5;j++)
    {
        document.write(j);

    }
    document.write("<br>")
}

