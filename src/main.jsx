import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './bootstrap.min.css'
import 'react-scroll-parallax'
import { ParallaxProvider } from 'react-scroll-parallax'
import { Spring } from '@react-spring/web'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ParallaxProvider>
      <App />

    </ParallaxProvider>
  </React.StrictMode>,
)
