import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Login from './views/Login.tsx';
import {
  BrowserRouter,
  createBrowserRouter,
} from "react-router-dom";
import App from '../src/app.tsx';
import Register from './views/Register.tsx';
import Dashboard from './views/Dashboard.tsx';

import TimeAgo from 'javascript-time-ago'

import en from 'javascript-time-ago/locale/en.json'
TimeAgo.addDefaultLocale(en)
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/home",
    element: <Dashboard />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter >
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
