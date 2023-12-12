console.log("dsajs");
// DSA JS 1
// https://replit.com/@marshal4world/DSA-JS-Sept-23#index.js

// console.log(Given coordinates of a point (x,y) in 2D plane, find in which quadrant does this point lie.)
// coordinates is the fourth part x, -x, y, -y
function findQuadarnt(x, y) {
  if (x > 0 && y > 0) {
    return 1
  } else if (x < 0 && y > 0) {
    return 2
  } else if (x < 0 && y < 0) {
    return 3
  } else if (x > 0 && y < 0) {
    return 4
  }
}
console.log(
  "You are given a positive integer 'N'. You have to find the sum of first 'N' natural numbers."
)
// n = 1+2+3+4+5+6+7+8+9 = 55
// to get the nature sum we can refer our school days formula n*(n+1)/2 === js (n*(n+1)/2)
function naturalSum(n) {
  // 1
  //   const sum = (n + 1) * n
  //   const result = sum / 2
  //   return result;

  // 2
  //   sum = 0
  sum = (n * (n + 1)) / 2
  return sum
}
console.log('naturalSum', naturalSum(10))

function leapYearBasic(N) {
  if (N % 400 == 0) {
    return true
  } else if (N % 100 == 0) {
    return false
  } else if (N % 4 == 0) {
    return true
  } else {
    return false
  }
}

console.log('LeapYearBasic', leapYearBasic(1600))

// / TODO: Implement this method

const arr = [1, 3, 4, 5, 1, 9]
function findElement(n, arr, x) {
  for (let idx = 0; idx < n; idx++) {
    if (arr[idx] == n) {
      return x
    } else {
      return 0
    }
  }
}

console.log('Find an Element left most index', findElement())

// Find the Smallest Number

const array = [7, 2, 9, 1, 5, 3]
const findSmallNum = (array) => {
  if (array.length === 0) {
    return undefined
  }
  const sortArr = array.sort((a, b) => a - b)
  const smallNum = sortArr[0]

  return smallNum
}
console.log(findSmallNum(array))

function checkMagicSquare(n, matrix) {
  let base_sum

  for (let i = 0; i < n; i++) {
    // store the sum here to match the other column are equal
    base_sum += matrix[0][i]
  }
  let row_sum = 0
  let col_sum = 0
  let primery_diag_sum = 0
  let second_diag_sum = 0

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      // to use for row sum
      row_sum += matrix[i][j]
      // to use for col sum
      col_sum += matrix[j][i]

      if (i == j) {
        primery_diag_sum += matrix[i][j]
      }
      if (i + j == n - 1) {
        second_diag_sum += matrix[i][j]
      }
    }
    if (row_sum != base_sum || col_sum != base_sum) {
      return false
    }
    row_sum = 0
    col_sum = 0
  }
  if (primery_diag_sum != base_sum || second_diag_sum != base_sum) {
    return false
  }
  return true
}

console.log('2D array magic square box')

// 1. to cyclicRotation the created the function which takes three argument N= number of elements in the array, array = the array of element, K= the number of position to rotate the array
// 2. creted the blank rotatedArray array to store the rotated array
// 3. made the first loop starting from K (element ) to the end of the array ie N and the pushed to the rotatedArray array
// 4.took the another loop it start from 0 and until the i is less than k (arr of position)
//  this loop will iterate unit k -1 because in the frist loop we are iterating the arr till the k. pushed the element of index i of the input arr array to the rotatedArray
//  return the rotatedArray to get the function result

function cyclicRotation(N, arr1, K) {
  let rotatedArray = []
  for (let i = K; i < N; i++) {
    rotatedArray.push(arr1[i])
  }

  for (i = 0; i < K; i++) {
    rotatedArray.push(arr1[i])
  }
  return rotatedArray
}

const N = 5
let arr1 = [1, 2, 3, 4, 5]
const K = 2

const rotatedArr = cyclicRotation(N, arr1, K)

console.log('Cyclic Rotion', rotatedArr)
console.log('Cyclic Rotion 5', cyclicRotation(2, [1, 2, 3, 4, 5], 3))

