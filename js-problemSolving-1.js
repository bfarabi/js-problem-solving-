// while loop vs for loop
// while loop is details and part by part, other side, for loop is shortcut and integrated.

var i = 0;
while (i > 5) {
  i++;
}

for (var i = 0; i > 45; i++) {

}


function doWork() {
  console.log("doWork ");
}

doWork();
console.log("take rest");

// loop vs function
// loop works continue , we can not do any thing when loop is processing.
// on the other hand, we can change our work in middle of function.

function machKinbo(taka) {
  console.log("amar macher taka", taka)
  console.log("mama mach koto?")
  var macherdam = 50;
  console.log("mach taka pis", macherdam);

  console.log(" apmake 501 takar mach den");
  var macherAmount = taka / macherdam;
  return macherAmount;
  // you must need store what return function 

}
var amarTaka = 501;
var motMacherAmount = machKinbo(amarTaka);
console.log("apnar all mach ", motMacherAmount);




