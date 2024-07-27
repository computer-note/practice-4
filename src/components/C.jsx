import { memo, useMemo } from 'react';
import { isPrimeNumber } from '../utils/math';
import F from './F';
import G from './G';
import ValueList from './ValueList';
import { isArrayPropEqualForNodeComponent } from '../utils/custom-equality';

const C = memo(_C, isArrayPropEqualForNodeComponent);

function _C({ valueList, setValueList }) {
  console.log('(C) rerendered');

  const { primeValues, compositeValues } = useMemo(() => {
    console.log('(C) separate prime and composite values');

    const primeValues = [];
    const compositeValues = [];
    for (const { value, ...rest } of valueList) {
      isPrimeNumber(value)
        ? primeValues.push({ value, ...rest })
        : compositeValues.push({ value, ...rest });
    }

    return { primeValues, compositeValues };
  }, [valueList]);

  return (
    <div className='node'>
      C: [length/2, length)
      <ValueList valueList={valueList} setValueList={setValueList} />
      <div className='children'>
        <F valueList={primeValues} setValueList={setValueList} />
        <G valueList={compositeValues} setValueList={setValueList} />
      </div>
    </div>
  );
}

export default C;
