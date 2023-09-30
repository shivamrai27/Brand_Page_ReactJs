const Navigation = () => {
    return (
        <nav className="container">
            <div className="logo">
                <img src="./images/brand_logo.png" alt="Logo" />
            </div>

            <ul>
                <li href="#">Location</li>
                <li href="#">Home</li>
                <li href="#">About</li>
                <li href="#">Contact</li>
            </ul>

            <button className="login-btn">Login</button>
        </nav>
    );
};

export default Navigation;
