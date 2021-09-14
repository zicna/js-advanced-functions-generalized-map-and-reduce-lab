// Add your functions here

function a (array){
    return array.map(element => -1 * element)
}

function b(array){
    return array.map(element => element)
}



function map(array, fn){
    return array.map(e => fn(e))
}

function reduce(sourceArray, fn, start) {
    let total;
    if(start){
        total = start;
        for(let i = 0;i < sourceArray.length; i++ ){
            total = fn(sourceArray[i], total)
        }
        return total
    } else {
        total = sourceArray[0];
        for(let i = 1;i < sourceArray.length; i++ ){
            total = fn(sourceArray[i], total)
        }
        return total
    }
}
// function reduce(src, callback, startingValue) {
//     let total;
//     if (startingValue) {
//       total = startingValue;
//       for (let i = 0; i < src.length; i++) {
//         total = callback(src[i], total);
//       }
//       return total;
//     } else {
//       total = src[0];
//       for (let i = 1; i < src.length; i++) {
//         total = callback(src[i], total);
//       }
//       return total;
//     }
//   }
  


