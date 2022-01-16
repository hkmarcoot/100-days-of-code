const letterScores = {
  a: 1,
  b: 3,
  c: 3,
  d: 2,
  e: 1,
  f: 4,
  g: 2,
  h: 4,
  i: 1,
  j: 8,
  k: 5,
  l: 1,
  m: 3,
  n: 1,
  o: 1,
  p: 3,
  q: 10,
  r: 1,
  s: 1,
  t: 1,
  u: 1,
  v: 4,
  w: 4,
  x: 8,
  y: 4,
  z: 10
};

export function scrabbleScore(word) {
  return letterScores[word];
}

//Step 2
export function wordScore(word) {
  //Bonus - Uppercase to Lowercase 
  word = word.toLowerCase();

  //Step 3
  const regEx = /[^a-zA-Z]/g;
  if (regEx.test(word)) {
    throw new Error();
  }

  let sum = 0;
  for (let i = 0; i < word.length; i++) {
    sum += letterScores[word[i]];
  }

  //Step 4
  let sevenTilesBonus = 0;
  if (word.includes("a") || word.includes("e") || word.includes("i") || word.includes("o") || word.includes("u") || 
  word.includes("l") || word.includes("n") || word.includes("r") || word.includes("s") || word.includes("t")) {
    sevenTilesBonus += 1;
  }
  if (word.includes("d") || word.includes("g")){
    sevenTilesBonus += 1;
  }
  if (word.includes("b") || word.includes("c") || word.includes("m") || word.includes("p")){
    sevenTilesBonus += 1;
  }
  if (word.includes("f") || word.includes("h") || word.includes("v") || word.includes("w") || word.includes("Y")){
    sevenTilesBonus += 1;
  }
  if (word.includes("k")){
    sevenTilesBonus += 1;
  }
  if (word.includes("j") || word.includes("x")){
    sevenTilesBonus += 1;
  }
  if (word.includes("q") || word.includes("z")){
    sevenTilesBonus += 1;
  }

  if (sevenTilesBonus === 7){
    sum += 50;
  }
  return sum;
}