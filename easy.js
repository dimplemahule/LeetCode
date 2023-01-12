//9. Palindrome Number

var isPalindrome = function(x) {
    //only positive number handled
    // let i=0
    // let j=x.lenght-1;
    // while(i<j){
    //     if(x[i]!=x[j]){
    //         return false;
    //     }else{
    //         i++;
    //         j--;
    //     }
    // }
    // return true;
//Both are handled in this case
    if(x<0){
        return false
    }
    let rev = 0
    for(let i=x;i>0;i=Math.floor(i/10)){
        rev = rev * 10 + i % 10
    }
    return rev === x


};
let x = 121

console.log(isPalindrome(x))