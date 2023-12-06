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


function setZeroes(matrix) {
  // Get the number of rows and columns in the matrix
  const m = matrix.length;
  const n = matrix[0].length;

  // Create sets to store the indices of rows and columns that need to be set to zero
  const rowsToZero = new Set();
  const colsToZero = new Set();

  // Iterate through the matrix to find cells with value 0
  for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
          if (matrix[i][j] === 0) {
              // If a cell has value 0, add its row and column indices to the sets
              rowsToZero.add(i);
              colsToZero.add(j);
          }
      }
  }

  // Set entire rows to 0
  for (const row of rowsToZero) {
      for (let j = 0; j < n; j++) {
          matrix[row][j] = 0;
      }
  }

  // Set entire columns to 0
  for (const col of colsToZero) {
      for (let i = 0; i < m; i++) {
          matrix[i][col] = 0;
      }
  }

  // Return the modified matrix
  return matrix;
}

// Example usage:
const matrix = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1]
];

const result = setZeroes(matrix);
console.log("0000",result);
