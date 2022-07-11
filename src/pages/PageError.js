import Header from "../components/navigation/Header";

function PageError() {

    return (
        <div className="header-fix">
            <Header />
            <section className='error-page'>
                <h1>404 Error!</h1>
                <h2>Something has<br />gone wrong!</h2>
                <p>We can't find the page you're looking for.</p>
            </section>
        </div>
    )
}

export default PageError;