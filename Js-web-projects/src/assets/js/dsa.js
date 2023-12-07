console.log("dsajs");
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

function cyclicRotation(N, arr3, K){
    if( N <= 1 || K % N ===0){
        return arr3
    }
    const rotations =  K % N
    const firstPart = arr3.slice(0, N - rotations)
    const secondPart = arr3.slice(N - rotations);

    const roatedArray = secondPart.concat(firstPart)
    return roatedArray


}

const n = 5;
const arr = [1, 2, 3, 4, 5];
const k = 2;

console.log(cyclicRotation(n, arr, k))

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
console.log("Question ==>  generate a square matrix filled with elements from 1 to A*A in spiral order. The spiral order will be clockwise in nature starting from (0,0)");

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

function setZeroes(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;

    let firstRowZero = false;
    let firstColZero = false;

    // Check if the first row contains a zero
    for (let j = 0; j < n; j++) {
        if (matrix[0][j] === 0) {
            firstRowZero = true;
            break;
        }
    }

    // Check if the first column contains a zero
    for (let i = 0; i < m; i++) {
        if (matrix[i][0] === 0) {
            firstColZero = true;
            break;
        }
    }

    // Mark zeros in the first row and column based on the rest of the matrix
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }

    // Set zeros in the entire matrix based on marks in the first row and column
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;
            }
        }
    }

    // Set zeros in the first row if needed
    if (firstRowZero) {
        for (let j = 0; j < n; j++) {
            matrix[0][j] = 0;
        }
    }

    // Set zeros in the first column if needed
    if (firstColZero) {
        for (let i = 0; i < m; i++) {
            matrix[i][0] = 0;
        }
    }

    return matrix;
}

// Example usage:
const matrix = [
    [0, 1, 2, 0],
    [3, 4, 5, 2],
    [1, 3, 1, 5]
];

const resultz = setZeroes(matrix);
console.log(resultz);

  
  