console.log('Binary Search, Find the element, Search Target using O(logN')
/*
N: The number of elements in the array.
A: An array of sorted integers in which we want to search for the target value.
X: The target value we are searching for.
*/
function binarySearch(N, A, X) {
  let start = 0
  let end = N - 1

  while (start <= end) {
    let mid = Math.floor((start + end) / 2)

    if (A[mid] < X) {
      start = mid + 1
    } else if (A[mid] > X) {
      end = mid - 1
    } else {
      return mid
    }
  }

  return -1
}

console.log(
  'Given a string, count the total number of vowels present in that string.'
)

const isWovel = (ch) => {
  return (
    ch === 'A' ||
    ch === 'E' ||
    ch === 'O' ||
    ch === 'U' ||
    ch === 'I' ||
    ch === 'a' ||
    ch === 'e' ||
    ch === 'o' ||
    ch === 'u' ||
    ch === 'i'
  )
}
function countVowels(word) {
  let count = 0
  for (let i = 0; i < word.length; i++) {
    if (isWovel(word[i])) {
      count++
    }
  }
  if (count == 0) {
    return 0
  }
  return count
}

console.log(countVowels('q'))

// CyclicRatation
// 1. using if condition checking two condition, N is less than and equal to 1 || if K is a muliple of n, using modular operator
//  number of posion to rotate (k), the number of elements in the array N
// 2. Inside the condition if condtion is true  return arr3 (original input array) because there is no need to ratate.
// it means when array has 1 or fewer elements or whwn k is multiple of n there is no needed to rotation.
// 3. to calculate the effective numbers rotations I have took the var "rotations",  needed by taking the remainder (%) of K devided by N. This ensures that rotaion is the range [0, n-1] and reprents the number of position to rotate.
// 4. took the var firstPart and creating array new using arr3 slice method. it takes elements from begining of array index 0 but not included the index N- rotations. 
// 5. to rotate the become new begining after rotaion . I took var secondPart and create anothee new array using slice method. It start from input arr3 stating from index till N -rotations;
// 6. then I concat the secondPart with firstPart and stored in the roatedArray
// 7. to ge the result return the  roatedArray

// function cyclicRotation(N, arr3, K){
//     if( N <= 1 || K % N ===0){
//         return arr3
//     }
//     const rotations =  K % N
//     const firstPart = arr3.slice(0, N - rotations)
//     const secondPart = arr3.slice(N - rotations);

//     const roatedArray = secondPart.concat(firstPart)
//     return roatedArray


// }

// const n = 5;
// const arr11 = [1, 2, 3, 4, 5];
// const k = 2;

// console.log(cyclicRotation(n, arr11, k))

console.log("Question ==> Given a paragraph of words, capitalise the first character of each word and return the updated paragraph.");
// travers through the string
// check the it is already capital letter of starting word
// check the space before first Letter
// capital the no-sapce word first letter after space

// Logic
// for loop to travers the array
// condition operator
// string are mutable so we cant change it directly used here String fromcharcode charCodeAt method


// Code

function capitalise(paragraph) {
  let ans = "";
  for (let i = 0; i < paragraph.length; i++){
    if(i == 0 && paragraph[i] != ' ' && paragraph[i]>= 'a' && paragraph[i] <= 'z'){
        ans += String.fromCharCode(paragraph[i].charCodeAt()-32)

    }else if (i>0 && paragraph[i-1] == ' ' && paragraph[i] != ' ' && paragraph[i]>= 'a' && paragraph[i] <= 'z'){
        ans += String.fromCharCode(paragraph[i].charCodeAt()-32)

    }else{
        // keep the letters as it is 
        ans+= paragraph[i];
    }

  }
  return ans
}
console.log(capitalise("i am Working in lsdigital"));

console.log("Question ==> Given a string, count the total number of vowels present in that string.");

// 1. 
// 2. convert upper case or lowercase to the input
// 3. check isVowel using or not 

// const isVowel = (ch)=>{
//     // let ch = "Logicserve"
//     ch.toUpperCase();
//     return (ch === 'A' || ch === 'E' || ch === 'I'|| ch === 'O' || ch === 'U')
// }
// // console.log(isVowel("A"));

