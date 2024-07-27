import ValueList from './ValueList';

function E({ valueList, setValueList }) {
  console.log('(E) rerendered');

  return (
    <div className='node'>
      E: Odd Number
      <ValueList valueList={valueList} setValueList={setValueList} />
    </div>
  );
}

export default E;
