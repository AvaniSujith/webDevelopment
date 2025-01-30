function palindrome()
{
    var n = prompt("Enter the number: ");
    
    
    if(n==0){
        document.write("Not applicable");
    }else{
          var temp = n;
          var rev = 0;
        while (temp > 0) {
        var digit = temp % 10;
        rev = rev * 10 + digit;
        temp = (temp - digit) / 10;
    }
         if (rev == n) {
        document.write("The number is a palindrome.");
    } else {
        document.write("The number is not a palindrome.");
    }
    }

}
palindrome()


function fact(){
    var num = prompt("Enter the number: ");
    var facto = 1;
    for(i=1;i<=num;i++){
    facto *= i;
    }
    document.write("factorial of "+num + " = " +facto);

}
fact()

