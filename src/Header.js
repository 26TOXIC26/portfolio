import logo from './logo.png';
import icon from './favicon.ico'
import './App.css';

function Header() {
  document.title = "26 TOXIC 26";
  const link = document.querySelector("link[rel~='icon']");
  link.type = 'image/png';
  link.rel = 'icon';
  link.href = icon;
  return (
    <div className="Header">
      <div className="H-title">
        <img src={logo} className="logo" alt="logo" />
        <p className="f-title text-9xl">26 TOXIC 26</p>
      </div>
      <div className="H-menu">
        <p className="f-menu">Home</p>
        <p className="s-menu">Projects</p>
        <div className="l-menu">
          <p>Contact Me</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
