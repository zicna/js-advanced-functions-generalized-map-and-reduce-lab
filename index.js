function map(src, cb) {
  let r = []

  for (let i = 0; i < src.length; i++) {
    let theElement = src[i]
    r.push(cb(theElement))
  }

  return r;
}

function reduce(src, cb, startingValue) {
  let total 
  if (startingValue) {
    total = startingValue
    for (let i = 0; i < src.length; i++) {
      total = cb(src[i], total)
    }
    return total
  } else {
    total = src[0]
    for (let i = 1; i < src.length; i++) {
      total = cb(src[i], total)
    }
    return total
  }
}
