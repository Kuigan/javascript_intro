# JS Arrays

Arrays in JavaScript sind hochgradig flexible Datenstrukturen, die es ermöglichen, eine geordnete Sammlung von Daten unter einem einzigen Namen zu speichern. Sie können verschiedene Datentypen aufnehmen, einschließlich anderer Arrays (für mehrdimensionale Arrays). Arrays bieten eine Vielzahl von Methoden, um ihre Elemente zu manipulieren, durchlaufen und verwalten. Hier sind einige grundlegende und häufig verwendete Array-Methoden in JavaScript:

### 1. `push()` und `pop()`

- `push()`: Fügt ein oder mehrere Elemente am Ende eines Arrays hinzu und gibt die neue Länge des Arrays zurück.

```jsx
const tiere = ["Katze", "Hund"];
tiere.push("Kaninchen");
console.log(tiere); // ["Katze", "Hund", "Kaninchen"]

```

- `pop()`: Entfernt das letzte Element eines Arrays und gibt dieses Element zurück.

```jsx
const letztesTier = tiere.pop();
console.log(letztesTier); // "Kaninchen"
console.log(tiere); // ["Katze", "Hund"]

```

### 2. `shift()` und `unshift()`

- `shift()`: Entfernt das erste Element eines Arrays und gibt dieses Element zurück. Alle anderen Elemente rücken einen Index nach vorne.

```jsx
const erstesTier = tiere.shift();
console.log(erstesTier); // "Katze"
console.log(tiere); // ["Hund"]

```

- `unshift()`: Fügt ein oder mehrere Elemente am Anfang eines Arrays ein und gibt die neue Länge des Arrays zurück.

```jsx
tiere.unshift("Pferd");
console.log(tiere); // ["Pferd", "Hund"]

```

### 3. `splice()`

- `splice()`: Eine vielseitige Methode zum Hinzufügen oder Entfernen von Elementen an einer beliebigen Stelle im Array. Sie kann auch zum Ersetzen von Elementen verwendet werden.

```jsx
const farben = ["Rot", "Grün", "Blau"];
farben.splice(1, 0, "Gelb"); // Fügt "Gelb" bei Index 1 ein, entfernt 0 Elemente
console.log(farben); // ["Rot", "Gelb", "Grün", "Blau"]

```

### 4. `slice()`

- `slice()`: Erstellt eine Kopie eines Teils oder des gesamten Arrays und gibt diese Kopie zurück, ohne das ursprüngliche Array zu verändern.

```jsx
const farbenKopie = farben.slice(1, 3); // Kopiert Elemente von Index 1 bis 3 (exklusiv)
console.log(farbenKopie); // ["Gelb", "Grün"]

```

### 5. `forEach()`

- `forEach()`: Führt eine gegebene Funktion einmal für jedes Element im Array aus. Diese Methode verändert das Array nicht.

```jsx
farben.forEach(farbe => console.log(farbe));
// Gibt jede Farbe in einem neuen Zeile aus

```

### 6. `map()`

- `map()`: Erstellt ein neues Array mit den Ergebnissen der Ausführung einer Funktion für jedes Element im Array.

```jsx
const grossFarben = farben.map(farbe => farbe.toUpperCase());
console.log(grossFarben); // ["ROT", "GELB", "GRÜN", "BLAU"]

```

### 7. `filter()`

- `filter()`: Erstellt ein neues Array mit allen Elementen, die den Test einer bereitgestellten Funktion bestehen.

```jsx
const langeFarben = farben.filter(farbe => farbe.length > 3);
console.log(langeFarben); // ["Gelb", "Grün", "Blau"]

```

### 8. `find()` und `findIndex()`

- `find()`: Gibt den Wert des ersten Elements im Array zurück, das die bereitgestellte Testfunktion erfüllt. Andernfalls wird `undefined` zurückgegeben.

```jsx
const blaueFarbe = farben.find(farbe => farbe === "Blau");
console.log(blaueFarbe); // "Blau"

```

- `findIndex()`: Gibt den Index des ersten Elements zurück, das die Testfunktion erfüllt. Wenn kein Element den Test besteht, wird -1 zurückgegeben.

```jsx
const indexVonBlau = farben

.findIndex(farbe => farbe === "Blau");
console.log(indexVonBlau); // 3

```

### 9. `reduce()`

- `reduce()`: Wird verwendet, um die Werte eines Arrays zu einem einzigen Wert zusammenzufassen, indem eine Funktion auf jedes Element angewendet wird.

```jsx
const zahlen = [1, 2, 3, 4];
const summe = zahlen.reduce((akkumulator, aktuelleZahl) => akkumulator + aktuelleZahl, 0);
console.log(summe); // 10

```

Diese Methoden sind unverzichtbare Werkzeuge im täglichen Umgang mit Arrays in JavaScript und bieten leistungsstarke Möglichkeiten zur Datenmanipulation und -verarbeitung.