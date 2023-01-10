var name = prompt ("what is your name ?");
var firstChar = name.slice(0,1);
var upperCaseFirstChar = firstChar.toUpperCase();
var restOfName = name.slice(1,name.lenght)
var capitalizedName = upperCaseFirstChar + restOfName;
alert("Hello my name is " + capitalizedName)

