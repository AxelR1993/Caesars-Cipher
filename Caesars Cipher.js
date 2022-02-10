function rot13(str) {
    let newStr = "";
    let abecedario1 = "ABCDEFGHIJKLM";
    let abecedario2 = "NOPQRSTUVWXYZ";
    let posicion = undefined; 
    for(let i = 0; i<str.length; i++){
      if (abecedario1.indexOf(str[i]) != -1){
        posicion = abecedario1.indexOf(str[i]);
        newStr += abecedario2[posicion];
      } else if (abecedario2.indexOf(str[i]) != -1){
        posicion = abecedario2.indexOf(str[i]);
        newStr += abecedario1[posicion]
      } else {
        newStr += str[i];
      }
  
    }
   
    return newStr;
  }
  
  let result = rot13("SERR PBQR PNZC");
  console.log(result)