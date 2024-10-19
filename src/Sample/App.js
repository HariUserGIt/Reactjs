import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home'; // Assuming Home is in components folder
import Profile from './Profile'; // We'll create this
import ContactUs from './ContactUs'; // We'll create this
import MyProfile from './MyProfile'; // We'll create this
import './App.css'; // Import the global CSS


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="/myprofile" element={<MyProfile />} />
            </Routes>
        </Router>
    );
}

export default App;
