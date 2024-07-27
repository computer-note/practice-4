import { useMemo } from 'react';
import B from './B';
import C from './C';
import ValueList from './ValueList';

function A({ valueList, setValueList }) {
  console.log('(A) rendered');

  const { firstHalf, restHalf } = useMemo(() => {
    console.log('(A) separate first half and rest');

    const halfIdx = valueList.length / 2;
    return {
      firstHalf: valueList.slice(0, halfIdx),
      restHalf: valueList.slice(halfIdx, valueList.length),
    };
  }, [valueList]);

  return (
    <div className='node'>
      A
      <ValueList valueList={valueList} setValueList={setValueList} />
      <div className='children'>
        <B valueList={firstHalf} setValueList={setValueList} />
        <C valueList={restHalf} setValueList={setValueList} />
      </div>
    </div>
  );
}

export default A;
