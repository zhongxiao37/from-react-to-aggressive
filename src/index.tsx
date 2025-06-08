import React from 'react';
import ReactDOM from 'react-dom/client';
import Layout from './components/layouts/Layout';
import App from './App';

// 导入样式
import './styles/global.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Layout>
      <App />
    </Layout>
  </React.StrictMode>
); 