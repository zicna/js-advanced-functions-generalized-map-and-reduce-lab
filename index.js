function map(src, callBack) {
  const r = [];

  for (let i = 0; i < src.length; i++) {
    const theElement = src[i];
    r.push(callBack(theElement));
  }

  return r;
}

function reduce(src, callBack, startingValue) {
  let total;
  if (startingValue) {
    total = startingValue;
    for (let i = 0; i < src.length; i++) {
      total = callBack(src[i], total);
    }
    return total;
  } else {
    total = src[0];
    for (let i = 1; i < src.length; i++) {
      total = callBack(src[i], total);
    }
    return total;
  }
}
