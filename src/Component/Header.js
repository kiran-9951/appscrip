import "./Header.css";
const Header = () => {
  return (
    <>
      <div className="header">
        <div className="logo">
          <img src="./Logo.png" alt="logo" />
        </div>
        <div className="logo_text">
          <h2>
            <b>LOGO</b>
          </h2>
        </div>
        <div className="icons">
          <img src="./search-normal.png" alt="search" />
          <img src="./heart.png" alt="heart" />
          <img src="./shopping-bag.png" alt="bag" />
          <img src="./profile.png" alt="profile" />
        </div>
      </div>
      <nav className="navbar">
        <a href="#shop" className="shop">
          SHOP
        </a>
        <a href="#skills" className="shop">
          SKILLS
        </a>
        <a href="#stories" className="shop">
          STORIES
        </a>
        <a href="#about" className="shop">
          ABOUT
        </a>
        <a href="#contact" className="shop">
          CONTACT US
        </a>
      </nav>
      <div className="text">
        <h1>DISCOVER OUR PRODUCTS</h1>
        <br />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          accumsan, metus ultrices eleifend gravida. Vivamus eget bibendum eros.
        </p>
      </div>
    </>
  );
};

export default Header;
