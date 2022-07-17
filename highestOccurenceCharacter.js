// Challenge 2 - change the function name
function highestOccurrenceCharacter(string) {
  const stringArray = string.toLowerCase().split("");
  const occurrence = {};

  const reducedArray = stringArray.reduce((array, element) => {
    let newElementEntry = occurrence.hasOwnProperty(element);
    !newElementEntry ? (occurrence[element] = 1) : (occurrence[element] += 1);
    return array;
  }, occurrence);

  const highestValue = Math.max(...Object.values(occurrence));

  const highestOccurrenceAlphabet = Object.keys(occurrence).find(
    (key) => occurrence[key] === highestValue
  );

  return highestOccurrenceAlphabet;

  // for (let element in result) {
  //   const valuesArray = Object.values(result);
  //   const newMaxValue = Math.max(...valuesArray);
  //   if (result[element] === newMaxValue) {
  //     return element;
  //   }
  // }
}

console.log(highestOccurrenceCharacter("kollomie"));
