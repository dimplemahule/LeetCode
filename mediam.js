//3. Longest Substring Without Repeating Characters

var lengthOfLongestSubstring = function(s) {
    let start = 0;
    let end = 0;
    let maxlen = 0;
    let countUnique = new Set()
    while(end<s.length){
        if(!countUnique.has(s[end])){
           countUnique.add(s[end]);
           end++;
           maxlen = Math.max(maxlen,countUnique.size)
        }else{
            countUnique.delete(s[start])
            start++
        }
    }
    return maxlen;
};

let s = "abcabcbb"
console.log(lengthOfLongestSubstring(s));