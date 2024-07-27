import { memo, useMemo } from 'react';
import D from './D';
import E from './E';
import ValueList from './ValueList';
import { isArrayPropEqualForNodeComponent } from './../utils/custom-equality';

const B = memo(_B, isArrayPropEqualForNodeComponent);

function _B({ valueList, setValueList }) {
  console.log('(B) rerendered');

  const { evenValues, oddValues } = useMemo(() => {
    console.log('(B) separate even and odd');

    return {
      evenValues: valueList.filter(({ value }) => value % 2 === 0),
      oddValues: valueList.filter(({ value }) => value % 2 === 1),
    };
  }, valueList);

  return (
    <div className='node'>
      B: [0, length/2)
      <ValueList valueList={valueList} setValueList={setValueList} />
      <div className='children'>
        <D valueList={evenValues} setValueList={setValueList} />
        <E valueList={oddValues} setValueList={setValueList} />
      </div>
    </div>
  );
}

export default B;
