import { useState } from 'react';
import A from './components/tree/A';
import './index.css';

function App() {
  const [_, setValue] = useState(0);

  return (
    <>
      <button
        onClick={() => {
          setValue(prev => prev + 1);
        }}
      >
        Rerender All
      </button>
      <A />
    </>
  );
}

export default App;
