const HeaderComponent = () => {
  return (
    <header className="header">
      <i class="fa-solid fa-headset logo"></i>
      <nav className="nav">
        <ul className="links">
          <li className="link-item">
            <a
              href="#"
              className="link"
              onClick={() => alert('Just a simple 1 page design')}
            >
              LOGIN
            </a>
          </li>
          <li className="link-item">
            <a
              href="#"
              className="link btn-link"
              onClick={() => alert('Just a simple 1 page design')}
            >
              JOIN AS ARTIST
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderComponent;
