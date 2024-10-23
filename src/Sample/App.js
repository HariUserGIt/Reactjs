// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import './App.css'; // You can create this file for additional styling if needed

function App() {
    const location = useLocation(); // Get the current location

    return (
        <div className="app-container">
            {location.pathname === '/' && ( // Check if the current path is the login page
                <header className="app-header">
                    <h1>My Application</h1> {/* Header added */}
                </header>
            )}
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </div>
    );
}

const Wrapper = () => (
    <Router>
        <App />
    </Router>
);

export default Wrapper;
