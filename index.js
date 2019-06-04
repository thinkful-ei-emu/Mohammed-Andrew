/* eslint-disable no-console */
'use strict';

function max (numbers){
  let i = 0;
  let currentVal = numbers[0];
  while (i < numbers.length){
    if(currentVal < numbers[i]){
      currentVal = numbers[i];   
    }
    i++;
  }
  return currentVal;  
}

function min (numbers){
  let i = 0;
  let currentVal = numbers[0];
  while (i < numbers.length){
    if(currentVal > numbers[i]){
      currentVal = numbers[i];   
    }
    i++;
  }
  return currentVal;  
}
//```````````````````````````````````````````````````````````````
function average (numbers){
  let total = 0;
  numbers.forEach(function(element){
    total += element;
  });
  return total;
}

//``````````````````````````````````````````````````````````````
function repeat(fn, n){
  for(let i = 0; i < n; i++){
    fn();
  }
}

function hello(){
  console.log ('hello world');
}
function goodbye(){
  console.log ('Goodbye world');
}

repeat(hello, 5);
repeat(goodbye, 5);

//````````````````````````````````````````````````````````````````
function filter(arr, fn) {
  // TASK: Define your function here
  let newArray = [];
  for(let i = 0; i < arr.length; i++){
    if(fn(arr[i]) === true){
      newArray.push(arr[i]);
    }
  }
  return newArray;
}

// DO NOT EDIT BETWEEN THESE LINES, BUT DO READ THE CODE ----->
// First we setup an array of strings we plan to filter:
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// We use your `filter` function here, capturing a new array into `filteredNames`
// comprised of names that only begin with 'R'
const filteredNames = filter(myNames, function(name) {
  // This is known as a "predicate function" - it's a function that 
  // only returns a boolean
  return name[0] === 'R';
});

console.log(filteredNames); // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES
console.log(filter(myNames, (name) => { return name[0] === 'R'; }));
//```````````````````````````````````````````````````````````````````````````````````

function hazardWarningCreator(typeOfWarning){
  let warningCounter = 0;
  return function(location){
    warningCounter ++;
    let time = 'time';    
    if(warningCounter ===  0 || warningCounter >= 2){
      time = 'times';      
    }
    console.log (`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
    console.log (`The ${typeOfWarning} hazard alert has triggered ${warningCounter} ${time} today!`);    
  };
}
const rocksWarning = hazardWarningCreator('Rocks on the Road');
const potholeWarning = hazardWarningCreator('Potholes on the Road');
const deadAnimal = hazardWarningCreator('Dead Animals on the Road');

rocksWarning('Main st and Pacific Ave');
rocksWarning('Centinela Ave and Olympic Blvd');
potholeWarning('Main st and Pacific Ave');
potholeWarning('Centinela Ave and Olympic Blvd');
deadAnimal('Main st and Pacific Ave');
deadAnimal('Centinela Ave and Olympic Blvd');

//````````````````````````````````````````````````````````````````````````````````````````````````

let turtleSteps = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];
function isForwardLeft(turtlestep){
  if(turtlestep[0] < 0 || turtlestep[1] < 0){
    return false;
  }
  else{
    return true;
  }
}
const newTurtleStepsArray = turtleSteps.filter(isForwardLeft);
console.log(newTurtleStepsArray);

function totalSteps(step){
  return  step[0] + step[1];
}
const totalMovement = newTurtleStepsArray.map(totalSteps);
console.log(totalMovement);


totalMovement.forEach(function(value, index){
  console.log(`Movement #${index + 1}: ${value} steps`);
});

//````````````````````````````````````````````````````````````````````

let input = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest';
function decodedSentence(words){
  let wordsArray = words.split(' ');
  return wordsArray.reduce(function(accumulator, currentVal){
    //console.log(accumulator, currentVal);
    if(currentVal.length === 3){
      return accumulator + ' ';
    }
    else{
      return accumulator + currentVal[currentVal.length -1].toUpperCase();
    }
  }, '');
}
console.log(decodedSentence(input));
