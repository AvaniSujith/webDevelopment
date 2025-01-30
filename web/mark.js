var mark = prompt("Enter your mark: ");
document.write("The mark obtained is " +mark)
if (mark>80){
    window.alert("Congratulations");
    document.write("<br>First Class A Grade");
}
else if (mark>60){
    window.alert("Distinction");
    document.write("<br>B Grade");
}
else if (mark>40){
    window.alert("Average");
    document.write("<br>C Grade");
}
else {
    window.alert("Failed");
    document.write("<br>Study Well");
}