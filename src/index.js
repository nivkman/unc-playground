import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Telegram from "./pages/Telegram";
import Slack from "./pages/Slack";
import './index.css';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/telegram" element={<Layout content={<Telegram/>} platform="Telegram" />} />
                <Route path="/slack" element={<Layout content={<Slack/>} platform="Slack" />} />

            </Routes>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);