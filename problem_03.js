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
console.log(
  bestTeam(
    { name: "Germany", foul: 10, cardY: 1, cardR: 1 },"France"
  )
);
