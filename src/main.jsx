import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import Router from './Router/Router'
// date-range 
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { HelmetProvider } from 'react-helmet-async'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
    <RouterProvider router={Router} />
    </HelmetProvider>
  </React.StrictMode>,
)
