//////////////////////////////////////////////////### Aufgabe 1: Block-Scoped Variablen//////////////////////////////////////////////////
// **Ziel**: Erstellen Sie eine Schleife mit `let` und versuchen Sie, nach der Schleife 
// auf die Schleifenvariable zuzugreifen. Erklären Sie das Verhalten der Variablen.

// Schreiben Sie hier den Code für die Schleife
for (let i = 0; i < 5; i++) {
    console.log("Schleifenvariable i innerhalb der Schleife:", i);
}

// Versuchen Sie dann, auf die Schleifenvariable außerhalb der Schleife zuzugreifen
console.log("Schleifenvariable i außerhalb der Schleife:", i);

// Der Code verwendet let, um die Variable i innerhalb der Schleife zu deklarieren. 
// Diese Verwendung von let macht i blockgebunden, was bedeutet, dass es nur innerhalb der Schleife sichtbar ist. 
// Wenn versucht wird, auf i außerhalb der Schleife zuzugreifen, tritt ein Fehler auf, da i außerhalb seines Gültigkeitsbereichs liegt.



//////////////////////////////////////////////////### Aufgabe 2: Funktion-Scoped Variablen//////////////////////////////////////////////////
// **Ziel**: Erstellen Sie eine Funktion, die eine mit `var` deklarierte Variable verwendet. 
// Versuchen Sie, vor und nach dem Aufruf der Funktion auf diese Variable zuzugreifen. 
// Erklären Sie das Verhalten der Variablen.

// Definieren Sie eine Funktion, die eine mit `var` deklarierte Variable verwendet
function testVar() {
    for (var i = 0; i < 3; i++) {
        console.log("Innerhalb der Schleife: " + i);
    }
}

// Rufen Sie die Funktion auf
testVar();

// Testen Sie den Zugriff auf diese Variable außerhalb der Funktion
console.log("Außerhalb der Funktion: " + i);

// Die Variable i wird innerhalb der Funktion testVar() mit var deklariert. 
// Dadurch ist i für die gesamte Funktion sichtbar. 
// Nachdem die Funktion aufgerufen wurde, bleibt i auch außerhalb der Funktion sichtbar, 
// da var Variablen funktionsgebunden sind und einen Funktionsumfang haben. 
// So ist i nach dem Funktionsaufruf immer noch zugänglich und enthält den zuletzt zugewiesenen Wert, in diesem Fall 3.



//////////////////////////////////////////////////### Aufgabe 3: Konstanten mit `const`//////////////////////////////////////////////////
// **Ziel**: Deklarieren Sie eine Konstante mit `const` und versuchen Sie, ihren Wert zu ändern. 
// Erklären Sie das Verhalten der Variablen.


// Deklarieren Sie eine Konstante mit `const` und weisen Sie ihr einen Wert zu
const testConst = 5;

// Versuchen Sie, den Wert der Konstante zu ändern
testConst = 7;

// Wert der Variable ausgeben
console.log(testConst);


// Die Variable testConst wird als Konstante mit dem Wert 5 deklariert. 
// Da es sich um eine Konstante handelt, kann ihr Wert nach der Initialisierung nicht mehr geändert werden. 
// Versuche, den Wert der Konstanten zu ändern, führen zu einem Fehler. 
// Konstanten mit const haben einen festen Wert, der während der Laufzeit des Programms nicht geändert werden kann.



//////////////////////////////////////////////////### Aufgabe 4: Temporale Dead Zone//////////////////////////////////////////////////

// **Ziel**: Demonstrieren Sie das Verhalten der "temporalen dead zone" (TDZ) mit einer `let` 
// oder `const` deklarierten Variable, indem Sie versuchen, auf sie zuzugreifen, bevor sie deklariert wird. 
// Erklären Sie das Verhalten der Variablen.


// Versuchen Sie, auf eine Variable zuzugreifen, bevor sie mit `let` oder `const` deklariert wird

console.log(blockScope); // Hier wird ein Fehler auftreten

if (true) {
    let blockScope = "Block-Scope";
    console.log(blockScope);
}

// In dieser Lösung wird versucht, auf die Variable blockScope zuzugreifen, bevor sie mit let deklariert wird. 
// Dies führt dazu, dass ein Fehler auftritt, da blockScope in der "temporalen Dead Zone" (TDZ) ist und noch nicht deklariert wurde. 
// Dieses Verhalten tritt auf, weil let eine blockgebundene Deklaration ist 
// und ihre Sichtbarkeit auf den Block beschränkt ist, in dem sie deklariert wurde. 
// Außerhalb dieses Blocks ist sie nicht sichtbar.


//////////////////////////////////////////////////### Aufgabe 5: `var` in Loops//////////////////////////////////////////////////

