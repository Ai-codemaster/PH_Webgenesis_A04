function onlyCharacter(str) {
  if (typeof str !== 'string') {
    return 'Invalid';
  }
  const result = str.split(' ').join('').toUpperCase();
  return result
}

console.log(onlyCharacter(true));
