const Title = () => {
    return (
      <div>
        <a href="/">
          {" "}
          <img
            alt="Food Haveli"
            src="https://i.pinimg.com/originals/28/65/07/28650724b95899bd15c7266906a738fa.png"
          />
          ;
        </a>
      </div>
    );
  };

  const Header = () => {
    return (
      <div className="Nav-list">
        <Title />
        <div>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Food List</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;