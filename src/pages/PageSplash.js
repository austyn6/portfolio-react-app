import { Link } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { wordPressFetch } from '../api/api';

import Persona from '../components/parallax/Persona';
import Journey from '../components/parallax/Journey';
import Qualifications from '../components/parallax/Qualifications';
import FeaturedWebDev from '../components/parallax/FeaturedWebDev';
import Header from '../components/navigation/Header';
import Connect from '../components/parallax/Connect';

import iconWorks from '../images/icon-works.svg';
import iconPersona from '../images/icon-persona.svg';
import iconConnect from '../images/icon-connect.svg';
import iconScroll from '../images/icon-scroll.svg';
import iconScrollWhite from '../images/icon-scroll-white.svg';
import darkMode from '../images/dark-mode.svg';
import lightMode from '../images/light-mode.svg';
import { SITE_TITLE } from '../utilities/constants'

function SplashPage({ projects, theme, switchTheme }) {

    const [personaData, setPersonaData] = useState(null);
    const [qualificationsData, setQualificationsData] = useState(null);

    const [offset, setOffset] = useState(0);
    const parallaxRef = useRef(null)

    useEffect(() => {

        document.title = `Home • ${SITE_TITLE}`

        const onScroll = () => { setOffset(window.pageYOffset) }

        const hasScrolled = () => {
            if (!window.location.href.includes('#')) {
                parallaxRef.current.scrollIntoView()
            }
            window.removeEventListener('scroll', hasScrolled)
        }
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', onScroll)
            window.removeEventListener('scroll', hasScrolled)
        }
    }, [])

    useEffect(() => {
        wordPressFetch('pages/7/?_embed&acf_format=standard')
            .then(data => {
                // console.log(data)
                setPersonaData({
                    bio_title: data.acf.bio_title,
                    my_photo: data.acf.my_photo,
                    bio: data.acf.biography
                })
                setQualificationsData(data.acf.qualifications_input)
            })
    }, [])

    return (
        <>
            <div id='splash' className='splash' >
                {(theme === 'light') ?
                    <button onClick={switchTheme} className='dark-mode-btn'>
                        <img src={darkMode} alt='Light Mode Button' />
                    </button> :
                    <button onClick={switchTheme} className='dark-mode-btn'>
                        <img src={lightMode} alt='Dark Mode Button' />
                    </button>
                }
                <section className='splash-container'>
                    <section className="title-bar">
                        <h1>Austyn</h1> <span>Philpott</span>
                    </section>
                    <section className="tag-line">
                        <h2>Designer <span>•</span> Developer</h2>
                    </section>
                    <nav className="splash-icons">
                        <ul className='menu'>
                            <li>
                                <Link to={'/web-dev/'}>
                                    <span><img src={iconWorks} className='icon-works' alt='Works Button' /></span>
                                    <span><h3>Works</h3></span>
                                </Link>
                            </li>

                            <li>
                                <a href={'#persona'}>
                                    <span><img src={iconPersona} className='icon-persona' alt='Persona Button' /></span>
                                    <span><h3>Persona</h3></span>
                                </a>
                            </li>

                            <li>
                                <a href={'#qualifications'}>
                                    <span><img src={iconConnect} className='icon-connect' alt='Connect Button' /></span>
                                    <span><h3>Connect</h3></span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </section>
                <a href="#parallax" className='scroll-btn'>
                    {(theme === 'light') ?
                        <button style={{ display: offset != 0 ? 'none' : 'block' }} className={`scroll-btn ${offset == 0 ? "" : "disappear"}`}>
                            <img src={iconScroll} className="icon-scroll" />
                            <h3>scroll</h3>
                        </button> :
                        <button style={{ display: offset != 0 ? 'none' : 'block' }} className={`scroll-btn ${offset == 0 ? "" : "disappear"}`}>
                            <img src={iconScrollWhite} className="icon-scroll" />
                            <h3>scroll</h3>
                        </button>
                    }
                </a>

            </div>

            <section id='parallax' className='parallax'>
                <Header theme={theme} switchTheme={switchTheme} />
                <div className="para-fix">
                    <FeaturedWebDev projects={projects} />
                    <Persona personaData={personaData} />
                    <Journey theme={theme} switchTheme={switchTheme} />
                    <Qualifications qualificationsData={qualificationsData} />
                </div>
                <Connect />
            </section>
        </>
    )
}

export default SplashPage;