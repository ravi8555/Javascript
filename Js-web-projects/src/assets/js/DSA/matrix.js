const printMtrix = [
  [10, 20, 30, 40, 21,],
  [11, 22, 33, 44, 32,],
  [50, 60, 70, 80, 41,],
  [55, 66, 77, 88, 51],
  [57, 67, 47, 38, 61],
  
];

function learnPrintMatrix(mtx){
  let n = mtx.length;
  let indices = []
  // const findx = mtx 
  const fColFindx = mtx[0][0] //10
  const sColTindex = mtx[1][2] // 33

  // corners
  const topLeft = mtx[0][0] // 10
  const topRight = mtx[0][n-1] // 40
  const bottomRight = mtx[n-1][n-1] // 88
  const bottomLeft = mtx[n-1][0] // 55

  // Rows
  const firstRow = []
  const firstRow1=[...mtx][0]
  const firstRow2=[]
  const secRow = []
  const ThiRow = []
  const FourthRow = []
  const FourthRow1 = []
  const lastRow = []

  // Coulmns
  const col1 = []
  const col2 = []
  const col3 = []
  const col4 = []
  const col41 = []

  // Diagonal
  let pMidD = [];
  let sMidD = [];
  const secondaryDfBottom = []
  const primeryDfBottom =[]

  let sumP = 0
  let sumS = 0


  for(let i =0 ; i < n; i++){

    // first Row
    firstRow.push(mtx[0][i]) 
    firstRow2.push(mtx[n-4][i]) 
    // Second Row
    secRow.push(mtx[1][i]);
    // Third Row
    ThiRow.push(mtx[2][i])
    // FourthRow
    FourthRow.push(mtx[3][i]);
    lastRow.push(mtx[n-1][i]);

    

    // firstCol
    col1.push(mtx[i][0])
    // secondCol
    col2.push(mtx[i][1])    
    // column 4
    col4.push(mtx[i][n-1])
    col41.push(mtx[i][3])
    
    // Diaogoanl

    /* these are the elements where the row index and column index are the same.
    // So, when i is 0, mtx[i][i] is mtx[0][0], which is the first element of the primary diagonal. When i is 1, mtx[i][i] is mtx[1][1], and so on. This way, you traverse the primary diagonal of the matrix. */
    pMidD.push(mtx[i][i])

    // secondery Diaogonal
    sMidD.push(mtx[i][n-i-1])

    // Diagoanl start from bottom left to top right
    secondaryDfBottom.push(mtx[n-i-1][i]) //[57, 66, 70, 44, 21
    
    // Diagoanl start from bottom right to top left
    // primeryDfBottom.push(mtx[i][n - i - 1])
    primeryDfBottom.push(mtx[n-i-1][n-i-1])
    // console.log(indices.push([n-i-1][n-i-1]));
    
    // add sum primery Diaogonal
    // sumP += mtx[i][i];

    // add sum secondary Diaogonal
    // sumS+=mtx[i][n-i-1]

    // Skiping the middle same number to add in secondary Diaogonal
    // not equal to even matrix 5x5 
    // if(i !== Math.floor(n/2) ){
    //   sumS += mtx[i][n-i-1]
    //   sMidD.push(mtx[i][n-i-1])
    // }
    // return

  } 
  return [
    // fColFindx,
    // sColTindex,

   // Corners
    /* topLeft,
    topRight,
    bottomRight,
    bottomLeft, */

    /* Rows*/
    // firstRow,
    // firstRow1,
    // firstRow2,
    // secRow,
    // ThiRow,
    // FourthRow,
    // FourthRow1,
    // lastRow,
    

    // Coulmns 
    // col1,
    // col2,
    // col4,
    // col41,

    // pMidD,
    // sMidD,
    // secondaryDfBottom,
    primeryDfBottom,
    // totalSum,
    // sumP,
    // sumS,
    // sMidD,
    // sumP + sumS
    // last
  ]
}

