import { Link } from 'react-router-dom';
import MyProfile from './MyProfile'; // Import the MyProfile component
import './Home.css'; // Import CSS for styling

function Home() {
    return (
        <div>
            {/* Navigation bar */}
            <nav className="navbar">
                <ul className="left-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link to="/contact-us">Contact Us</Link></li>
                </ul>

                {/* Right side of navbar with My Profile */}
                <ul className="right-links">
                    <li>
                        {/* Instead of a link, we use the MyProfile component here */}
                        <MyProfile />
                    </li>
                </ul>
            </nav>

            {/* Main content area */}
            <div className="content">
                <h1>Welcome to the Home Page!</h1>
            </div>
        </div>
    );
}

export default Home;
