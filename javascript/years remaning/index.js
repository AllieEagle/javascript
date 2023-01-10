var age = prompt ("How old are you? ")
var yearsRemaining = 90 - age;
var days = yearsRemaining * 365;
var weeks = yearsRemaining * 52;
var months = yearsRemaining * 12;
var years = months / 12;
alert ("You have " + years + " years remaining, " +  months + " in months, " + weeks + " in weeks, and " + days + " in days. ")