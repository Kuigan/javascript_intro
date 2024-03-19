// ////////////////////////////////////////////////////////////// ### Aufgabe 1: Finden und Entfernen

// **Ziel**: 
// Schreiben Sie eine Funktion, die ein Array und einen Wert akzeptiert. 
// Die Funktion sollte den Wert im Array suchen und entfernen, falls vorhanden. 
// Geben Sie das modifizierte Array zurück.

// Code
function entferneElement(arr, wert) {
    const index = arr.indexOf(wert); // Index des Werts im Array finden
    if (index !== -1) { // Überprüfen, ob der Wert im Array vorhanden ist
        arr.splice(index, 1); // Element aus dem Array entfernen
    }
    return arr; // Modifiziertes Array zurückgeben
}

// Test
console.log(entferneElement([1, 2, 3, 4, 5], 3)); // Sollte [1, 2, 4, 5] ausgeben



// ////////////////////////////////////////////////////////////// ### Aufgabe 2: Summe aller Zahlen

// **Ziel**: Schreiben Sie eine Funktion, die ein Array von Zahlen akzeptiert 
// und die Summe aller Zahlen im Array zurückgibt. 
// Nutzen Sie die `reduce`-Methode für Ihre Lösung.

// Code
function summeZahlen(arr) {
  // Implementieren Sie Ihre Lösung mit reduce

  const summe = arr.reduce((akkumulator, aktuelleZahl) => akkumulator + aktuelleZahl, 0);
  console.log(summe); // 15

}

// Test
console.log(summeZahlen([1, 2, 3, 4, 5])); // Sollte 15 ausgeben



// ////////////////////////////////////////////////////////////// ### Aufgabe 3: Duplikate Filtern

//**Ziel**: Schreiben Sie eine Funktion, die ein Array akzeptiert und ein neues Array zurückgibt, 
// in dem alle Duplikate entfernt wurden. 
// Bewahren Sie die Reihenfolge der Elemente gemäß ihrem ersten Auftreten im ursprünglichen Array. 
//Betrachten Sie die Verwendung der Methoden `filter` und `indexOf` oder `includes`.


// Code
function entferneDuplikate(arr) {
    // Verwenden Sie hier geeignete Array-Methoden
    return arr.filter((element, index) => arr.indexOf(element) === index);
  }
  
// Test
  console.log(entferneDuplikate([1, 2, 2, 3, 4, 4, 5])); // Sollte [1, 2, 3, 4, 5] ausgeben


// ////////////////////////////////////////////////////////////// ### Aufgabe 4: Überprüfung der Jahreszeit

// **Ziel**: Schreiben Sie eine Funktion, die eine Zahl für den Monat (1 bis 12) akzeptiert 
// und die entsprechende Jahreszeit zurückgibt: Winter, Frühling, Sommer oder Herbst. 
// Nehmen Sie an, dass Winter die Monate 12, 1, 2 umfasst, Frühling 3, 4, 5, Sommer 6, 7, 8 und Herbst 9, 10, 11.


// Code
function bestimmeJahreszeit(monat) {
    // Verwenden Sie Bedingungen, um die Jahreszeit zu bestimmen
    if (monat === 12 || monat === 1 || monat === 2) {
      return "Winter";
    } else if (monat === 3 || monat === 4 || monat === 5) {
      return "Frühling";
    } else if (monat === 6 || monat === 7 || monat === 8) {
      return "Sommer";
    } else if (monat === 9 || monat === 10 || monat === 11) {
      return "Herbst";
    } else {
      return "Ungültiger Monat"; // Für den Fall, dass der Monat außerhalb des Bereichs 1 bis 12 liegt
    }
  }
  
  // Test
  console.log(bestimmeJahreszeit(4)); // Sollte "Frühling" ausgeben
  


// ////////////////////////////////////////////////////////////// ### Aufgabe 5: Passwort-Validierung

