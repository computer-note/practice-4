import { useState } from 'react';
import A from './components/A';
import { createValueWithIdList } from './utils/value-creator';
import { initialValueList } from './utils/constants';

function App() {
  const [valueList, setValueList] = useState(() =>
    createValueWithIdList(initialValueList)
  );

  console.log('(App) rerendered');

  return <A valueList={valueList} setValueList={setValueList} />;
}

export default App;
