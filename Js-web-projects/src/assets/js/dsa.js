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

console.log("Question => Find first missing positive number in array");

function findMissPostNum(n, arr){

  let setArry = new Set();

  for(let i =0 ; i < arr.length; i++){
    setArry.add(arr[i])
  }

  console.log(`Input array: ${arr}`);

  for(let i = 1; i < n+1; i++){
    if(!setArry.has(i)){
      // return i
      console.log(`The first missing positive number is: ${i}`);
      return
    }
  }
  // return undefined
    console.log(`There is no missing positive number.`);
}

// function firstMissingPositiveNum(n, arr) {
//   // Create a set to store seen numbers.
//   const seenNumbers = new Set();

//   // Add positive elements from the array to the set.
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//       seenNumbers.add(arr[i]);
//     }
//   }

//   // Print the input array
//   console.log(`Input array: ${arr}`);

//   // Check for missing numbers from 1 to n+1.
//   for (let i = 1; i <= n + 1; i++) {
//     if (!seenNumbers.has(i)) {
//       console.log(`The first missing positive number is: ${i}`);
//       return;
//     }
//   }

//   // No missing positive number found.
//   console.log(`There is no missing positive number.`);
// }

// Example usage
const n = 7;
const arr2 = [1, 2, 3,4, 5,];
console.log(findMissPostNum(n, arr2));

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

console.log("Question => Find Triplet with Maximum Sum in Unsorted Array");
function maxSumTriplet(n, arr2) {
 let maxTripletSum =0;
 for(let i =1; i < n-1; i++){
  let b = arr2[i]

  // find the max value which is less than b
  let maxA = 0;
  for( let j = i-1; j >=0; j --){
    if(arr2[j]<b){
      maxA = Math.max(arr2[j], maxA)
    }
  }

  // find the c which is greater than b
  let maxC = 0;
  for(let j = i+1; j < n ; j++ ){
    if(arr2[j] > b){
      maxC = Math.max(arr2[j], maxC)
    }
  }
  if(maxA > 0 && maxC > 0){
    let currentTripletSum = maxA + b + maxC
    if(currentTripletSum > maxTripletSum){
      maxTripletSum = currentTripletSum
    }
    
  }
  
 }

 return maxTripletSum

}
const n1 = 7; // length of array
const arr3 = [3, 7, 4, 2, 5, 7, 5];
const n3 = 4; // length of array
const arr4 = [5, 2, 4, 5];
const n2 = 3; // length of array
const arr5 = [3, 2, 1];
console.log(maxSumTriplet(n1 ,arr3));
console.log(maxSumTriplet(n3 ,arr4));
console.log(maxSumTriplet(n2 ,arr5));

console.log("Question => Merge Two Sorted Arrays");
/* 
function mergeSortedArray(m, nums1, n, nums2) {
  let i =0;
  let j =0;
  let k =0 ;

  let nums3 = new Array(m + n);

    while(i < m && j < n){
      if(nums1[i] < nums2[j]){
        nums3[k] = nums1[i];
        k++
        i++
      }else{
        nums3[k]= nums2[j];
        k++
        j++
      }
    }
    while(i<m){
      nums3[k] = nums1[i];;
      k++;
      i++
    }
    while(j<n){
      nums3[k] = nums2[j];;
      k++;
      j++
    }
    return nums3
}
const nums1 = [1, 2, 3];
const nums2 = [2, 5, 6];
const result3 = mergeSortedArray(3, nums1, 3, nums2);
console.log(result3); // Output: [1, 2, 2, 3, 5, 6]
*/

