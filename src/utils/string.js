export function rotateWordRight(word) {
  const length = word.length;
  const rotate = new Array(length);

  for (let i = 0; i < length; ++i) {
    rotate[(i + 1) % length] = word[i];
  }

  return rotate.join('');
}
