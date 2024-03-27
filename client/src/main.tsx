import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from "@material-tailwind/react";
import { ChatProvider} from "./Context/ChatProvider";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
    <BrowserRouter>
       <ChatProvider>
          <App />
       </ChatProvider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
)