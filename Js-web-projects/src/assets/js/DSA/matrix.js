const printMtrix = [
  [10, 20, 30, 40, 21,],
  [11, 22, 33, 44, 32,],
  [50, 60, 70, 80, 41,],
  [55, 66, 77, 88, 51],
  [55, 66, 77, 88, 61],
  
];

function learnPrintMatrix(mtx){
  let n = mtx.length;
  // const findx = mtx 
  const fColFindx = mtx[0][0] //10
  const sColTindex = mtx[1][2] // 33

  // corners
  const topLeft = mtx[0][0] // 10
  const topRight = mtx[0][n-1] // 40
  const bottomLeft = mtx[n-1][0] // 55
  const bottomRight = mtx[n-1][n-1] // 88

  // Rows
  const firstRow = []
  const firstRow1=[...mtx][0]
  const firstRow2=[]
  const secRow = []
  const ThiRow = []
  const FourthRow = []
  const FourthRow1 = []

  // Coulmns
  const col1 = []
  const col2 = []
  const col3 = []
  const col4 = []
  const col41 = []

  // Diagonal
  let pMidD = [];
  let sMidD = [];

  let sumP = 0
  let sumS = 0


  for(let i =0 ; i < n; i++){

    // first Row
    firstRow.push(mtx[0][i]) 
    firstRow2.push(mtx[n-4][i]) 
    // // Second Row
    // secRow.push(mtx[1][i]);
    // // Third Row
    // ThiRow.push(mtx[2][i])
    // // FourthRow
    FourthRow.push(mtx[3][i]);
    FourthRow1.push(mtx[n-1][i]);

    // firstCol
    // col1.push(mtx[i][0])
    // // secondCol
    // col2.push(mtx[i][1])    
    // column 4
    // col4.push(mtx[i][n-1])
    // col41.push(mtx[i][3])




    /* these are the elements where the row index and column index are the same.
    // So, when i is 0, mtx[i][i] is mtx[0][0], which is the first element of the primary diagonal. When i is 1, mtx[i][i] is mtx[1][1], and so on. This way, you traverse the primary diagonal of the matrix. */
    // pMidD.push(mtx[i][i])

    // secondery Diaogonal
    // sMidD.push(mtx[i][n-i-1])
    
    // add sum primery Diaogonal
    sumP += mtx[i][i];

    // add sum secondary Diaogonal
    sumS+=mtx[i][n-i-1]

    // Skiping the middle same number to add in secondary Diaogonal
    // not equal to even matrix 5x5 
    if(i !== Math.floor(n/2) ){
      sumS += mtx[i][n-i-1]
      sMidD.push(mtx[i][n-i-1])
    }
    // return

  } 
  return [
    // fColFindx,
    // sColTindex,

    /* // Corners
    topLeft,
    topRight,
    bottomRight,
    bottomLeft,*/

    /* Rows*/
    // firstRow,
    // firstRow1,
    // firstRow2,
    // secRow,
    // ThiRow,
    // FourthRow,
    

    // Coulmns 
    // col1,
    // col2,
    // col4,
    // col41,

    // pMidD,
    // sMidD,
    // totalSum,
    // sumP,
    // sumS,
    sMidD,

    sumP + sumS
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

function pascalsTriangle(n) {
  // make a 2dList of intinger pascal array
  const pascal = []
// running loop for every row till n-1
  for(let row =1; row <=n ; row++){
    // get the previous list of intinger from pascal 
    const prev = (row === 1) ? [] : pascal[pascal.length -1]

    // make 1D list of initigers current
    const curr = []

    // run the for loop for every coulmns [0-row-1]
    for(let col = 0 ; col <=row-1; col ++){
      // add value as a pascal previous row's col's index
      const x= col>= pascal.length ? 0 :prev[col];

      // and add col-1 nth index in the previous array
      const y = col-1<0?0 : prev[col-1]

      if(row === 1){
        curr.push(1)
      }
      else{
        curr.push(x+y)
      }

    }
    // add the 1st list current in 2-d list pascal
    pascal.push(curr)

  }
  return pascal
}
console.log(pascalsTriangle(5));









