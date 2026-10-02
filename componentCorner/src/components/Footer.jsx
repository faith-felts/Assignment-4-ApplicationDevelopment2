import './Footer.css';

function Footer({ storeName, description, contact }) {
  return (
    <footer className="site-footer" id="footer">
      <div className="footer-intro" id="story">
        <p className="eyebrow">Stay curious</p>
        <h2>Good things for your corner of the world.</h2>
      </div>
      <div className="footer-details">
        <div className="footer-brand">
          <p className="footer-wordmark">{storeName}</p>
          <p>{description}</p>
        </div>
        <div className="footer-column">
          <p className="footer-label">Navigate</p>
          <a href="#collection">Collection</a>
          <a href="#story">About us</a>
          <a href="#footer">Journal</a>
        </div>
        <div className="footer-column">
          <p className="footer-label">Say hello</p>
          <a href={`mailto:${contact}`}>{contact}</a>
          <p>Brooklyn, NY</p>
          <p>Mon–Fri, 9–5 EST</p>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 {storeName}</span>
        <span>Made for the everyday</span>
      </div>
    </footer>
  );
}

export default Footer;