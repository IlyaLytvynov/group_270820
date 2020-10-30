import React from 'react';
import './Nav.scss';

export class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      isActive: false,
    };
  }

  toggleMenu() {
    const isActive = this.state.isActive;
    console.log(isActive);
    this.setState({ isActive: !isActive });
  }

  render() {
    let navClassNames = 'nav';
    if (this.state.isActive) {
      navClassNames = navClassNames + ' expand';
    }
    return (
      <nav className={navClassNames} id='nav'>
        <button
          className='nav__toggle'
          id='toggle'
          onClick={() => this.toggleMenu()}
        ></button>
        <ul className='nav__list'>
          <li className='nav__item'>
            <a href='' className='nav__link'>
              <span>Home</span>
            </a>
          </li>
          <li className='nav__item'>
            <a href='' className='nav__link'>
              <span>How it works</span>
            </a>
          </li>
          <li className='nav__item'>
            <a href='' className='nav__link'>
              <span>Contacts</span>
            </a>
          </li>
          <li className='nav__item'>
            <a href='' className='nav__link'>
              <span>Support</span>
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}
