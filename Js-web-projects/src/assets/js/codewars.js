// Convert string to camel case

function toCamelCase(str){
    let newStr = "";
    if(str){
      let wordArr = str.split(/[-_]/g);
      for (let i in wordArr){
        if(i > 0){
          newStr += wordArr[i].charAt(0).toUpperCase() + wordArr[i].slice(1);
        }else{
          newStr += wordArr[i]
        }
      }
    }else{
      return newStr
    }
    return newStr;
  }
  toCamelCase();

  // console.log(toCamelCase("ww-we_d"));

// Sum of all arguments
function sum1(arg) {
  total = 0;
  for(var i in arguments){
    total += arguments[i];
  }
  return total
  
}
sum1()
// console.log(sum1(2,3,25,10));

// // Create Phone Number

// 1
// function createPhoneNumber(numbers){
//   var format = "(xxx) xxx-xxxx";
  
//   for(var i = 0; i < numbers.length; i++)
//   {
//     format = format.replace('x', numbers[i]);
//   }
  
//   return format; 
// }

// console.log(createPhoneNumber('1234567890'));
// // 2
// numbers = [1234567890]
// function createPhoneNumber(numbers){
//   numbers.unshift("(");
//   numbers.splice(4, 0, ")", " ");
//   numbers.splice(9, 0, "-");
//   return numbers.join("");
// }
// console.log(createPhoneNumber('1234567890'));
















// Learn Javascript

function getNameLength(name){
  return name.length
}
function nameInUpperCase(name){
  return name.toUpperCase();
}
function getLastCharacter(name){
  // const namele = name.length
  return name[name.length-1];
}


// console.log(getNameLength("Ravindra"));
console.log(getLastCharacter("RavindrD"));



