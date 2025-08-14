function resultReport(marks) {
  if (Array.isArray(marks) !== true) {
    return 'Invalid';
  }
  let sum = 0;
  let fail = 0;
  let pass = 0;
  for (let num of marks) {
    sum += num;

    if (num < 40) {
      fail++;
    } else {
      pass++;
    }
  }
  const average = Math.round(sum / marks.length);

  const result = { finalScore: average, pass: pass, fail: fail };

  if(isNaN(result.finalScore)){
    result.finalScore = 0;
  }
  return result;
}

const arr = [99, 87, 67, 12 ,87];
console.log(resultReport(arr));