// **Ziel**: Schreiben Sie eine Funktion, die ein Passwort (String) akzeptiert und überprüft, 
// ob es den Sicherheitsanforderungen entspricht: mindestens 8 Zeichen lang, enthält mindestens eine Zahl und mindestens einen Großbuchstaben. 
// Die Funktion soll `true` zurückgeben, wenn das Passwort gültig ist, und `false`, wenn es ungültig ist.

// Code
function istPasswortGueltig(passwort) {
    // Implementieren Sie die Passwort-Validierungslogik
    if (passwort.length < 8) {
      return false; // Das Passwort ist zu kurz
    }
  
    // Überprüfen, ob das Passwort mindestens eine Zahl enthält
    let hatZahl = false;
    for (let char of passwort) {
      if (!isNaN(parseInt(char))) {
        hatZahl = true;
        break;
      }
    }
    if (!hatZahl) {
      return false; // Das Passwort enthält keine Zahl
    }
  
    // Überprüfen, ob das Passwort mindestens einen Großbuchstaben enthält
    let hatGrossbuchstabe = false;
    for (let char of passwort) {
      if (char.toUpperCase() === char && char.toLowerCase() !== char) {
        hatGrossbuchstabe = true;
        break;
      }
    }
    if (!hatGrossbuchstabe) {
      return false; // Das Passwort enthält keinen Großbuchstaben
    }
  
    return true; // Das Passwort erfüllt alle Bedingungen
  }
  
  // Test
  console.log(istPasswortGueltig("Test1234")); // Sollte true ausgeben
  


// ////////////////////////////////////////////////////////////// ### Aufgabe 6: Einfacher Taschenrechner

// **Ziel**: Schreiben Sie eine Funktion, die zwei Zahlen und eine Operation (`"+"`, `"-"`, `"*"`, `"/"`) akzeptiert 
// und das Ergebnis der Operation zurückgibt. 
// Die Funktion soll eine Fehlermeldung ausgeben, wenn eine ungültige Operation übergeben wird.

// Code
function taschenrechner(a, b, operation) {
    // Verwenden Sie Bedingungen, um die entsprechende Operation auszuführen
    if (operation === "+") {
      return a + b;
    } else if (operation === "-") {
      return a - b;
    } else if (operation === "*") {
      return a * b;
    } else if (operation === "/") {
      return a / b;
    } else {
      return "Ungültige Operation";
    }
  }
  
  // Test
  console.log(taschenrechner(10, 5, "+")); // Sollte 15 ausgeben
  console.log(taschenrechner(10, 5, "/")); // Sollte 2 ausgeben
  console.log(taschenrechner(10, 5, "x")); // Sollte "Ungültige Operation" ausgeben
  


// ////////////////////////////////////////////////////////////// ### Aufgabe 7: Multiplikationstabelle

// **Ziel**: Schreiben Sie eine Funktion, die eine Zahl nimmt und eine Multiplikationstabelle für diese Zahl von 1 bis 10 ausgibt. 
// Jede Zeile sollte das Format `n x i = Ergebnis` haben, wobei `n` die gegebene Zahl und `i` der Multiplikator von 1 bis 10 ist.

// Beispielcode
function multiplikationstabelle(n) {
    // Verwenden Sie eine for-Schleife, um die Tabelle zu generieren und auszugeben
    for (let i = 1; i <= 10; i++) {
      console.log(`${n} x ${i} = ${n * i}`);
    }
  }
  
  // Test
  multiplikationstabelle(5); // Sollte die Multiplikationstabelle für 5 ausgeben
 

// ////////////////////////////////////////////////////////////// ### Aufgabe 8: Array-Umkehrung

// **Ziel**: Schreiben Sie eine Funktion, die ein Array von Elementen akzeptiert und ein neues Array zurückgibt, 
// in dem die Reihenfolge der Elemente umgekehrt ist. 
// Verwenden Sie eine `for`-Schleife für die Umkehrung und versuchen Sie, ohne die eingebaute `reverse()` Methode auszukommen.


// Code
function umkehrenArray(arr) {
    let umgekehrtesArray = [];
    // Verwenden Sie eine for-Schleife, um das Array umzukehren
    for (let i = arr.length - 1; i >= 0; i--) {
      umgekehrtesArray.push(arr[i]);
    }
    return umgekehrtesArray;
  }
  
  // Test
  console.log(umkehrenArray([1, 2, 3, 4, 5])); // Sollte [5, 4, 3, 2, 1] ausgeben
  

