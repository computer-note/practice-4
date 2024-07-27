import { NodeCContext } from '@/contexts/NodeCContext';
import { rotateWordRight } from '@/utils/string';
import { memo, useContext } from 'react';

//const G = logger(_G);

const G = memo(_G);

function _G() {
  console.log('G rendered');

  const { value, setValue } = useContext(NodeCContext);

  const lastWord = value.split(' ').at(-1);

  //단어를 오른쪽으로 한글자씩 돌립니다.
  function handleRotateButton() {
    setValue(prev => {
      const words = prev.split(' ');
      const last = words.at(-1);
      const rest = words.slice(0, -1);

      const rotate = rotateWordRight(last);

      return [...rest, rotate].join(' ');
    });
  }

  return (
    <div className='node'>
      <span>G</span>
      <span>last word: {lastWord}</span>
      <button onClick={handleRotateButton}>Rotate Right</button>
    </div>
  );
}

export default G;
