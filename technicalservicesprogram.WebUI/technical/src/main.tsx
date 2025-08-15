import { StrictMode } from 'react'
import { BrowserRouter, Routes, Route } from "react-router"
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import Login from './Pages/Account/Login.tsx'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path='/*' element={<App />}>
                </Route>
                <Route path="login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    </StrictMode>
)