// **Ziel**: Verwenden Sie eine mit `var` deklarierte Schleifenvariable in einer `for`-Schleife 
// und erstellen Sie innerhalb der Schleife eine Funktion, die auf diese Variable zugreift. 
// Überprüfen Sie den Wert der Variable innerhalb dieser Funktion. 
// Erklären Sie das Verhalten der Variablen.


// Erstellen Sie eine for-Schleife mit `var`
// Definieren Sie innerhalb der Schleife eine Funktion, die auf die Schleifenvariable zugreift
for (var i = 0; i < 3; i++) {
// Rufen Sie die Funktion innerhalb der Schleife auf
    console.log("Innerhalb der Schleife: " + i);
}

// Die Variable i wird in einer for-Schleife mit var deklariert. 
// Variablen, die mit var deklariert sind, haben eine Funktionsumfangsdeklaration, was bedeutet, 
// dass sie sowohl innerhalb als auch außerhalb der Schleife sichtbar sind. 
// Die Funktion, die innerhalb der Schleife definiert ist, hat Zugriff auf die Variable i 
// und kann auf ihren aktuellen Wert zugreifen. 
// Das liegt daran, dass var Variablen funktionsgebunden sind und ihren Wert für die gesamte Funktion beibehalten.



//////////////////////////////////////////////////### Aufgabe 6: Block-Scoped Funktionen//////////////////////////////////////////////////

// **Ziel**: Erstellen Sie einen Codeblock (z. B. eine `if`-Anweisung), der eine Funktion mit `let` oder `const` definiert. 
// Versuchen Sie, außerhalb des Blocks auf diese Funktion zuzugreifen. 
// Erklären Sie das Verhalten der Variablen.


// Erstellen Sie einen Codeblock, in dem Sie eine Funktion mit `let` oder `const` definieren
if (true) {
    let blockScope = "Block-Scope";
    console.log(blockScope);
}
// Versuchen Sie, außerhalb des Blocks auf die Funktion zuzugreifen
console.log(blockScope);

// Die Funktion wird innerhalb eines Codeblocks mit let deklariert. 
// Variablen, die mit let oder const deklariert sind, haben eine Blockumfangsdeklaration, was bedeutet, 
// dass sie nur innerhalb des Blocks sichtbar sind. 
// Wenn versucht wird, auf die Funktion außerhalb des Blocks zuzugreifen, wird ein Fehler auftreten, 
// da die Funktion außerhalb ihres Gültigkeitsbereichs liegt. 



//////////////////////////////////////////////////### Aufgabe 7: Globale Variablen//////////////////////////////////////////////////

// **Ziel**: Deklarieren Sie eine Variable mit `var` und eine mit `let` oder `const` im globalen Scope. 
// Zugriff auf beide über das globale Objekt `window` (im Browser). 
// Erklären Sie das Verhalten der Variablen.


// Deklarieren Sie eine globale Variable mit `var`
var testVar = "Test: var";
// Deklarieren Sie eine globale Variable mit `let` oder `const`
let testLet = "Test: let";
// Versuchen Sie, auf die Variable, die mit `var` deklariert wurde, über das `window`-Objekt zuzugreifen
console.log(window.testVar); // Zugriff auf die mit `var` deklarierte Variable
// Versuchen Sie, auf die Variable, die mit `let` oder `const` deklariert wurde, über das `window`-Objekt zuzugreifen
console.log(window.testLet); // Das wird zu einem Fehler führen, da `let`-Variablen nicht dem globalen Objekt `window` hinzugefügt werden

// Die Variable testVar, die mit var deklariert wurde, ist direkt über das window-Objekt zugänglich. 
// Die Variable testLet, die mit let deklariert wurde, wird jedoch nicht direkt im globalen Bereich des window-Objekts zugänglich sein.
// Wenn versucht wird, auf sie über window zuzugreifen, wird ein Fehler auftreten. 
// Das liegt daran, dass let und const blockgebundene Deklarationen sind und ihre Sichtbarkeit auf den Block beschränkt ist, in dem sie deklariert wurden.



//////////////////////////////////////////////////### Aufgabe 8: Einkaufslisten-Filter//////////////////////////////////////////////////

// **Szenario**: Sie entwickeln eine Einkaufslisten-App. 
// Schreiben Sie eine Funktion, die eine Liste von Preisen filtert und nur die Artikel zurückgibt, 
// die weniger als 10 Euro kosten und deren Preise gerade Zahlen sind.


// Beispiel:
// Eingabe: [5, 12, 7, 9, 20, 25]
// Ausgabe: [20]

function filterEinkaufsliste(preise) {
    return preise.filter(preis => preis < 10 && preis % 2 === 0);
}

const preise = [5, 12, 7, 9, 20, 25];
console.log(filterEinkaufsliste(preise)); 




//////////////////////////////////////////////////### Aufgabe 9: Alter-Verifikationssystem//////////////////////////////////////////////////

