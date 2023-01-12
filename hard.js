//10. Regular Expression Matching


var isMatch = function(s, p) {
    //Find the length of both 
    var lenS = s.length;
    var lenP = p.length;

    //declare blank map 
    var map = {};
  
    return check(0, 0);
  //creating function for checking purpose
    function check(i, j) {
      if (map[i + ':' + j] !== undefined) return map[i + ':' + j];
      if (i > lenS) return false;
      if (i === lenS && j === lenP) return true;
  
      if (p[j] === '.' || p[j] === s[i]) {
        map[i + ':' + j] = p[j + 1] === '*' ?
          check(i + 1, j) || check(i, j + 2) :
          check(i + 1, j + 1);
      } else {
        map[i + ':' + j] = p[j + 1] === '*' ?
          check(i, j + 2) : false;
      }
      return map[i + ':' + j];
    }
  }


  let s = "aa", p = "a*"

  console.log(isMatch(s,p))
  