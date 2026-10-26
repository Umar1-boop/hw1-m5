import './header.css';
import mainLogo from '../../img/Rivo.svg'

export default function Header() {
  return (
    <header className="container main_header">
      <div className="logo">
        <img src={mainLogo} alt="" />
      </div>

      <nav className="navigate">
        <li>Home</li>
        <li>Shop</li>
        <li>Features</li>
        <li>Contact</li>
      </nav>

      <button className="login">Login</button>
    </header>
  )
}
