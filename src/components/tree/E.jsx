//const E = logger(_E);

import { NodeBContext } from '@/contexts/NodeBContext';
import { extractOddDigits, increaseOddDigits } from '@/utils/number';
import { useContext } from 'react';

function E() {
  console.log('E rendered');

  const { value, setValue } = useContext(NodeBContext);

  const oddDigits = extractOddDigits(value);

  function handleIncreaseDigitButton() {
    setValue(prev => increaseOddDigits(prev));
  }

  return (
    <div className='node'>
      <span>E</span>
      <span>odd digit: {oddDigits}</span>
      <button onClick={handleIncreaseDigitButton}>
        Increase Odd Digit
      </button>
    </div>
  );
}

export default E;
