console.log("Question ==> Find all the primes from 2 up to a given number.");
// function isPrime(num){
//     for(let i = 2; i < num; i++){
//         if(num % i === 0) return false     
        
//     }
//     return true
// }
// function upToNumber(num1){
//     const result = [];
//     while(num1 >= 2){
//         if(isPrime(num1)){
//             result.push(num1)
//         }
//         num1 --
//     }
//     return result
// }
// console.log(upToNumber(55).sort((a,b) => a- b));

console.log("Question ==> Use the Sieve of Eratosthenes to find all the primes from 2 up to a given number.");
function sieve(num){
    // to store the numbers
    const arr = []
    // to store the result in prime array
    const primes =[]
    count = 0
    // for loop to iterate the given numbers (num)
    for(let i =0 ; i <= num;i++){
        arr.push(i)
    }

    // for loop to iterate storeed arr untill last elelment, started with 2 because 0 and 1 is never prime
    for(let i = 2; i < arr.length; i++){
        // to hit trough every element off arr to check 
        if(arr[i] !== false){
            primes.push(arr[i]);
            // count ++ 
        }

        for(let j = i + i; j < arr.length; j += i){
            arr[j] = false
        }
    }
    
    return primes
    // return count
}
// console.log(sieve(10));


function primeNumbers(){
    const firstPrime = []
    function findFirstPrime(num){
     if(num < 2) return false

      for(let i = 2; i < num; i++){
        if(num % i === 0) return false
            firstPrime.push(i)
        }
        return firstPrime
      }
      console.log(findFirstPrime(5));
      
    //   function findPrimesUpto(num){
        
    //   }
  
}
primeNumbers()