// console.log(learnPrintMatrix(printMtrix));
// print matrix 
// function printMatrix(size) {
//     for (let i = 0; i < size; i++) {
//       let row = "";
//       for (let j = 0; j < i; j++) {
//         row += "x";
//       }
//       console.log(row);
//     }
// }
// console.log("printMatrix");  
// printMatrix(5); 
  
// function printSquareMatrix(size) {
//     for (let i = 0; i < size; i++) {
//       let row = "";
//       for (let j = 0; j < size; j++) {
//         row += "x";
//       }
//       console.log("printSquareMatrix",row);
//     }
//   }
//   // Call the function directly without wrapping it in console.log
//   printSquareMatrix(5);

 


  
//   function printFirstRowandColumn(matrix){
//     const row = matrix.length;
//     const columns = matrix[0].length;
  
//     let firstRow = "";
//     for(let j =0; j< columns;j++){
//       firstRow+= matrix[0][j]
//     }
//     console.log(firstRow);
  
//     let firstColumn = "";
//     for(let i = 0; i <row; i++){
//       firstColumn += matrix[i][0]
//     }
//     console.log(firstColumn);   
    
//   }
//   const matrix = [
//     [1, 2, 3, 7],
//     [4, 5, 6, 10],
//     [7, 8, 9, 11],
//     [4, 8, 9, 12]
//   ];
//   console.log("printFirstRowandColumn");
//   printFirstRowandColumn(matrix)

//   function findDiagonalofMtx(mx){
//     const mtrxlength = mx.length;
//     let Primediagonal = [];
//     let seconderYDigonal = [];
  
//     for(let i = 0; i <mtrxlength; i++){
//         Primediagonal += mx[i][i],
//         seconderYDigonal +=mx[i][mtrxlength -1 -i]
//     }
//     console.log("seconderYDigonal =>",seconderYDigonal);
//     console.log("Primediagonal =>",Primediagonal);
    
//   }
//   const mtx1 = [
//     [1, 2, 3,],
//     [4, 5, 6],
//     [7, 5, 9]
//   ];
//   console.log("findDiagonalofMtx");
//   findDiagonalofMtx(mtx1);

//   // addition2Array
// function addionMatrix(mx1, mx2){
//     // initialize result empty array to store the result
//     let result = []
//       for(let i = 0; i< mx1.length; i++){
//         // initialize the row
//         let row = [];
//         for(let j =0; j< mx1[0].length;j++){
//           row.push(mx1[i][j] + mx2[i][j])
//         }
//         result.push(row)
//       }
//       return result
//   }
//   let matrix1 = [[1,2,3,4],[1,2,3,4]]
//   let matrix2 = [[1,2,3,3],[1,5,3,4]]
//   console.log("addionMatrix",addionMatrix(matrix1,matrix2));


// console.log("Question =>return the sum of the matrix diagonals. secondary diagonal that are not part of the primary diagonal.");
// function diagonalsSum(matrix){
//     let n = matrix.length;
//     let sum = 0;

//     for(let i =0; i< n; i++){
//         // printing primary diagonal to sum
//         sum += matrix[i][i]

//         // printing secondary diagonal to sum
//         // Add secondary diagonal element if it's not the same as the primary diagonal element
//         if(i !== n - 1 -i){
//             sum += matrix[i][n- 1 -i]
//         }

//     }

//     return sum
// }
// console.log(diagonalsSum(mtx1));

// function diagonalsSum1(matrix){
//     let n = matrix.length;
//     let Primediagonal = 0;
//     let seconderYDigonal = 0
    
//     for(let i =0; i< n; i++){
//         // printing primary diagonal to sum
//         Primediagonal += matrix[i][i]
//         // printing secondary diagonal to sum
//         seconderYDigonal += matrix[i][n- 1 -i]       
        
