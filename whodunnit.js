const scenario = {
    murderer: 'Miss Scarlet',
    room: 'Library',
    weapon: 'Rope'
  };
  
  const declareMurderer = function() {
    return `The murderer is ${scenario.murderer}.`;
  }
  
  const verdict = declareMurderer();
  console.log(verdict);  
  
  // // EXPLANATION:
  // Scenario using a const type variable. 
  // declareMurderer  will return  the string. In this case murederer = 'Miss Scarlet'
  // The verdict const variable calls the anonymous function declareMurderer and as the murderer has been 'hardcoded' to be Miss Scarlet, she is the murderer.
  

  const murderer = 'Professor Plum';

  const changeMurderer = function() {
    murderer = 'Mrs. Peacock';
  }
  
  const declareMurderer = function() {
    return `The murderer is ${murderer}.`;
  }
  
  changeMurderer();
  const verdict = declareMurderer();
  console.log(verdict);

  // // EXPLANATION:
// The murderer is declared to be Professor Plum using a const variable.
// The changeMurderer function will not run it will be  an error, as the murderer variable is a const variable, already assigned, which cannot be changed.


let murderer = 'Professor Plum';

const declareMurderer = function() {
  let murderer = 'Mrs. Peacock';
  return `The murderer is ${murderer}.`;
};

const firstVerdict = declareMurderer();
console.log('First Verdict: ', firstVerdict);

const secondVerdict = `The murderer is ${murderer}.`;
console.log('Second Verdict: ', secondVerdict);

// First verdict will be 'Mrs. Peacock', as this refers to the declareMurderer function, and related murderer.
// Second verdict is 'professor Plum', it is outside of the function. 


let suspectOne = 'Miss Scarlet';
let suspectTwo = 'Professor Plum';
let suspectThree = 'Mrs. Peacock';

const declareAllSuspects = function() {
  let suspectThree = 'Colonel Mustard';
  return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
}

const suspects = declareAllSuspects();
console.log(suspects);
console.log(`Suspect three is ${suspectThree}.`);

// Initial variable is declared, but we will creat a local variable, so the SuspectThree is changing. F
//Result:Miss Scarlet, Professor Plum, Colonel Mustard.