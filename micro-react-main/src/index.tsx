import React from 'react';
import ReactDOM from 'react-dom/client';
import { registerMicroApps, start } from 'qiankun';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// 子应用配置
const microApps = [
  {
    name: 'micro-vue-sub',
    entry: '//localhost:3011',
    container: '#subapp-viewport',
    activeRule: '/subVue',
  },
  {
    name: 'micro-react-sub',
    entry: '//localhost:3012',
    container: '#subapp-viewport',
    activeRule: '/subReact',
  },
  // 其他子应用的配置
];

// 注册子应用
registerMicroApps(microApps);

// 启动基座应用
start();

const root = ReactDOM.createRoot(
  document.getElementById('main-root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
