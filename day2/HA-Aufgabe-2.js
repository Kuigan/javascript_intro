// Aufgabenstellung 2:
// Entwickle den JavaScript Code, der das Alter einer Person auswertet und 
// die Fahrkartenpreiskategorien abhängig davon bestimmt.  
// Wenn eine Person junger als 6 ist, ist die Fahrt kostenlos. 
// Wenn eine Person zwischen 6 und 17 Jahre alte ist, dann fährt man zum Kinderpreis. 
// Wenn eine Person zwischen 18 und 66 Jahre alt ist, dann fährt man zum Vollpreis. 
// Wenn eine Person älter als 67 ist, dann fährt man zum Seniorenpreis. 


// Der Wert von 10 Jahren in der Variable "alter" ist als Beispiel eingesetzt
let alter = 10;     

if (alter >= 67) {
    console.log("Seniorenpreis");
} else if (alter >= 17) {
    console.log("Vollpreis");
} else if (alter >= 6) {
    console.log("Kinderpreis");
} else {
    console.log("Kostenlos");
}