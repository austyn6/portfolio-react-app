import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { wordPressFetch } from "../api/api";
import Header from "../components/navigation/Header";
import Footer from '../components/navigation/Footer';
import WebFeaturedImage from "../components/WebFeaturedImage";

import { SITE_TITLE } from '../utilities/constants'

function PageWebProject({ projects, theme, switchTheme }) {


    const { slug } = useParams()
    const [project, setProject] = useState(null);

    useEffect(() => {
        wordPressFetch(`austyn-web-dev/?slug=${slug}&_embed&acf_format=standard`)
            .then(data => {
                setProject(data[0])
                document.title = `${data[0].title.rendered} • ${SITE_TITLE}`
            })
    }, [slug])



    const renderIconGallery = () => {
        if (project.acf?.['web_dev_icon_gallery']) {
            return (
                <section className="tech-stack">
                    <div className="tool-box">
                        {project.acf['web_dev_icon_gallery'].map(icon => {
                            return (
                                <img src={icon.url} key={icon.id} alt={icon.alt} />
                            )
                        })}
                    </div>
                </section>
            )
        }

    }

    const renderDesignHeader = (designHeader) => {
        if (designHeader.the_design_heading) {
            return (
                <div className="feature-header">
                    <h2>{designHeader['the_design_heading']}</h2>
                </div>
            )
        }

    }

    const renderDevelopmentHeader = (developmentHeader) => {
        if (developmentHeader.the_development_heading) {
            return (
                <div className="feature-header">
                    <h2>{developmentHeader['the_development_heading']}</h2>
                </div>
            )
        }

    }

    const renderDesign = () => {
        const designHeader = project.acf.the_design_header;
        const designFeatures = project.acf.web_design_feature;
        if (designHeader && designFeatures) {
            return (
                <>
                    <a href="#the-design">{renderDesignHeader(designHeader)}</a>
                    <section className="features-section">
                        {designFeatures.map((designFeature, index) => {
                            return (
                                <article className="feature" key={index}>
                                    {designFeature.web_design_feature_link ?
                                        (
                                            <div className="feature-with-link">
                                                <img src={designFeature['web_design_feature_image']['url']} />
                                                <a href={designFeature['web_design_feature_link']} target='_blank' className="xd-link">View the file!</a>
                                            </div>
                                        ) : (
                                            <img src={designFeature['web_design_feature_image']['url']} />
                                        )}
                                    <div>
                                        <h2>{designFeature.web_design_feature_title}</h2>
                                        <h3>{designFeature.web_design_feature_sub_title}</h3>
                                        <p>{designFeature.web_design_feature_description}</p>
                                    </div>
                                </article>
                            )
                        })}
                    </section>
                </>
            )

        }

    }

    const renderDevelopment = () => {
        const developmentHeader = project.acf.the_development_header;
        const developmentFeatures = project.acf.web_dev_feature;
        if (developmentHeader && developmentFeatures) {
            return (
                <>
                    <a href="#the-dev">{renderDevelopmentHeader(developmentHeader)}</a>
                    <section className="features-section">
                        {developmentFeatures.map((developmentFeature, index) => {
                            return (
                                <article className="feature" key={index}>
                                    <img src={developmentFeature['web_dev_feature_image']['url']} />
                                    <div>
                                        <h2>{developmentFeature.web_dev_feature_title}</h2>
                                        <h3>{developmentFeature.web_dev_feature_sub_title}</h3>
                                        <p>{developmentFeature.web_dev_feature_description}</p>
                                    </div>
                                </article>
                            )
                        })}
                    </section>
                </>
            )

        }

    }

    const renderPrevNextProject = () => {
        if (project && projects) {
            const currentIndex = projects.findIndex(proj => {
                return proj.id == project.id
            })
            const isLastIndex = currentIndex == projects.length - 1
            const isFirstIndex = currentIndex == 0
            const prevProjectLink = !isFirstIndex ? `/web-dev/${projects[currentIndex - 1].slug}` : `/web-dev/${projects[projects.length - 1].slug}`
            const nextProjectLink = !isLastIndex ? `/web-dev/${projects[currentIndex + 1].slug}` : `/web-dev/${projects[0].slug}`
            return (
                <section className="project-buttons">
                    <Link replace to={prevProjectLink}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 58.849 58.849">
                            <path id="Path_57" data-name="Path 57" d="M58.849,29.425A29.425,29.425,0,1,1,29.425,0,29.424,29.424,0,0,1,58.849,29.425" fill="#006e7d" />
                            <line id="Line_136" data-name="Line 136" y1="14.94" x2="14.94" transform="translate(18.876 14.512)" fill="none" stroke="#fff" stroke-linecap="round" stroke-miterlimit="10" stroke-width="6.5" />
                            <line id="Line_137" data-name="Line 137" x2="14.94" y2="14.94" transform="translate(18.876 29.398)" fill="none" stroke="#fff" stroke-linecap="round" stroke-miterlimit="10" stroke-width="6.5" />
                        </svg>
                    </Link>
                    <Link to={'/web-dev'}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 58.801 58.8">
                            <path id="Path_55" data-name="Path 55" d="M0,29.4A29.4,29.4,0,1,1,29.4,58.8,29.448,29.448,0,0,1,0,29.4" fill="#006e7d" />
                            <line id="Line_136" data-name="Line 136" x1="22.9" y2="22.9" transform="translate(18 18)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="5.941" />
                            <line id="Line_137" data-name="Line 137" x2="22.8" y2="22.8" transform="translate(18 18)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="5.941" />
                        </svg>
                    </Link>
                    <Link replace to={nextProjectLink}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 58.849 58.849">
                            <path id="Path_57" data-name="Path 57" d="M58.849,29.425A29.425,29.425,0,1,1,29.425,0,29.424,29.424,0,0,1,58.849,29.425" transform="translate(58.849 58.849) rotate(180)" fill="#006e7d" />
                            <line id="Line_136" data-name="Line 136" y1="14.94" x2="14.94" transform="translate(39.974 44.337) rotate(180)" fill="none" stroke="#fff" stroke-linecap="round" stroke-miterlimit="10" stroke-width="6.5" />
                            <line id="Line_137" data-name="Line 137" x2="14.94" y2="14.94" transform="translate(39.974 29.451) rotate(180)" fill="none" stroke="#fff" stroke-linecap="round" stroke-miterlimit="10" stroke-width="6.5" />
                        </svg>

                    </Link>
                </section>
            )
        }
    }

    return (
        <>  <div className="header-fix">
            <Header theme={theme} switchTheme={switchTheme} className="fixed-header" />
            {project && (
                <section id='project-page' className="project-page">
                    <section className="project-info">
                        <section className="project-title">
                            <h1>{project.title.rendered}</h1>
                            <h2>{project.acf['web_project_header']}</h2>
                        </section>
                        <WebFeaturedImage project={project} />
                        {renderPrevNextProject()}
                        <section className="project-links">
                            {project.acf?.link && <a href={project.acf.link[0]['link_input']} target='_blank'>View Website</a>}
                            {project.acf?.link && <a href={project.acf.link[1]['link_input']} target='_blank'>View Github</a>}
                        </section>
                        <section className="project-description">
                            <p>{project.acf['web_project_description']}</p>
                        </section>
                        {renderIconGallery()}
                    </section>
                    <section className="project-features">
                        <WebFeaturedImage project={project} />
                        <section id="the-design" className="the-design">
                            {renderDesign()}
                        </section>
                        <section id="the-dev" className="the-dev">
                            {renderDevelopment()}
                        </section>
                    </section>
                    <Footer />
                </section>
            )}
        </div>
        </>
    )
}

export default PageWebProject;