//     }
//     // If n is odd, subtract the middle element which was counted twice
//     if (n % 2 !== 0) {
//         Primediagonal -= mtx1[Math.floor(n / 2)][Math.floor(n / 2)];
//     }
    
//     return Primediagonal + seconderYDigonal;
// }

// console.log(diagonalsSum1(mtx1));

// console.log("Question => PascalsTriangle Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.Pascal’s triangle is a pattern in which a number in a row b, is the sum of the number exactly above it a, and the number to the left of a, c.");

// function pascalsTriangle(n) {
//   // make a 2dList of intinger pascal array
//   const pascal = []
// // running loop for every row till n-1
//   for(let row =1; row <=n ; row++){
//     // get the previous list of intinger from pascal 
//     const prev = (row === 1) ? [] : pascal[pascal.length -1]

//     // make 1D list of initigers current
//     const curr = []

//     // run the for loop for every coulmns [0-row-1]
//     for(let col = 0 ; col <=row-1; col ++){
//       // add value as a pascal previous row's col's index
//       const x= col>= pascal.length ? 0 :prev[col];

//       // and add col-1 nth index in the previous array
//       const y = col-1<0?0 : prev[col-1]

//       if(row === 1){
//         curr.push(1)
//       }
//       else{
//         curr.push(x+y)
//       }

//     }
//     // add the 1st list current in 2-d list pascal
//     pascal.push(curr)

//   }
//   return pascal
// }
// // console.log(pascalsTriangle(5));


// function pascalsTriangle1(n) {
// // create matrix MAT array of aary with 1
//   let mat = [[1]];
// // creating Row using loop till n
//   for(let i =1; i <n;i++){
//     // push the empty array in the  matrix MAT
//     mat.push([]); // [[1] []]
//     // creating column go till i index, ie <= jth column
//     for(let j =0; j <=i; j++){
      
//       // i = 1 above assigned and j=0 hence [1(i) - 1 = 0] [0][1] && [0(i-1)][-1(0-0)] there for it is false first time excuite else
//       // push MAT[i] mat[i-1][j]&& mat[i-1][j-1]
//       // else mat[i] push 1
//       // return MAT
//       if(mat[i-1][j] && mat[i-1][j-1]){
//         mat[i].push( mat[i-1][j] + mat[i-1][j-1])
//       }else{
//         mat[i].push( 1 )
//       }
      
//     }
//   }
//   return mat
// }

// console.log( pascalsTriangle1(5));

// function sumSqrDigit(n){
//   let sumsquareDigit = 0;

//   while(n > 0){
//      let currentDigit = n %10 ;
//      sumsquareDigit += (currentDigit * currentDigit);
//      n = Math.floor(n/10)
//   } 

//   return sumsquareDigit
// }
// console.log(sumSqrDigit(25));

// function happyNumber(n){
//   let prevDigitSet = new Set();

//   n= Math.abs(n)

//   while( n != 1){
//     prevDigitSet.add(n);

//     n= sumSqrDigit(n);

//     if(prevDigitSet.has(n)){
//       return false
//     }
//   }
//   return true

// }

// console.log(happyNumber(13));
// console.log("Question => Given a column title as it appears in an Excel sheet, return its corresponding column number.");


// function excelSheetColumnNumber(s){
//   //declare the var to store the Answer 
//   let ans = 0;

//   // run a loop over all the charector ch from string
//   for( let ch of s){

//     // set map  integer ch charCodeAt(0) -64 (the A chnarector value unocorn[ASCII  code] value is 65), so here we are pointing value as 0 position, 1 = A, B(second posiotion) = 2 so on...
//     let map = ch.charCodeAt(0) -64;

//     // Update the ans as ans * 26
//     // (why is 26 , 1 stand for A, B stand for 2, 26 stand for Z)

//     ans = ans * 26;

//     // add value to map;
//     ans+= map;

//   }

//   return ans

// }

// console.log(excelSheetColumnNumber("AA"));

