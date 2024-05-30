function Navbar() {
    return (
      <>
        <nav className="navbar">
          <div className="logo">
            <img src="https://flowbite.com/docs/images/logo.svg" alt="geekFood" />
            <h1>GeekFoods</h1>
          </div>
          <ul>
            <li>
              <a href="#" className="active-link">Home</a>
            </li>
            <li>
              <a href="#">Quote</a>
            </li>
            <li>
              <a href="#">Restaurants</a>
            </li>
            <li>
              <a href="#">Food</a>
            </li>
            <li>
              <a href="#">Contacts</a>
            </li>
          </ul>
          <button className="btn">Get started</button>
        </nav>
      </>
    );
  }
  
  export default Navbar;
  