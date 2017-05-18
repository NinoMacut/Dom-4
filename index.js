/**
 * Created by Ucenik on 18.5.2017..
 */

var values = [];

function getValue(){
    var value = document.getElementById("value").value;
    if(isNaN(value) != true){
        values.push(value);
    }
    else if(isNaN(value) == true){
        values.push(0);
    }
}
function printValues(){
    document.getElementById("printer").innerHTML += ' ' + Math.max.apply(null,values);
}

document.getElementById("valuegetter").addEventListener("click", getValue);
document.getElementById("valueprinter").addEventListener("click", printValues);




function checkValues(){
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    if (name.length > 10){
        document.getElementById("printer2").innerHTML += " Your name can't be longer than 10 characters!";
    }
    if (age > 17 && age < 100){
        document.getElementById("printer2").innerHTML += " Your age isn't between 18 and 99, you are either too young or too old!";
    }
}

document.getElementById("valuechecker").addEventListener("click", checkValues);




function divColor(){
    var x = Math.random() * (1000 - 1) + 1;
    if (x > 1 && x < 200)
}
document.getElementById("divcoloriser").addEventListener("click", divColor);

