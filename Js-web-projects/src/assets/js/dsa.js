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

const isVowel = (ch)=>{
    ch.toUpperCase();
    return (ch === 'A' || ch === 'E' || ch === 'O'|| ch === 'U' || ch === 'E')
}
const getCount = (str, n)=>{
    if(n == 1){
        return isVowel(n-1)
    }
    return getCount(str, n-1) + isVowel(str, n-1)
}
console.log(getCount('Logicserve', 2));
