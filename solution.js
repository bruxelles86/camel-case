function toCamelCase(str){
  pattern = /-|_/
  return str.split("").filter(function(char, i, arr) {
    if(pattern.test(char) == false) {
       return char
    } else {
       arr[i+1] = arr[i+1].toUpperCase()
    }
  }).join("")
}
