const HeroSection = () => {
    return (
        <main className="Hero container">
            <div className="hero-content">
                <h1> YOUR FEET DESERVE THE BEST</h1>
                <p className="paragraph">
                    YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.
                    YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.
                </p>
                <div className="hero-btn">
                    <button>Shop Now</button>
                    <button className="category-btn">Category</button>
                </div>
                <div className="shopping">
                    <p>Also Available On</p>
                    <div className="buy-icons">
                        <img src="./images/amazon.png" alt="Amazon Logo" />
                        <img src="./images/flipkart.png" alt="Flipkart Logo" />
                    </div>
                </div>
            </div>
            <div className="hero-image">
                <img src="./images/hero-image.png" alt="Shoe" />
            </div>
        </main>
    );
};

export default HeroSection;
