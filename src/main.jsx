import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import App from './App.jsx'
import { router } from './Routes/Routes.jsx'
import AuthProvaider from './provider/AuthProvaider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvaider>
        <RouterProvider router={router} />
    </AuthProvaider>

  </StrictMode>,
)
