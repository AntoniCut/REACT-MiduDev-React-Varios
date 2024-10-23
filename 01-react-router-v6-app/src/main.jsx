//  ************************************************************
//  **********  /01-react-router-v6-app/src/main.jsx  **********
//  ************************************************************


import { createRoot } from 'react-dom/client'
import { App } from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './Components/AuthProvider.jsx'


createRoot(document.getElementById('root')).render(
  <AuthProvider>
      <BrowserRouter>
          <App />
      </BrowserRouter>
  </AuthProvider>
)


