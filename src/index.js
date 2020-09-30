module.exports = function reverse (n) {
    let result = '',
        str = n.toString(); 
        i = str.length - 1;
        
    while (i >= 0) {
      result += str[i];
      i--;
    }
    return parseInt(result);
  }
