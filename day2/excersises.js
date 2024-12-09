//Q1. Capitalize First Letter of Each Word in a String:
javascript
function capitalizeWords(str) {
  return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

console.log(capitalizeWords('the quick brown fox')); // Output: The Quick Brown Fox


// Q2. Reverse a String:
const reverseString = (str) => str.split('').reverse().join('');

console.log(reverseString('hello')); // Output: 'olleh'

// Q3. Count Vowels in a String:
// javascript
function countVowels(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  return str.toLowerCase().split('').filter(char => vowels.includes(char)).length;
}

console.log(countVowels('JavaScript')); // Output: 3