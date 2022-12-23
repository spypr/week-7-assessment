const addToZero = (addToArray) => {
  let addTo = false;
  for (let i = 0; i < addToArray.length; i++) {
    for (let j = 0; j < addToArray.length; j++) {
      if (addToArray[i] + addToArray[j] === 0) {
        addTo = true;
        return addTo;
      } else addTo = false;
    }
  }
  return addTo;
};

// console.log(addToZero([1, 4, 5, 45, 100, -100]));
// console.log(addToZero([1, 4, 5, 45, 100]));

// time 0(n^2)
// space 0(1)

const hasUniqueChars = (chars) => {
  let newChars = new Set([]);
  for (let i = 0; i < chars.length; i++) {
    newChars.add(chars[i]);
  }

  return newChars.size === chars.length;
};

// console.log(hasUniqueChars("monday"));
// console.log(hasUniqueChars("moonday"));

// time O(n)
// space O(n)

const isPangram = (pangram) => {
  let pangramabet = /([a-z])(?!.*\1)/g;
  let lowerPangram = pangram.toLowerCase();
  let pangrams = lowerPangram.match(pangramabet);
  if (pangrams.length === 26) {
    return true;
  } else return false;
};

// console.log(isPangram("The quick brown fox jumps over the lazy dog!"));
// console.log(isPangram("The quick brown fox jumps over the lazy og!"));

// time O(n)
// space O(n)

const longestWord = (wordArray) => {
  let wordLongest = 0;
  for (let i = 0; i < wordArray.length; i++) {
    if (wordArray[i].length > wordLongest) {
      wordLongest = wordArray[i].length;
    }
  }
  return wordLongest;
};

console.log(longestWord(["hi", "hello"]));

// time O(n)
// space O(n)
