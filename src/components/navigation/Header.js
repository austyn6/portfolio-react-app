import { Link } from 'react-router-dom';

import DarkMode from './DarkMode';
import HamIcon from './HamIcon';

function Header({ theme, switchTheme }) {

    return (
        <header className='main-nav'>
            <nav>
                <a href="/#parallax"> <h2>Austyn</h2> </a>
                <ul className='ham'>
                    <DarkMode theme={theme} switchTheme={switchTheme} />
                    <HamIcon theme={theme} switchTheme={switchTheme} />
                </ul>
                <ul className='nav-links'>
                    <Link to={'/web-dev/'}>Works</Link>
                    <Link to={'/#persona'}>Persona</Link>
                    <Link to={'/'}>Connect</Link>
                </ul>
            </nav>
        </header>
    )

}

export default Header;