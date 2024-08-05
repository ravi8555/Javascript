// print matrix 
function printMatrix(size) {
    for (let i = 0; i < size; i++) {
      let row = "";
      for (let j = 0; j < i; j++) {
        row += "x";
      }
      console.log(row);
    }
}
console.log("printMatrix");  
printMatrix(5); 
  
  function printSquareMatrix(size) {
    for (let i = 0; i < size; i++) {
      let row = "";
      for (let j = 0; j < size; j++) {
        row += "x";
      }
      console.log("printSquareMatrix",row);
    }
  }
  // Call the function directly without wrapping it in console.log
  printSquareMatrix(5);
  
  function printFirstRowandColumn(matrix){
    const row = matrix.length;
    const columns = matrix[0].length;
  
    let firstRow = "";
    for(let j =0; j< columns;j++){
      firstRow+= matrix[0][j]
    }
    console.log(firstRow);
  
    let firstColumn = "";
    for(let i = 0; i <row; i++){
      firstColumn += matrix[i][0]
    }
    console.log(firstColumn);   
    
  }
  const matrix = [
    [1, 2, 3, 7],
    [4, 5, 6, 10],
    [7, 8, 9, 11],
    [4, 8, 9, 12]
  ];
  console.log("printFirstRowandColumn");
  printFirstRowandColumn(matrix)

  function findDiagonalofMtx(mx){
    const mtrxlength = mx.length;
    let Primediagonal = [];
    let seconderYDigonal = [];
  
    for(let i = 0; i <mtrxlength; i++){
        Primediagonal += mx[i][i],
        seconderYDigonal +=mx[i][mtrxlength -1 -i]
    }
    console.log("seconderYDigonal =>",seconderYDigonal);
    console.log("Primediagonal =>",Primediagonal);
    
  }
  const mtx1 = [
    [5, 2, 3,],
    [4, 5, 6],
    [7, 5, 9]
  ];
  console.log("findDiagonalofMtx");
  findDiagonalofMtx(mtx1);

  // addition2Array
function addionMatrix(mx1, mx2){
    // initialize result empty array to store the result
    let result = []
      for(let i = 0; i< mx1.length; i++){
        // initialize the row
        let row = [];
        for(let j =0; j< mx1[0].length;j++){
          row.push(mx1[i][j] + mx2[i][j])
        }
        result.push(row)
      }
      return result
  }
  let matrix1 = [[1,2,3,4],[1,2,3,4]]
  let matrix2 = [[1,2,3,3],[1,5,3,4]]
  console.log("addionMatrix",addionMatrix(matrix1,matrix2));


console.log("Question =>return the sum of the matrix diagonals. secondary diagonal that are not part of the primary diagonal.");
function diagonalsSum(matrix){
    let n = matrix.length;
    let sum = 0;

    for(let i =0; i< n; i++){
        // printing primary diagonal to sum
        sum += matrix[i][i]

        // printing secondary diagonal to sum
        // Add secondary diagonal element if it's not the same as the primary diagonal element
        if(i !== n - 1 -i){
            sum += matrix[i][n- 1 -i]
        }

    }

    return sum
}
console.log(diagonalsSum(mtx1));

function diagonalsSum1(matrix){
    let n = matrix.length;
    let Primediagonal = 0;
    let seconderYDigonal = 0
    
    for(let i =0; i< n; i++){
        // printing primary diagonal to sum
        Primediagonal += matrix[i][i]
        // printing secondary diagonal to sum
        seconderYDigonal += matrix[i][n- 1 -i]       
        
    }
    // If n is odd, subtract the middle element which was counted twice
    if (n % 2 !== 0) {
        Primediagonal -= mtx1[Math.floor(n / 2)][Math.floor(n / 2)];
    }
    
    return Primediagonal + seconderYDigonal;
}

console.log(diagonalsSum1(mtx1));