'use strict';

function wordsInCommon(words1, words2) {
  const setWords1 = new Set(words1);
  const setWords2 = new Set(words2);

  const results = new Set();

  for (let word of setWords1) {
    if (setWords2.has(word)) {
      results.add(word)
    }
  }

  return Array.from(results);
}

let kidLanguage = ["bagon", "baltoy", "yamask", "starly", "nosepass", "kalob", "nicky", "booger"]

function kidsGame(names) {
  let output = [names.shift()];

  const firstLetterWords = {};

  for(let name of names) {
    if(!firstLetterWords[name[0]]){
      firstLetterWords[name[0]] = [name];
    } 
    else {
      firstLetterWords[name[0]].push(name);
    }
  }

  console.log('first word: ' + output);
  
  while (true) {
    let lenOutput = output.length -1;
    let lastWord = output[lenOutput];
    console.log('last word: ' + lastWord);
    
    if (lastWord === undefined) {
      console.log('inside conditional')
      break;
    }

    let lastLetter = lastWord[(lastWord.length) - 1];

    let word = firstLetterWords[lastLetter].shift();
    output.push(word);
  }
  return output;
}
