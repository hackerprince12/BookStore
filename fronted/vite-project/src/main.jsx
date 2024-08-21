import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Context from './Context/Context.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
 
 <BrowserRouter>
 <Context>
  <div className="dark:bg-slate-900  dark:text-white">
  <App />
  </div>
  </Context>
 </BrowserRouter>

   
 
)
