

function Persona({ personaData }) {

    //personaData.my_photo



    return (
        <>
            <section id="persona" className="about-me">
                {personaData &&
                    (
                        <>
                            <h2>Persona</h2>
                            <article className='about-me-card'>
                                <img src={personaData.my_photo} className='bio-photo' alt='Austyn' />
                                <section>
                                    <h3>{personaData.bio_title}</h3>
                                    <p>{personaData.bio}</p>
                                </section>
                            </article>
                        </>
                    )}
            </section>
        </>
    )
}

export default Persona;