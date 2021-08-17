function scoreboard(who) {
  let arr = [];
  for (let i = 0; i < who.length; i++) {
    arr.push({
      name: who[i].name,
      score:
        who[i].chickenwings * 5 + who[i].hamburgers * 3 + who[i].hotdogs * 2,
    });
  }
  return arr.sort((a, b) =>
    a.score === b.score ? a.name.localeCompare(b.name) : b.score - a.score
  );
}
