
// You should implement your task here.

module.exports = function towelSort (arr) {
  if(typeof(arr) !== 'object'){
    return [];
  }
  let result = [];
  for(let i=0; i<arr.length; i++){
    if (Array.isArray(arr[i])){
      if (i%2 === 0){
        for(let j=0; j< arr[i].length; j++){
          result.push(arr[i][j]);
        }
      } else {
        for (let j=arr[i].length-1; j>-1; j--){
          result.push(arr[i][j]);
        }
      }
      
    } else{
      result.push(arr[i]);
    }
  }
  
  return (result);
}
