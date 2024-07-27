import { NodeBContext } from '@/contexts/NodeBContext';
import {
  extractEvenDigits,
  increaseEvenDigits,
} from '@/utils/number';
import { useContext } from 'react';

//const D = logger(_D);
function D() {
  console.log('D rendered');

  const { value, setValue } = useContext(NodeBContext);
  const evenDigits = extractEvenDigits(value);

  function handleIncreaseDigitButton() {
    setValue(prev => increaseEvenDigits(prev));
  }

  return (
    <div className='node'>
      <span>D</span>
      <span>even digit: {evenDigits}</span>
      <button onClick={handleIncreaseDigitButton}>
        Increase Even Digit
      </button>
    </div>
  );
}

export default D;
