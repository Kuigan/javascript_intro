// Eine var-Variable kann vor der Deklaration zugegriffen werden.
console.log(meineVar);
var meineVar = 5;


function testVar() {
    console.log("meineVar: " + meineVar);
    var innerVar = "inner";
    console.log("innerVar: " + innerVar);
}

testVar();

//Hier ist die innerVar nicht sichtbar.
console.log("innerVar Test: " + innerVar);