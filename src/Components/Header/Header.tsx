import logo from '../../img/logo.svg'

import './Header.scss'

const Header = () => {
    const burger = document.getElementsByClassName('menu-btn')
    const mobileNav = document.getElementsByClassName('mobileNav')
    console.log(window.innerWidth)
    return (
        <header className='header'>

            <img className='logo' src={logo} alt="Logo Sunnyside" />
            <nav className='desktopNav'>
                <a href='#/' className='btnAbout btn'>About</a>
                <a href='#/' className='btnServices btn'>Services</a>
                <a href='#/' className='btnProjects btn'>Projects</a>
                <a href='#/' className='btnContact btn'>Contact</a>
            </nav>

            {/*window.innerWidth <= 991 && */}<div className="menu-btn" onClick={() => { burger[0]?.classList.toggle('open'); mobileNav[0]?.classList.toggle('active') }}>
                <div className="menu-btn__burger"></div>
            </div>

            {/*window.innerWidth <= 991 &&*/} <nav className='mobileNav'>
                <a href='#/' className='btnAbout btn'>About</a>
                <a href='#/' className='btnServices btn'>Services</a>
                <a href='#/' className='btnProjects btn'>Projects</a>
                <a href='#/' className='btnContact btn'>Contact</a>
            </nav>
        </header>
    )
}

export default Header