// const getCount = (str, n)=>{
//     if(n == 1){
//         return isVowel(n-1)
//     }
//     return getCount(str, n-1) + isVowel(str, n-1)
// }
// console.log("Get",getCount('Logicserve', 2));

// function greet() {
//     var message = "Hello, world!";
// }
// greet();
// console.log(message);

var num = "42";
var result = num + 2;
console.log(result);

var x = 3;
var result;
switch (x) {
    case 1:
        result = "One";
        break;
    case 2:
        result = "Two";
        break;
    default:
        result = "Other";
        break;
}
// console.log(result);
console.log("Question ==>  Print Matrix in Spiral Order");

function rotateImage(matrix) {
    let n = matrix.length
    for(let i =0; i < n; i ++ ){
        for (let j = i +1;  j < n; j++){
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
        }
    }

    for(let i =0; i < n; i++){
        matrix[i].reverse()
    }

    return matrix
}

// function rotateImage(matrix) {
//     const n = matrix.length;
  
//     // Transpose the matrix
//     for (let i = 0; i < n; i++) {
//       for (let j = i + 1; j < n; j++) {
//         [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
//       }
//     }
  
//     // Reverse each row
//     for (let i = 0; i < n; i++) {
//       matrix[i].reverse();
//     }
  
//     return matrix;
//   }
  
// const matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ];
  
//   const rotatedMatrix = rotateImage(matrix);
//   console.log(rotatedMatrix);

console.log("Increment number represented as array");
function incrementNumber(N, A) {
  A.reverse();

  let carry = 1;
  for(let i =0; i < A.length; i++){
      let sum = A[i] + carry;
      A[i] = sum%10;
      carry = Math.floor(sum/10)
  }

  if(carry){
    // A.unshift(carry)
      A.push(carry)
  }
  A.reverse()

  return A
}

console.log(incrementNumber(1, [1,3,9,9]));

console.log("Set Matrix Rows and Columns to Zero");
function setMatrixZeroes(matrix) {
  const m = matrix.length;
  const n = matrix[0].length;

  let firstRowZero = false;
  let firstColZero = false;

  // check the first row contains 0
  for(let j = 0; j < n; j++){
      if(matrix[0][j]===0){
          firstRowZero = true;
          break
      }
  }
  // check first column contains the 0
  for(let i =0; i < m; i++){
      if(matrix[i][0] ===0){
          firstColZero = true;
          break
      }
  }
  // mark zero in first row and column
  for(let i =1; i < m; i++){
      for(let j = 1; j < n; j++){
          if(matrix[i][j]===0){
              matrix[i][0] = 0;
              matrix[0][j] = 0
          }
      }
  }
  // set zeros in the entire matrix based on marked first row and column
  for(let i =1; i < m ; i++){
      for(let j =1; j <n ; j++){
          if(matrix[i][0] === 0 || matrix[0][j] === 0){
              matrix[i][j] = 0
          }
      }
  } 
  // Sets zeros in the first row if needd
  if(firstRowZero) {
      for(let j =0; j < n; j++){
          matrix[0][j] = 0
      }
  }
  // Sets zeros to the colulm if needed
  if(firstColZero){
      for(let i =0; i < m; i++){
          matrix[i][0] = 0
      }
  }
  return matrix
}



// Example usage:
const matrix = [
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5]
];

const resultz = setMatrixZeroes(matrix);
console.log(resultz);

let matrixN = [];
matrixN[0] = [1, 2, 3];
matrixN[1] = [4, 5];
matrixN[2] = [6, 7, 8, 9];
console.log(matrixN[1].length);


let matrix1 = [[1, 2], [3, 4]];
let transposedmatrix1 = Array.from({length: matrix1[0].length}, () => Array(matrix1.length).fill(0));
for (let i = 0; i < matrix1.length; i++) {
    for (let j = 0; j < matrix1[i].length; j++) {
        transposedmatrix1[j][i] = matrix1[i][j];
    }
}
console.log("Trans",transposedmatrix1[1][0]);


console.log("Question => Find if the string permutation can form a palindrome");



// function isPermutationPalidrome(s){
//   let freQuencyMap = new Map();

