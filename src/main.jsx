import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App API="http://localhost:5173/" />
    </StrictMode>,
)
