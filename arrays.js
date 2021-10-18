'use strict';
let array = ['berry', 'banana', 'cherry']
let arrayNum = [1, 30, 4, 21, 100000]

// 1. printIndices
function printIndices(items) {
  // Replace this with your code
  for(let i = 0; i < items.length; i++){
    console.log(`${items[i]} ${i}`);
  }
}

// 2. everyOtherItem
function everyOtherItem(items) {
  const everyOther = [];

  for(let i=0; i < items.length; i++) {
    if (i % 2 === 1) {
      everyOther.push(items[i]);
    }
  }

  return everyOther;
}

// 3. smallestNItems
function smallestNItems(items, n) {
  // Replace this with your code
  let sortedItems = items.sort((a, b) => {
    return a - b;
    });
  let sortedNItems = sortedItems.slice(0, n);
  let reversedItems = sortedNItems.reverse();

  console.log(reversedItems);

}
