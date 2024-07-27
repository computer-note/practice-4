/**
  @param  (ex) 1234
  @return (ex) 1030 
*/
export function extractEvenDigits(number) {
  return _extractDigits(number, true);
}

/**
  @param  (ex) 1234
  @return (ex) 204 
*/
export function extractOddDigits(number) {
  return _extractDigits(number, false);
}

/** 
  @param  (ex) 1234
  @return (ex) 2244
*/
export function increaseEvenDigits(number) {
  return _increaseDigits(number, true);
}

/** 
  @param  (ex) 1234
  @return (ex) 1335
*/
export function increaseOddDigits(number) {
  return _increaseDigits(number, false);
}

function _extractDigits(number, extractEvenDigitsFlag) {
  number = Math.abs(number);

  let curPos = extractEvenDigitsFlag ? 1 : 0;
  let extractedDigits = 0;
  // ex) number: 5678, extractEvenDigitsFlag: true
  // pos          3 2 1 0
  // digits       5 6 7 8
  // targetDigits 5 0 7 0
  while (10 ** curPos < number) {
    let curDigitNumber = Math.floor(number / 10 ** curPos) % 10;
    extractedDigits += 10 ** curPos * curDigitNumber;
    curPos += 2;
  }
  return extractedDigits;
}

function _increaseDigits(number, increaseEvenDigitsFlag) {
  number = Math.abs(number);

  let curPos = increaseEvenDigitsFlag ? 1 : 0;
  // ex) number: 5678, extractEvenDigitsFlag: true
  // pos          3 2 1 0
  // digits       5 6 7 8
  // increased    6 6 8 8
  while (10 ** curPos < number) {
    number += 10 ** curPos;

    curPos += 2;
  }
  return number;
}
