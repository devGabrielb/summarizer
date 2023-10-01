import React from 'react'
import ReactDOM from 'react-dom/client'
import {Provider} from "react-redux"

import { store } from './services/store.ts'
import App from './app.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
)
