function totalFine(fare) {
  if (typeof fare !== 'number' || fare <= 0) {
    return 'Invalid';
  }
  const fine = (fare * 20) / 100;

  const totalAmount = fare + fine + 30;

  return totalAmount;
}

function onlyCharacter(str) {
  if (typeof str !== 'string') {
    return 'Invalid';
  }
  const result = str.split(' ').join('').toUpperCase();
  return result;
}

function bestTeam(player1, player2) {
  const team1 = player1.foul + player1.cardY + player1.cardR;
  const team2 = player2.foul + player2.cardY + player2.cardR;

  if (
    typeof player1 !== 'object' ||
    Array.isArray(player1) ||
    typeof player2 !== 'object' ||
    Array.isArray(player2)
  ) {
    return 'Invalid';
  } else if (team1 === team2) {
    return 'Tie';
  } else if (team1 > team2) {
    return player2.name;
  } else {
    return player1.name;
  }
}

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

  if (isNaN(result.finalScore)) {
    result.finalScore = 0;
  }
  return result;
}
