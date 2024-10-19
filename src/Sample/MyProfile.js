import React, { useState, useEffect } from 'react';
import './AccountPopup.css'; // Optional external CSS for styling

function MyProfile() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isPopupOpen, setIsPopupOpen] = useState(false); // Toggle popup visibility

    // Simulate fetching user data from an API
    useEffect(() => {
        const fetchUser = async () => {
            setTimeout(() => {
                const loggedInUser = {
                    name: 'John Doe',
                    email: 'john.doe@example.com',
                    accountCreationDate: '2023-10-18'
                };
                setUser(loggedInUser);
                setLoading(false);
            }, 1000);
        };
        fetchUser();
    }, []);

    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div className="account-popup">
            {/* My Profile clickable link */}
            <button className="my-profile-link" onClick={togglePopup}>
                My Profile
            </button>

            {/* Account Details Popup */}
            {isPopupOpen && (
                <div className="popup-content">
                    <div className="popup-header">
                        <h3>{user.name}</h3>
                        <p>Email: {user.email}</p>
                        <p>Account Created On: {user.accountCreationDate}</p>
                    </div>
                    <div className="popup-footer">
                        <button className="logout-btn">Logout</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default MyProfile;