// **Szenario**: Sie arbeiten an einer Website, die altersbeschränkte Inhalte anbietet. 
// Implementieren Sie eine Funktion, die eine Liste von Benutzern (repräsentiert durch Objekte mit `name` und `alter`) überprüft 
// und alle Benutzer zurückgibt, die alt genug sind, um auf die Inhalte zuzugreifen (18 Jahre und älter).


// Beispiel:
// Eingabe: [{name: "Max", alter: 22}, {name: "Anna", alter: 16}]
// Ausgabe: [{name: "Max", alter: 22}]

function filterAltersbeschraenkung(benutzerListe) {
    return benutzerListe.filter(benutzer => benutzer.alter >= 18);
}

const benutzerListe = [
    { name: "Max", alter: 22 },
    { name: "Anna", alter: 16 }
];

console.log(filterAltersbeschraenkung(benutzerListe));




//////////////////////////////////////////////////### Aufgabe 10: Einfacher Palindrom-Checker für Usernamen//////////////////////////////////////////////////

// **Szenario**: Für ein neues Social-Media-Netzwerk sollen Usernamen, 
// die Palindrome sind, besonders hervorgehoben werden. 
// Entwickeln Sie eine Funktion, die einen Usernamen überprüft und entscheidet, ob dieser ein Palindrom ist.

// Beispiel:
// Eingabe: "Anna"
// Ausgabe: true

function istPalindrome(benutzername) {
    benutzername = benutzername.toLowerCase(); // Um Groß- und Kleinschreibung zu ignorieren
    const reversed = benutzername.split('').reverse().join(''); // Den Benutzernamen umdrehen
    return benutzername === reversed; // Überprüfen, ob der umgedrehte Benutzername dem ursprünglichen entspricht
}

const benutzername = "Anna";
console.log(istPalindrome(benutzername));



//////////////////////////////////////////////////### Aufgabe 11: Punktezähler//////////////////////////////////////////////////

// **Szenario**: Sie erstellen ein Spiel, bei dem Spieler Punkte sammeln können. 
// Implementieren Sie eine Funktion, die die Gesamtpunktzahl eines Spielers berechnet, 
// indem alle gesammelten Punkte (eine Reihe von Zahlen) summiert werden.

// Beispiel:
// Eingabe: [10, 20, 30]
// Ausgabe: 60

function berechneGesamtpunktzahl(punkte) {
    return punkte.reduce((gesamt, punkt) => gesamt + punkt, 0);
}

const punkte = [10, 20, 30];
console.log(berechneGesamtpunktzahl(punkte));



//////////////////////////////////////////////////### Aufgabe 12: Filter für einzigartige Produkte//////////////////////////////////////////////////

// **Szenario**: In einem Online-Shop sollen aus einer Liste von Produktnamen diejenigen gefiltert werden, 
// die nur einmal vorkommen, da diese für eine Sonderaktion ausgewählt werden sollen. 
// Implementieren Sie eine Funktion, die diese Filterung vornimmt.


// Beispiel:
// Eingabe: ["T-Shirt", "Hose", "T-Shirt", "Mütze"]
// Ausgabe: ["Hose", "Mütze"]

function filterEinmaligeProdukte(produkte) {
    const produktZaehlung = produkte.reduce((zaehlung, produkt) => {
        zaehlung[produkt] = (zaehlung[produkt] || 0) + 1; // Erhöhe die Anzahl jedes Produkts
        return zaehlung;
    }, {});

    return produkte.filter(produkt => produktZaehlung[produkt] === 1); // Filtere Produkte, die nur einmal vorkommen
}

// Beispiel:
const produkte = ["T-Shirt", "Hose", "T-Shirt", "Mütze"];
console.log(filterEinmaligeProdukte(produkte)); // Ausgabe: ["Hose", "Mütze"]



/*

//////////////////////////////////////////////////### Aufgabe 13: Katalogstruktur-Ebenen zählen//////////////////////////////////////////////////

**Szenario**: Sie arbeiten an einem Content-Management-System und benötigen eine Funktion, die die Tiefe der Verschachtelung in der Kategoriestruktur zählt. Jedes Objekt kann Kategorien enthalten, die weitere Unterkategorien haben.

```jsx
// Beispiel:
// Eingabe: {Kleidung: {Herren: {Hosen: {}, Hemden: {}}, Damen: {Kleider: {}, Röcke: {}}}}
// Ausgabe: 3
```

//////////////////////////////////////////////////### Aufgabe 14: Besucherzählung für Veranstaltungen//////////////////////////////////////////////////

**Szenario**: Für ein Veranstaltungsmanagement-Tool müssen Sie eine Funktion schreiben, die die Anzahl der Besucher zählt, deren Alter innerhalb eines bestimmten Bereichs liegt, um die Zielgruppe besser zu verstehen.

```jsx
// Beispiel:
// Eingabe: [22, 34, 15, 17, 18, 45], min = 18, max = 35
// Ausgabe: 3
```

*/