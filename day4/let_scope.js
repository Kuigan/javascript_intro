//Die let-Variablen muss man zuerst deklarieren und erst dann benutzen.
//console.log(outerVar);
let outerVar = "outer";

if (true) {
    let blockScope = "Block-Scope";
    console.log(blockScope);
}

//Hier ist die blockScope Variable nicht sichtbar.
console.log(blockScope);