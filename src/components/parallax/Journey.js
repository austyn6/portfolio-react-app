import { useEffect, useState } from "react";
import { wordPressFetch } from "../../api/api";

function Journey({ theme, setTheme }) {

    useEffect(() => {
        wordPressFetch('austyn-journey')
            .then(data => {
                setJourneyPosts(data)
            })
    }, [])

    const [journeyPosts, setJourneyPosts] = useState(null);

    const renderJourneyPosts = () => {
        if (journeyPosts) {
            return journeyPosts.map((journeyPost, index) => {
                return (
                    <article key={index} className="journey-item">
                        <details>
                            <summary>
                                <h3>{journeyPost.acf.journey_date}</h3>
                                {(theme === 'light') ? <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" className="dot" alt="Journey Point"><circle id="Ellipse_42" data-name="Ellipse 42" cx="10" cy="10" r="10" fill="#006e7d" /></svg> : <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" className="dot" alt="Journey Point"><circle id="Ellipse_42" data-name="Ellipse 42" cx="10" cy="10" r="10" fill="#ffffff" /></svg>}

                            </summary>
                            <div className="journey-item-wrapper">
                                <h3>{journeyPost.acf.journey_date}</h3>
                                <h4>{journeyPost.acf.journey_title}</h4>
                                <h5>{journeyPost.acf.journey_sub_title}</h5>
                                <p>{journeyPost.acf.journey_description}</p>
                            </div>
                        </details>
                    </article>
                )
            })
        }

    }


    return (
        <>
            <h2 className="journey-h2">Journey</h2>
            <section id="journey" className="journey">
                <div className="journey-wrapper">
                    {renderJourneyPosts()}
                </div>
            </section>
        </>
    )
}

export default Journey;