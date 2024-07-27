import { useState } from 'react';
import D from './D';
import E from './E';
import { NodeBContext } from '@/contexts/NodeBContext';

//const B = logger(_B);

function B() {
  console.log('B rendered');

  const [value, setValue] = useState(1234);

  return (
    <NodeBContext.Provider value={{ value, setValue }}>
      <div className='node'>
        <span>B</span>
        <span>value:{value}</span>
        <div className='children'>
          <D />
          <E />
        </div>
      </div>
    </NodeBContext.Provider>
  );
}

export default B;
