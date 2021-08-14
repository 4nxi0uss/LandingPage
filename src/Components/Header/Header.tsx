import * as React from 'react';

import logo from '../../img/logo.svg'

import './Header.scss'

const Header = () => {

    return (
        <header className='header'>
            <img className='logo' src={logo} alt="Logo Sunnyside" />
            <div className='btnDiv'>
                <button className='btnAbout btn'>About</button>
                <button className='btnServices btn'>Services</button>
                <button className='btnProjects btn'>Projects</button>
                <button className='btnContact btn'>Contact</button>
            </div>
        </header>
    )
}

export default Header