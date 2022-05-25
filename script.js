function countPositivesSumNegatives(input) {
  let array = [0,0]
  
  for (let i = 0; i<input.length; i++){
    if (input[i]<=0){
      array[1]=array[1]+input[i]
    } else {
      array[0]=array[0]+1
    }
  }
  return array
}
