import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/navigation/Footer';
import Header from '../components/navigation/Header';
import WebFeaturedImage from '../components/WebFeaturedImage';
import { SITE_TITLE } from '../utilities/constants'

function PageWebDev({ projects, theme, switchTheme }) {

    const [projectIndex, setProjectIndex] = useState(0);

    useEffect(() => {
        document.title = `Works • ${SITE_TITLE}`
    }, [])


    return (
        <>
            <Header theme={theme} switchTheme={switchTheme} />
            <div className='web-dev-wrapper'>
                <section className='web-dev-collection'>
                    <h1>Web Development Collection</h1>
                    {projects && (
                        <nav className='desktop-menu'>
                            <WebFeaturedImage project={projects[projectIndex]} />
                            <ul>
                                {projects.map((project, index) => <li key={project.guid.rendered} ><Link onMouseEnter={() => { setProjectIndex(index) }} to={`/web-dev/${project.slug}`}><h2>{project.title.rendered}</h2></Link></li>)}
                            </ul>
                        </nav>
                    )}

                    {projects && (
                        <nav className='mobile-menu'>
                            <ul>
                                {projects.map((project, mobileIndex) =>
                                    <Link to={`/web-dev/${project.slug}`} key={mobileIndex}>
                                        <li>
                                            <img src={project['_embedded']['wp:featuredmedia'][0].media_details.sizes.full['source_url']} alt={project['_embedded']['wp:featuredmedia'][0]['alt_text']} />
                                            <h2>{project.title.rendered}</h2>
                                        </li>
                                    </Link>
                                )}
                            </ul>
                        </nav>
                    )}
                </section>
                <Footer />
            </div>
        </>
    );
}
export default PageWebDev;