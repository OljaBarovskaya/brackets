module.exports = function check(str, bracketsConfig) {
  let arr = [];
  for (let i=0; i<str.length; i++){
    let currentElement = str[i];
    for (let j=0; j<bracketsConfig.length; j++){
      if (currentElement === bracketsConfig[j][0]){
        arr.push(str[i]);
      } else {
        if (arr.length === 0){return false}
        let topElement = arr[arr.length-1];
        if (topElement === bracketsConfig[j][0]) {
          arr.pop()
        } else {return false}
      }
    }
    
  }
  return arr.length === 0;
}
