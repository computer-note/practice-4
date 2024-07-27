import { NodeCContext } from '@/contexts/NodeCContext';
import { memo, useContext } from 'react';

//const F = logger(_F);

const F = memo(_F);

function _F() {
  console.log('F rendered');

  const { value, setValue } = useContext(NodeCContext);

  const firstWord = value.split(' ').at(0);

  //첫번째 단어를 뒤짚습니다.
  function handleReverseButton() {
    setValue(prev => {
      const [first, ...rest] = prev.split(' ');
      const reverse = [...first].reverse().join('');

      return [reverse, ...rest].join(' ');
    });
  }

  return (
    <div className='node'>
      <span>F</span>
      <span>firstword: {firstWord}</span>
      <button onClick={handleReverseButton}>Reverse</button>
    </div>
  );
}

export default F;
