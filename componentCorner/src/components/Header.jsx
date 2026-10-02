import './Header.css';

function Header({ storeName, cartCount }) {
  return (
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label={`${storeName} home`}>
        <span className="wordmark-mark">CC</span>
        <span>{storeName}</span>
      </a>
      <nav className="nav-menu" aria-label="Main navigation">
        <a href="#collection" className="nav-link">Shop</a>
        <a href="#story" className="nav-link">Our story</a>
        <a href="#footer" className="nav-link">Contact</a>
      </nav>
      <a className="header-action cart-link" href="#cart" aria-label={`Shopping cart, ${cartCount} ${cartCount === 1 ? 'item' : 'items'}`}>
        <svg className="cart-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M3 4h2l2.1 10a2 2 0 0 0 2 1.6h8.4a2 2 0 0 0 1.9-1.4L21 8H6" />
          <circle cx="10" cy="20" r="1" />
          <circle cx="18" cy="20" r="1" />
        </svg>
        <span className="cart-badge" aria-hidden="true">{cartCount}</span>
      </a>
    </header>
  );
}

export default Header;
