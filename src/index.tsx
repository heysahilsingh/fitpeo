import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'
import App from './app/App.tsx'

// ReactDOM.createRoot(document.getElementById('main')!).render(
//     <App />
// )

ReactDOM.createRoot(document.getElementById('main')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)