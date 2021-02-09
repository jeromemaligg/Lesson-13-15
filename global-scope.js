//Global Scope

var M = 5;
let N = 10;
const S = 15;

function attack(){
 var m = 20;
 let n = 25;
 const s = 30;
 console.log(`Number of Titans: ${m}, ${n}, ${s}`);
}

attack();

if(true){
  // Block Scope
 var m = 200;
 let n = 250;
 const s = 300;
  console.log(`Lucky Numbers for 2021: ${m}, ${n}, ${s}`);
}

for(var M = 0; M < 10; M++){
 console.log(`Loop ${M}`)
}

console.log(`Global Scope: ${M}, ${N}, ${S}`);