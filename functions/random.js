// returns a random number between min and max, including max if inclusive is set to true

function getRandomInteger(min, max, inclusive = false) {
  if (inclusive) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  } else {
    return Math.floor(Math.random() * (max - min)) + min;
  }
}

// returns a random boolean false or true

function getRandomBoolean() {
  return Math.random() < 0.5;
}

export { getRandomInteger, getRandomBoolean };
