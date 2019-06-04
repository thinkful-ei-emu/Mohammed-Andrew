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