//   for(let i = 0; i < s.length; i++){
//       if(freQuencyMap.has(s[i])){
//           freQuencyMap.set(s[i], freQuencyMap.get(s[i])+1)
//       }else {
//           freQuencyMap.set(s[i], 1)
//       }
//   }
//   let oddFrquency = 0;

//   for( let [key, value] of freQuencyMap){
//       if(value % 2!=0){
//           oddFrquency = oddFrquency+1
//       }
//       if(oddFrquency > 1){
//           return false
//       }
//   }
//   return true
// }


// function isPermutationPalindrome(str){
//   // create a new map object to store the str each frequency

//   let frequencyMap = new Map();

//   // iterate the STR
//   for(let i =0 ; i < str.length; i++){
//       // now check if current charector is present the frequencyMap
//       if(frequencyMap.has(str[i])){
//         // if charector in present in the frequencyMap than increment the COUNT of that charector in the map by 1
//         frequencyMap.set(str[i], frequencyMap.get(str[1]) +1)
//       }else{
//         // if the charector is not present, it adds the charector to the map with the count of 1
//         frequencyMap.set(str[i], 1)
//       }
//   }

//   // get empty var to store the odd frequency
//   let oddFrequency = 0;
//   // iterate the loop over each key and value pair in the frequencyMap
//   for(let [key, value] of frequencyMap){
//     // check the charector value is odd
//     if(value % 2 != 0){
//       // if value is odd than it increament the oddFrequency value by 1
//       oddFrequency = oddFrequency +1
//     }
//     // if there are more than 1 oddFrequency charector in the string the return false
//     if(oddFrequency > 1){
//       return false
//     }
//   }

// return true

// }
// // Test cases
// const str1 = 'tactcoa';
// const str2 = 'tactco';
// const str3 = 'apple';

// console.log(`'${str1}' is a permutation of a palindrome: ${isPermutationPalindrome(str1)}`);
// console.log(`'${str2}' is a permutation of a palindrome: ${isPermutationPalindrome(str2)}`);
// console.log(`'${str3}' is a permutation of a palindrome: ${isPermutationPalindrome(str3)}`);


// console.log("Question => Reverse Order of Words in a String");
// function reverseWordsInString(str){
//   // temp var that will be used to store temporary individual word
//   let tempStr = "";
//   // to store the reversd word from temp var
//   let res = []; //stack
//   // to hold the eventully reversed string
//   let finalReesultInStr = ""
// // to append the space at the end of string. This is done for simplify the logic for identify the last world in the string
//   str = str + " ";

//   // iterating loop till str and checked current charector(str[i]) is not space. 
//   // if current charector has space than appended to the temStr
//   for ( let i =0; i < str.length; i++){
//     if(str[i]!= " "){
//       tempStr = tempStr + str[i]
//     }
//     // else need to check tempStr is not empty and current charector is space
//     else if (str[i] !="" && str[i] == " "){
//       // if the both condition are met, the tempStr add to the res array and empty the tempStr to store the another charector
//       res.push(tempStr);
//       tempStr = ""
//     }
//   }

//   // revers the order of word in the res Array
//   res.reverse();
//   // check the if res is empty return finalReesultInStr
//   if(res.length ==0){
//     return finalReesultInStr
//   }

//   // add the first element of the res array to the finalReesultInStr
//   finalReesultInStr = finalReesultInStr + res[0]

//   // iterate the over the remaining the res array. adding each element to the finalReesultInStr with a space before it

//   for(let i =1; i < res.length; i++){
//     finalReesultInStr = finalReesultInStr + " ";
//     finalReesultInStr = finalReesultInStr + res[i]
//   }
//   return finalReesultInStr
 
// }

// const str = "This is a sentence to be reversed.";
// const reversedStr = reverseWordsInString(str);
// console.log(`Original string: ${str}`);
// console.log(`Reversed string: ${reversedStr}`);

console.log("Question => Find Pair with Given Sum in Sorted Array");
// here we are using the two pointer approach
/* function twoSumInSortedArray(n, arr, target_sum) {
    let L =0, R = n-1;  
    while ( L<R){
        if(arr[L]+arr[R] > target_sum){
            R--;

        }else if(arr[L]+arr[R] < target_sum){
            L++

        }else{
            return true

        }
    } 
    return false
} */