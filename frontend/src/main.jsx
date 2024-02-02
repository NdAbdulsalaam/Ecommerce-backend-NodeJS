import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/components/App';

const domContainer = document.getElementById("root")
const root = ReactDOM.createRoot(domContainer)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
