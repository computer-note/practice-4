import ValueList from './ValueList';

function D({ valueList, setValueList }) {
  console.log('(D) rerendered');

  return (
    <div className='node'>
      D: Even Number
      <ValueList valueList={valueList} setValueList={setValueList} />
    </div>
  );
}

export default D;