// ////////////////////////////////////////////////////////////// ### Aufgabe 9: Zählen von Buchstaben

// **Ziel**: Schreiben Sie eine Funktion, die einen String und einen Buchstaben akzeptiert. 
// Die Funktion soll die Anzahl der Vorkommen dieses Buchstabens im String zurückgeben. 
// Groß- und Kleinschreibung soll nicht beachtet werden.

// Code
function zaehleBuchstaben(str, buchstabe) {
    // Konvertieren Sie den String und den Buchstaben in Kleinbuchstaben, um die Groß- und Kleinschreibung zu ignorieren
    const kleinbuchstabenStr = str.toLowerCase();
    const kleinbuchstabenBuchstabe = buchstabe.toLowerCase();
  
    let anzahl = 0;
    // Durchlaufen Sie den String und zählen Sie, wie oft der Buchstabe vorkommt
    for (let char of kleinbuchstabenStr) {
      if (char === kleinbuchstabenBuchstabe) {
        anzahl++;
      }
    }
    return anzahl;
  }
  
  // Test
  console.log(zaehleBuchstaben("Hallo Welt", "l")); // Sollte 3 ausgeben


// ////////////////////////////////////////////////////////////// ### Aufgabe 10: Finde gerade Zahlen 

//**Ziel**: Schreiben Sie eine Funktion, die ein Array von Zahlen akzeptiert 
// und ein neues Array zurückgibt, das nur die geraden Zahlen des ursprünglichen Arrays enthält.

// Code
function filterGeradeZahlen(arr) {
    let geradeZahlen = [];
    // Verwenden Sie eine for-Schleife und eine Bedingung, um gerade Zahlen zu filtern
    for (let zahl of arr) {
      if (zahl % 2 === 0) { // Überprüfen, ob die Zahl gerade ist
        geradeZahlen.push(zahl); // Hinzufügen der geraden Zahl zum neuen Array
      }
    }
    return geradeZahlen;
  }
  
  // Test
  console.log(filterGeradeZahlen([1, 2, 3, 4, 5, 6])); // Sollte [2, 4, 6] ausgeben
  

// //////////////////////////////////////////////////////////////### Aufgabe 11: Minimale und maximale Zahl finden

// **Ziel**: Schreiben Sie eine Funktion, die ein Array von Zahlen akzeptiert 
// und ein Objekt zurückgibt, das die minimale und maximale Zahl aus diesem Array enthält.

// Code
function findeMinMax(arr) {
    // Initialisieren Sie min und max entsprechend
    let min = arr[0];
    let max = arr[0];
    
    // Durchlaufen Sie das Array, um min und max zu aktualisieren
    for (let zahl of arr) {
      if (zahl < min) {
        min = zahl;
      }
      if (zahl > max) {
        max = zahl;
      }
    }
    
    // Rückgabe eines Objekts mit min und max
    return { min: min, max: max };
  }
  
  // Test
  console.log(findeMinMax([10, 2, 5, 1, 9])); // Sollte { min: 1, max: 10 } ausgeben


// ////////////////////////////////////////////////////////////// ### Aufgabe 12: Durchschnittsberechnung

// **Ziel**: Schreiben Sie eine Funktion, die ein Array von Zahlen akzeptiert 
// und den Durchschnittswert dieser Zahlen berechnet. 
// Geben Sie das Ergebnis zurück.

// Code
function berechneDurchschnitt(arr) {
    let summe = 0;
    // Verwenden Sie eine for-Schleife, um die Summe der Zahlen zu berechnen
    for (let zahl of arr) {
      summe += zahl;
    }
    // Teilen Sie die Summe durch die Anzahl der Zahlen, um den Durchschnitt zu erhalten
    return summe / arr.length;
  }
  
  // Test
  console.log(berechneDurchschnitt([1, 2, 3, 4, 5])); // Sollte 3 ausgeben