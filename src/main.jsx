import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { firestoreInit } from './firebase/config.js'
import './index.css'

firestoreInit()

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <App />
  
)
