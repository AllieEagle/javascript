prompt ("what is yourname name ?");
prompt ("what is their name ?");

var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;

// alert ("Your love score is " + loveScore + " %")

// conditional statements

if (loveScore > 70) {
    alert ("Your love score is " + loveScore + "% " + "you love yourself like i love my momm");
}

if (loveScore > 30 && loveScore <= 70) {
    alert("Your love score is " + loveScore + "% " + "but it is still moderate")
}

if (loveScore < 30) {
    alert("Your love score is " + loveScore + "% " + " whops!!! you have to work hard on your love")
}