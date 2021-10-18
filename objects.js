'use strict';
let phrase = "I like chocolate and I like pickles";
// 1. countWords
function countWords(phrase) {
  // Replace this with your code
  const words = {};
  
  for(const word of phrase.split(' ')) {
    if(words[word]) {
      words[word] += 1;
    } else{ 
      words[word] = 1;
    }
  }
  return words;
}

// 2. getMelonsAtPrice
function getMelonsAtPrice(price) {
  const melonPrices = {
    2.50: ['Canteloupe', 'Honedew'],
    2.95: ['Watermelon'],
    3.25: ['Crenshaw', 'Muskmelon'],
    14.25: ['Christmas']
  };

  if (!melonPrices.hasOwnProperty(price)) {
    return;
  }
  return melonPrices[price].sort();
}
