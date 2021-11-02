const yargs = require("yargs");
console.log(yargs.argv);

let command = yargs.argv._[0];
let params = yargs.argv;

if (command === 'train') {
  console.log('pipeline');

} else if (command === 'drive') {
  if (params.speed && params.car) {
    console.log(`Driving in a ${params.car} at the speed of ${params.speed} km per hour`);
  } else {
    console.log('driving');
  }

} else if (command === 'sail') {
  if (params.speed && params.boat) {
    console.log(`Sailing on a ${params.boat} at the speed of ${params.speed} km per hour`);
  } else {
    console.log('sailing');
  }

} else if (command === 'fly') {
  if (params.speed && params.airplane) {
    console.log(`Flying a ${params.airplane} at the speed of ${params.speed} km per hour`);
  } else {
    console.log('flying');
  }
}


