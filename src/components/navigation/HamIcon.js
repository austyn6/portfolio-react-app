import iconHam from '../../images/icon-ham.svg';
import iconHamDark from '../../images/icon-ham-dark.svg';

function HamIcon({ theme, switchTheme }) {

    return (
        <>
            {(theme === 'light') ?
                <a href={'/'}><img src={iconHam} className="icon-ham" /></a> :
                <a href={'/'}><img src={iconHamDark} className="icon-ham" /></a>
            }
        </>
    );
}

export default HamIcon;