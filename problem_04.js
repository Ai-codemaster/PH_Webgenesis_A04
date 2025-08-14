function isSame(arr1, arr2) {
  if (Array.isArray(arr1) !== true || Array.isArray(arr2) !== true) {
    return 'Invalid';
  } else if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

const a = [1, 2, 3];
const b = 223;
console.log(isSame(a, b));
