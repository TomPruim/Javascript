class sortedArray{
  verify(array){
    for(let i = 0; i<array.length; i++){
      if(array[i]>array[i+1]){
        return false;
      }
    }
    return true;
  }
}
let sortedArrar = new sortedArray;
console.log(sortedArrar.verify([1,2,3,4,5]));
console.log(sortedArrar.verify([1,2,3,2,1]));
