// let a ={name:"jashi",age:"22",place:"thalassery"}
// console.log(a)
// console.log(typeof a)
// console.log(Object.keys(a))
// console.log(Object.keys(a)[1])
// console.log(a['place'])
// for(i in a){
//     console.log(i)
// }

//typecast

// function myData(b){
//     var m = JSON.stringify(b)
//     console.log(typeof m)
//     document.write(m)
//     var r = JSON.parse(m)
//     document.write("<br>"+r)
//     console.log(typeof r)
// }
// let a ={name:"jashi",age:"22",place:"thalassery"}
// myData(a)

// adding and deleting elements

// let a ={name:"jashi",age:"22",place:"thalassery"}
// a.phn="7878787878";
// console.log(a);
// delete a.age;
// console.log(a);

// let a ={name:"jashi",age:"22",place:"thalassery",friends:{friends1:"avani",friends2:"peppa",friends3:"fahad"}}
// console.log(a)
// console.log(a["friends"]["friends2"]);

// Questions1
// let person = {name:"Avani",age:"22",email:"avanis10119@gmail.com"}
// function display(person){
//     var dis =JSON.stringify(person)
//     document.write(dis)
// }
// display(person)

// //Question2
// person.phn="8989898999"
// console.log(person)
// delete person.email;
// console.log(person)

// //Question3
// function look(){
//     for(i in person){
//         document.write("<br>"+ i + ": " + person[i]+"<br>")
//     }
// }
//look()

//1.
//  function factorial(){
//     var num =  prompt("Enter the number: ");
//     if (num == 0){
//     document.write("Not applicable");}
//     else{
//         var facto = 1;
//         var i = 1;
        
//         while (i <= num) {
//             facto *= i;
//             i++;
//         }
//     alert("The factorial of " + num +" is " +facto);
//     }
// }
//  factorial()
 
//  2.
//  function addition(a,b){
//     sum = a+b;
//  document.write("The sum is "+ sum);
//  }
//  addition(2,4)
 
//  3.
function prime(n) {
    if (n <= 1) {
        document.write("Not applicable");
    } else {
        let isPrime = true;

        for (let i = 2; i < n; i++) {
            if (n % i == 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            document.write("Is a prime");
        } else {
            document.write("Not a prime");
        }
    }
}

prime(4);

 
//  4. 
// function Fibonacci(){
//   var num = prompt("Enter the number of terms required: ");
//   if (num == 0){
//  document.write("Not Applicable");
//  }else{
//   let n1 = 0;
//   let n2 =1;
//  let r = ' '+n1;
 
//    for(i=1;i<=num;i++)
//   {
//     r += ','+n2;
//    let r2 = n1+n2;
//   n1 = n2;
//  n2 = r2;
//  }
//  document.write(r)}
//  }
//  Fibonacci()
  
      
//  5.
 
//     let n =5;
//     let i =1;
//   while(i<=n){
//    var k = '';
//    var j =1;
//    while(j<=i){
//      k += (i*j);
//      if(j<i){
//        k += ' ';
//     }
//     j ++;}
//  document.write(k+ "<br>");
//  i++;
//  }
 
 
 
 