// console.log("Question ==> MathProfessor, The names of the students in his class are given as an array of strings. Another string, B, is given, consisting of lowercase English letters. For each name in the array of strings, he wants to calculate the number of unique letters from string B that appear in that name (not including duplicates).");
// /*
// Above problem statement we have to count the unique charector which is present in B and A is the name of Students, Match B with A and set it on visited

// 1) we have to create match function to correctly handles counting unique common characters.
// 2) we have to ceate The mathProfessor function for correctly iterates over the names and stores the results.
// */


// // creting match function with 2 parameter A B mathProfessor
// function match(A, B){
//   // create a set of visited charector
//   const visited = new Set();

//   // run loop over all charector ch from A;
//   for(const ch of A){
//     // store them to the visited using add method
//     visited.add(ch);
//   }

//   // store the count initilized the count with 0
//   let count = 0

//   // loop overall charector ch from B
//   for(const ch of B){
//     //  if the that charector is present in my map using has method
//     if(visited.has(ch)){
//       // add to count (increment)
//       count ++
//       // remove the duplicate from set
//       visited.delete(ch)
//     }
//   }

//   return count
// }
// function mathProfessor(n, a, B){
//   // create a array of intgersto store the result

//   const result = []; 
//   // run the loop over all string A in the array a
//   for (let index = 0; index < n; index++){
//     // to hold the value of current index
//     const A=a[index];

//     // get the matching count from the match function;

//     const count = match(A, B);

//     // store count in the result array at the same index
//     result[index] = count
//   } 

//   // return the result
//   return result

// }

// let strA = "Ravindra, kavita, Advait";
// const strB = "avi"
// console.log(mathProfessor(4, strA));

console.log("Question ==> SecretAgentII, Rahul works as a secret agent. So, he decided to reverse all the words in the message which have an odd length. Print the final message which he will be sending to his teammates.");


// In above problem statement we are using two pointer approach with only reserse the odd number only
// 1. create function to reverse a portion of an array or string in-place.

// 2. create function for update the result with reverse words

//  create function with 3 parameter result, left_start, right_end
// result store the string (left_start index(inplace) right_end(inplace))
function reverse(result, left_start, right_end){
// run a while loop until start is less than end
while(left_start < right_end){
// inside the loop  create temp var to store the left_start index result[left_start]
const temp = result[left_start];
// move the left index to right result[left_start] = result[right_end];
result[left_start] = result[right_end];

// assign right_end index value to temp result[right_end] = temp TO swap right to left
result[right_end] = temp

// increment left_start by 1 to move toward the middle
left_start ++
// decrement the right_end by 1 (--) moving towards the middle of section reverse
right_end --
  }
}
// let result = ['Ravindra', 'Dhadave', 'full', 'Atamaram', 'is']; // Original array
// let left_start = 1; // Index of 'b'
// let right_end = 3;  // Index of 'd'
// reverse(result, left_start, right_end)

// console.log(result);
// create function secret agent

function secretAgent(s){
// covert the input string into array using split method and store it in result
const result = s.split(' ');

// set the two pointer position with 0
let left_start = 0;
let right_end = 0

// run a loop untill start is less than s input
while(left_start < s.length){
  // set a end as start

  right_end = left_start

  // run while loon the end is not less than strings length and charector is not equal to sapce. result we have split in charactor result[end] !== " "
  while(right_end < s.length && result[right_end] != " "){
    // increment the end by 1
    right_end ++
  } 

  // calculate the length as (end -start)
  let length = right_end -left_start;

  // check if the length is odd
  if(length %2 != 0){
    // CALL the reverse function on the portion (start, end-1)
    reverse(result, left_start, right_end -1)
  }
  // set the start as end +1
  left_start = right_end + 1
}
// return result as a string 
return result.join(' ')
}
// secretAgent(result)
console.log(secretAgent("One, two"));






