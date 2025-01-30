// sum
let i = 1;
let sum = 0;

while (i <= 100) {
    sum += i;
    i++;
}

document.write("1. The sum is " + sum);


//even numnber
document.write("<br>2. The even numbers between 1 and 20 are: ")
for(i=1;i<=20;i++){
    if(i%2==0){
        document.write(i+",")
    }
}

//factorial
document.write("<br>3. The factorial of 5 = ")
let fact=1;
for(i=1;i<=5;i++){
    fact *= i;
    }
document.write(fact);

//prompt
let num;
do{
     num = prompt("4. Enter a number: ");
}
while(num<10);

//multiples of 3
document.write("<br>5. The multiples of 3 are: ")
for(i=1;i<=10;i++){
    var n=3;
    n=n*i;
    document.write(n+",")
}

//first 10 powers of 2
document.write("<br>6. The first 10 powers of 2 are: ");

for(i=0;i<10;i++){
    let n=2;
    n = n ** i;
    document.write(n+",")
}