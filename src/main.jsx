import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Toaster } from 'react-hot-toast'
// import bootstrap
import "bootstrap/dist/css/bootstrap.min.css"; // CSS учун
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // JS учун
import './index.css'

createRoot(document.getElementById('root')).render(

    <>
        <App />
        <Toaster />
    </>
)
