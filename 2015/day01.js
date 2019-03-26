const fs = require('fs');

fs.readFile('./input.txt', (err, data) => {
  console.time('xmas')
  if(err){
    console.log("Error reading file");
  } else {
    const flData = data.toString('utf8').split('');
    //console.log(flData);
  let posBase = 0, c = 1;

 const res = flData.reduce((acc, floor, index) => {
   if(floor == '(')
      { acc++;}
   else 
      {acc--; }

  if(acc == -1 && c==1){
    posBase = index;
    c++;
  }
    
   return acc;
 }, 0);
    console.log('reduce', res, posBase+1 );



/* //4.340ms
  var countedNames = flData.reduce(function (allNames, name) { 
  if (name in allNames) {
    allNames[name]++;
  }
  else {
    allNames[name] = 1;
  }
  return allNames;
}, {});
  

let result = countedNames['('] - countedNames[')'];

console.log(result);
*/

console.timeEnd('xmas');
  }
}); 
