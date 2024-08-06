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
//   for(let row =1; row <n ; row++){
//     // get the previous list of intinger from pascal 
//     const prev = (row === 1 ? [] : pascal[pascal.length -1])

//     // make 1D list of initigers current
//     const curr = []

//     // run the for loop for every coulmns [0-row-1]
//     for(col = 0 ; col <=row-1; col ++){
//       // add value as a pascal previous row's col's index
//       const x= col>= pascal.length ? 0 :prev[col];

//       // and add col-1 nth index in the previous array
//       const y = col-1<0?0 : prev[col-1]

//       if(row ===1){
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
// // console.log(pascalsTriangle(6));


function printNum(matrix){
  const n = matrix.length;
  // const fColFRow = matrix[0][0]
  const fColFRow3 = matrix[n-1][n-1]
  const fColFRow4 = matrix[3][3]
  const flatMatrix = matrix.flat();
  const fColFRow6 = flatMatrix[flatMatrix.length - 1];
  const fColFRow5 = matrix[n-1].pop() // Access the element directly or keep it below because
  
  // const fColFRow1 = matrix[n-1][0]
  // const fColFRow2 = matrix[n-2][n-3]
  // const fColTRow = matrix[0][2]
  // const fColTRow1 = matrix[0][n-2]
  // const TcolSRow = matrix[2][1]
  // const lastCol = matrix[n-1][n-1]

  // let fRow = []
  // let fCol = []

  // for(let i =0; i <n; i++){
     
  //   fRow += matrix[i]
  //   fCol += matrix[i][n-2]
  // }
  // return {fRow, fCol }
  return [
    fColFRow3,
    fColFRow4,
    fColFRow5,
    fColFRow6,
    // lastCol
    // fColFRow,
    // fColFRow1, 
    // fColFRow2,
    // fColFRow
    // fColTRow, 
    // fColTRow1, 
    // TcolSRow, 
    // TcolSRow1
  ]
}
const printMtrix = [
  [10, 20, 30, 40],
  [11, 22, 33, 44],
  [50, 60, 70, 80],
  [55, 66, 77, 88]
];
console.log("printNum",printNum(printMtrix) );

function printDiagonal(mtx){
  let n = mtx.length;
  const primeD = mtx[0][0]
  const lastD = mtx[n-1][n-1]
  let midD = []
  // for(let i =0 ; i < n; i++){
  //   midD.push(mtx[i][i])
  // } 
  return [lastD]
}

console.log(printDiagonal(printMtrix));