console.log("Question => You have two sorted lists of tasks: one sorted by priority and another sorted by deadline. You need to create a single schedule that merges both lists, ensuring tasks with higher priority and those with earlier deadlines are completed first.");
/* 
const tasksByPriority = [
  { name: 'Task A', priority: 'High' },
  { name: 'Task C', priority: 'Medium' },
  { name: 'Task E', priority: 'Medium' },
  { name: 'Task B', priority: 'Low' },
  { name: 'Task D', priority: 'Low' },
];
const tasksByDeadline = [
  { name: 'Task B', deadline: '2023-04-15' },
  { name: 'Task E', deadline: '2023-05-01' },
  { name: 'Task A', deadline: '2023-05-10' },
  { name: 'Task C', deadline: '2023-06-01' },
  { name: 'Task D', deadline: '2023-07-01' },
];

function sortedTaskList(n, taskPriority, m, taskDeadline){
  let i =0;
  let j = 0;
  let k = 0;

  let mergTaskArray = new Array(n + m)

  while(i < n && m < j){
    if(taskPriority[i] < taskDeadline[j]){
      mergTaskArray[k] = taskPriority[i];
      k++
      i++
    }else{
      mergTaskArray[k] = taskDeadline[j];
    }
  }

  while(i < n){
    mergTaskArray[k] = taskPriority[i];
    k++
    i++
  }

  while (j < m){
    mergTaskArray[k] = taskDeadline[j];
    k++
    j++
  }

  return mergTaskArray

}

const result4 = sortedTaskList(5,tasksByPriority, 5,tasksByDeadline)
console.log(result4);
*/
console.log("Problem Statement:=> You have two sorted contact lists from different applications—one sorted alphabetically by first name and another sorted by last name. You need to merge them into a single, unified contact list that maintains alphabetical order.");
/* 
const contactsByFirstName = [
  { firstName: 'Alice', lastName: 'Smith', email: 'alice@example.com' },
  { firstName: 'Bob', lastName: 'Jones', email: 'bob@example.com' },
  { firstName: 'Charlie', lastName: 'Williams', email: 'charlie@example.com' },
  { firstName: 'David', lastName: 'Brown', email: 'david@example.com' },
  { firstName: 'Eva', lastName: 'Davis', email: 'eva@example.com' },
];
const contactsByLastName = [
  { firstName: 'David', lastName: 'Brown', email: 'david@example.com' },
  { firstName: 'Eva', lastName: 'Davis', email: 'eva@example.com' },
  { firstName: 'Bob', lastName: 'Jones', email: 'bob@example.com' },
  { firstName: 'Alice', lastName: 'Smith', email: 'alice@example.com' },
  { firstName: 'Charlie', lastName: 'Williams', email: 'charlie@example.com' },
];

function sortByalphabetical(firstName, lastName){
  let i =0;
  let j = 0;
 

  let mergeFirstNameLastName = []

  while(i < firstName.length && j < lastName.length){
    const compareResult = firstName[i].firstName.localeCompare(lastName[j].lastName)

    if(compareResult< 0)  {
      mergeFirstNameLastName.push(firstName[i++])
    }else{
      mergeFirstNameLastName.push(lastName[j++])
    }

  }
  // 
  while( i < firstName.length){
    mergeFirstNameLastName.push(firstName[i++])
  }
  while( j < lastName.length){
    mergeFirstNameLastName.push(lastName[j++])
  }
// 

// OR  spread operator
// mergeFirstNameLastName.push(...firstName.slice(i), ...lastName.slice(j))


  return mergeFirstNameLastName

}

const result5 = sortByalphabetical(contactsByFirstName, contactsByLastName);
console.log(result5)
*/
console.log("Given a sorted array, remove the duplicates in-place, such that each element in the array appears at most twice, and return the new length.");

function removeDuplicatesFromSortedArrayII(n, nums) {
  let count = 1;
  let index = 1;

  for(let i = 1; i < n ;i++){
    if(nums[i] === nums[i-1] ){
      count ++
    }else{
      count = 1
    }

    if( count <= 2 ){
      nums[index++] = nums[i]      
    }
  }
  return {
    length : index,
    modifiedArray : nums.slice(0, index)
  }
}

const nums = [1, 1, 1, 2, 2, 3,3,3,4,4,4,5,8];
console.log(removeDuplicatesFromSortedArrayII(nums.length, nums));

// const length = removeDuplicatesFromSortedArrayII(nums.length, nums);
// console.log(`Original Array: [${nums.join(', ')}]`);
// console.log(`New Length: ${length}`);
// console.log(`Modified Array: [${nums.slice(0, length).join(', ')}]`);

/**
 DSA -3
 **/

 console.log("Question=> Find next larger element [Pattern Introduction]");

//  created function nextLargerElement name with two arguments n and arr. The n is represent to number of length of array. arr is the array.
//  create nGe empty array with the size(n) of the given array to store the  next larger element
//  filled it with -1 initialy that no larger number found yet
//  created the stack array to keep track of indices for potential to larger element update
//  created loop to iterate each element in arr
// stored the current value index[i] in the currentValue var
// created while loop as long as stack is not empty and currentValue is greater than top of stack element
// updated the nGe array at the index stored in the top of the stack with current value, indicating that the current element is the next larger element for that element
// then its pop the top index from the stack, as it found the larger next element.
// outer while loop pushed the current index i to the stack for potential future update.
// return the nGe

 function nextLargerElement(n, arr) {
  const nGe = new Array(n).fill(-1);
  const stack = []

  for( let i =0 ; i < n; i++){
    const currentValue = arr[i];
    while(stack.length >0 && currentValue > arr[stack[stack.length -1]]){
      nGe[stack[stack.length -1]] = currentValue;
      stack.pop()
    }
    stack.push(i)
  }

  return nGe

}
