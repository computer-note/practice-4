import ValueList from './ValueList';

function G({ valueList, setValueList }) {
  console.log('(G) rerendered');

  return (
    <div className='node'>
      G: Composite Numbers
      <ValueList valueList={valueList} setValueList={setValueList} />
    </div>
  );
}

export default G;
