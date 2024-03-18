// Aufgabenstellung 1:
// Entwickle den JavaScript Code, der eine Punktzahl auswertet.  
// Die Auswertung muss Folgende Interpretation anzeigen: 
// Wenn die Punktzahl höher als 90 ist, muss "sehr gut” in der Konsole ausgegeben werden. 
// Wenn die Punktzahl zwischen 80 und 90 ist, muss "gut” in der Konsole ausgegeben werden. 
// Wenn die Punktzahl zwischen 70 und 80 ist, muss "befriedigend” in der Konsole ausgegeben werden. 
// Wenn die Punktzahl zwischen 60 und 70 ist, muss "ausreichend” in der Konsole ausgegeben werden. 
// Wenn die Punktzahl kleiner als 60 ist, muss "nicht bestanden” in der Konsole ausgegeben werden. 

 
// Der Wert von 10 Punkten in der Variable "punktzahl" ist als Beispiel eingesetzt
let punktzahl = 10;

if (punktzahl >= 90) {
    console.log("Dein Ergebnis ist: sehr gut");
} else if (punktzahl >= 80) {
    console.log("Dein Ergebnis ist: gut");
} else if (punktzahl >= 70) {
    console.log("Dein Ergebnis ist: befriedigend");
} else if (punktzahl >= 60) {
    console.log("Dein Ergebnis ist: ausreichend");
} else {
    console.log("Dein Ergebnis ist: nicht bestanden");
}