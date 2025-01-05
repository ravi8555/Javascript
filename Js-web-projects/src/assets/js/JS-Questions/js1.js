console.log("Question ===>  Check for occurence of substring");
/* You are given a string str and a substring of that string k as arguments.
Find the index of the first occurrence of that substring in the actual string
Find the index of the last occurrence of that substring in the actual string.
If both these indexes are the same, then return true. Otherwise, return false. */
function  checkForSubstr(str, k){
    if(str.indexOf(k) === str.lastIndexOf(k)){       
        return true
    }else{
        return false
    }
}
console.log(checkForSubstr("Next time there won't be a next time", "time"));

