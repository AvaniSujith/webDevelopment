var age = prompt("Enter you age: ");
if (age < 18){
    window.alert("Ineligible");
}else{
    window.alert("Eligible");
    var s = confirm("Are you voting");
    if (s == true)
    {
        alert("Voting");
    }
        else
    {
        alert("Not voting");
    }
}