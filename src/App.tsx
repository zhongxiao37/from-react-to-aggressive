import './App.css';
import { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-white">
      <div className='w-[80%] min-h-screen mx-auto px-4 py-4 flex flex-col justify-center items-center'>
        <div className='w-full text-center'>
          <h1 className='text-2xl mb-4'>计数器</h1>
          <div className='text-4xl mb-4'>{count}</div>
          <div className='space-x-4'>
            <button 
              className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'
              onClick={() => setCount(count + 1)}
            >
              增加
            </button>
            <button 
              className='px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600'
              onClick={() => setCount(count - 1)}
            >
              减少
            </button>
            <button 
              className='px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600'
              onClick={() => setCount(0)}
            >
              重置
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
