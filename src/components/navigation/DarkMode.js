import darkModeRev from '../../images/dark-mode-rev.svg';
import lightModeRev from '../../images/light-mode-rev.svg';

function DarkMode({theme, switchTheme}) {

    return (
        <>
            {(theme === 'light') ?
                <button onClick={switchTheme} className='dark-mode-btn'>
                    <img src={darkModeRev} alt='Light Mode Button' />
                </button> :
                <button onClick={switchTheme} className='dark-mode-btn'>
                    <img src={lightModeRev} alt='Dark Mode Button' />
                </button>
            }
        </>
    );
}

export default DarkMode;