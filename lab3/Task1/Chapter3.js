"use strict";

// error: 'val' is not defined
val = 10; 

function fnc() {
  return this;
}

// undefined,not window
console.log(fnc());