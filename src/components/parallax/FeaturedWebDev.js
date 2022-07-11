import { Link } from "react-router-dom";
import WebFeaturedImage from '../WebFeaturedImage';

function FeaturedWebDev({ projects }) {

    const renderWebDevCta = () => {
        if (projects) {
            return projects.map((project, index) => <WebFeaturedImage project={project} key={index} />)
        }
    }

    return (
        <section id="featured-web" className="featured-web">
            <h2>Web Development</h2>
            <section id="web-dev-gallery" className="web-dev-gallery">
                <div className="gallery-wrapper">
                    {renderWebDevCta()}
                </div>
            </section>
            <p>I've recently graduated from BCIT's Front End Web Development Program. What an amazing experience! I learned everything from the basics of HTML, CSS, JS and PHP to developing and mainting websites in React and WordPress!</p>
            <Link to={'/web-dev/'}><h3>View the projects!</h3></Link>
        </section>
    )
}

export default FeaturedWebDev;