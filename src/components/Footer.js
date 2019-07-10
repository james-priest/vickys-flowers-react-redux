import React from 'react'

function Footer() {
  return (
    <footer id="footer" role="navigation">
      <nav id="nav-footer" className="max-width-container">
        <div className="center-justify">
          <header className="all-caps">get to know us</header>
          <ul className="center-justify footer-nav-group">
            <li>
              <a href="#about-us">About Us</a>
            </li>
            <li>
              <a href="#careers">Careers</a>
            </li>
            <li>
              <a href="#media">Media</a>
            </li>
            <li>
              <a href="#security">Security &amp; Privacy</a>
            </li>
          </ul>
        </div>
        <div className="center-justify">
          <header className="all-caps">learn more about</header>
          <ul className="center-justify footer-nav-group">
            <li>
              <a href="#blog">Blog</a>
            </li>
            <li>
              <a href="#florist">Find a Florist</a>
            </li>
            <li>
              <a href="#tips">Floral Tips &amp; Inspiration</a>
            </li>
            <li>
              <a href="#sitemap">Sitemap</a>
            </li>
          </ul>
        </div>
        <div className="center-justify">
          <header className="all-caps">shop vicky's</header>
          <ul className="center-justify footer-nav-group">
            <li>
              <a href="#delivery">Same-Day Flower Delivery</a>
            </li>
            <li>
              <a href="#birthday">Birthday Flowers</a>
            </li>
            <li>
              <a href="#funeral">Funeral &amp; Sympathy Flowers</a>
            </li>
            <li>
              <a href="#international">International Flower Delivery</a>
            </li>
          </ul>
        </div>
      </nav>
    </footer>
  )
}

export default Footer
