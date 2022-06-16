const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const calculateIndex = (i, shift) => {
  let index = i + shift
  if (index > 25) {
    index -= 26;
  }
  if (index < 0) {
    index += 26;
  }
  return index;
}

const caesarCypher = (string, shift) => {
  let cypherString = '';
  const array = Array.from(string);
  array.forEach((character) => {
    if (alphabet.includes(character)) {
      let i = alphabet.indexOf(character);
      cypherString += alphabet[calculateIndex(i, shift)];
    } else {
      cypherString += character;
    }
  });

  return cypherString;
}

module.exports = caesarCypher;