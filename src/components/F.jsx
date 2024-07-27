import ValueList from './ValueList';

function F({ valueList, setValueList }) {
  console.log('(F) rerendered');

  return (
    <div className='node'>
      F: Prime Number
      <ValueList valueList={valueList} setValueList={setValueList} />
    </div>
  );
}

export default F;
