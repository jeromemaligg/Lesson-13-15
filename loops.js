// For Loop

for(let a = 0; a < 20; a++){
  if(a === 5){
   console.log('5 be ready for war');
   continue;
  }
  if(a === 10){
   console.log('Release the kraken');
   break;
  }

   console.log(`Number ${a}`);
}

//While loop

let a = 0;

while(a< 20){
 console.log(`Number ${a}`)
 a++;
}

// Do While
do{
    console.log(`Number ${a}`);
    a++;
}

while(a < 20);

//Loop Through Array
const designerItems = ['Givenchy', 'Supreme', 'Fendi', 'Gucci', 'Balenciaga' ,'Prada'];

for(let a = 0; a < designerItems.length; a++){
  console.log(designerItems[a]);
}

//Foreach
designerItems.forEach(function(designerItem, index, array){
  console.log(`${index} : ${designerItem}`);
  console.log(`${array}`);
});

Map
const twice = [{id: 1, name: 'Nayeon'}, {id: 2, name: 'Minari'}, {id: 3, name: 'Momo'}, {id: 4, name: 'Sana'}];

const ids = twice.map(function(once){
    return once.name
});

console.log(ids);

//For In Loop

const girlCrush = {
    firstName: 'Minari',
    lastName: 'Myoui',
    age: 23
};

for(let m in girlCrush){
  console.log(`${m}: ${girlCrush[m]}`);
}
