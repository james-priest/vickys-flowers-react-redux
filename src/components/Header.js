import React, { Component } from 'react'
import logo from '../images/logo.svg'
import Cart from './Cart'

class Header extends Component {
  state = {
    expandMenu: false
  }
  toggleMenu = e => {
    e.preventDefault()
    const body = document.querySelector('body')

    if (this.state.expandMenu === false) {
      body.classList.add('responsive')
    } else {
      body.classList.remove('responsive')
    }
    this.setState(prevState => ({
      expandMenu: !prevState.expandMenu
    }))
  }
  render() {
    return (
      <header role="banner" className="fixed-header">
        <div className="max-width-container">
          <nav className="top-level-nav">
            <ul className="all-caps">
              <li className="menu-icon">
                <a
                  href="#menu"
                  aria-label="hamburger menu"
                  onClick={this.toggleMenu}
                >
                  <svg viewBox="0 4 24 14" alt="hamburger menu icon">
                    <path
                      fill="#fff"
                      d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"
                    />
                  </svg>
                </a>
              </li>
              <li className="logo">
                <h1>
                  <img src={logo} alt="Vicky's Flowers" tabIndex="0" />
                  Vicky's Flower
                </h1>
              </li>
              <li className="menu-item">
                <a href="#home">home</a>
              </li>
              <li className="menu-item">
                <a href="#about-us">about us</a>
              </li>
              <li className="menu-item">
                <a href="#occasions">occasions</a>
              </li>
              <li className="menu-item">
                <a href="order">order</a>
              </li>
            </ul>
          </nav>
          <Cart />
        </div>
      </header>
    )
  }
}

export default Header
