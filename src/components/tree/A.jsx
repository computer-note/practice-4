import C from './C';
import B from './B';

//const A = logger(_A);

function A() {
  console.log('A rendered');
  return (
    <div className='node'>
      A
      <div className='children'>
        <B />
        <C />
      </div>
    </div>
  );
}

export default A;
