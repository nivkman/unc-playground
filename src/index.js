import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Telegram from "./pages/Telegram";
import './index.css';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/telegram" element={<Layout content={<Telegram/>} title="Send Notification to Telegram" />} />

            </Routes>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);