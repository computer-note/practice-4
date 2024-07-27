import F from './F';
import G from './G';
import { NodeCContext } from '../../contexts/NodeCContext';
import { useState } from 'react';

//const C = logger(_C);

function C() {
  console.log('C rendered');

  const [value1, setValue1] = useState('hello world');
  const [value2, setValue2] = useState('nice to meet you');

  return (
    <div className='node'>
      <span>C</span>
      <span>value1:{value1}</span>
      <span>value2:{value2}</span>
      <div className='children'>
        <NodeCContext.Provider
          value={{
            value: value1,
            setValue: setValue1,
          }}
        >
          <F />
        </NodeCContext.Provider>
        <NodeCContext.Provider
          value={{
            value: value2,
            setValue: setValue2,
          }}
        >
          <G />
        </NodeCContext.Provider>
      </div>
    </div>
  );
}

export default C;
