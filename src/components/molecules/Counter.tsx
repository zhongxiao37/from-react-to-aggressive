import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { increment, decrement, reset } from '../../features/counter/counterSlice';

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className='w-full text-center'>
      <h1 className='text-2xl mb-4'>计数器</h1>
      <div className='text-4xl mb-4'>{count}</div>
      <div className='space-x-4'>
        <button 
          className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'
          onClick={() => dispatch(increment())}
        >
          增加
        </button>
        <button 
          className='px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600'
          onClick={() => dispatch(decrement())}
        >
          减少
        </button>
        <button 
          className='px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600'
          onClick={() => dispatch(reset())}
        >
          重置
        </button>
      </div>
    </div>
  );
};

export default Counter; 