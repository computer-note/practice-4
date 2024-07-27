import ValueItem from './ValueItem';

function ValueList({ valueList, setValueList }) {
  function handleIncValue(e) {
    if (e.target === e.currentTarget) {
      return;
    }

    const valueId = e.target.dataset.id;

    setValueList(prev =>
      prev.map(({ id, value }) =>
        valueId === id ? { id, value: value + 1 } : { id, value }
      )
    );
  }

  return (
    <div className='list' onClick={handleIncValue}>
      {valueList.map(({ value, id }) => (
        <ValueItem key={id} value={value} id={id} />
      ))}
    </div>
  );
}

export default ValueList;
