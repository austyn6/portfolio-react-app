import Footer from '../navigation/Footer';

const Connect = () => {
    return (
        <section className='connect'>
            <a href="/#parallax" >
                <svg xmlns="http://www.w3.org/2000/svg" width="110.715" height="18.055" viewBox="0 0 110.715 18.055" className="scroll-to-top">
                    <path id="Path_3" data-name="Path 3" d="M0,104.688,12.539,52.615,0,0" transform="translate(3.011 15.039) rotate(-90)" fill="none" stroke="#ffffff80" stroke-linecap="round" stroke-linejoin="round" stroke-width="5" />
                </svg>
            </a>
            <h2>Connect</h2>
            <div className='connect-wrapper'>
                <h3>Looking forward to hearing from you!</h3>
                <a href="https://www.linkedin.com/in/austynphilpott/" target='_blank'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 66.363 66.218">
                        <path id="Path_73" data-name="Path 73" d="M60.858,0H5.505A5.505,5.505,0,0,0,0,5.5V60.712a5.505,5.505,0,0,0,5.505,5.505H60.858a5.505,5.505,0,0,0,5.505-5.505V5.5A5.505,5.505,0,0,0,60.858,0M20.566,56.9H10.691V25.248h9.875Zm-4.937-35.65a5.809,5.809,0,1,1,5.809-5.809,5.809,5.809,0,0,1-5.809,5.809M56.543,56.977H46.669V38.607a5.446,5.446,0,0,0-10.891,0v18.37H25.9V25.32h9.875v4.528a10.808,10.808,0,0,1,9.362-5.4h.59q.475,0,.94.041a10.815,10.815,0,0,1,9.875,10.774Z" transform="translate(0 0.001)" fill="#fff" />
                    </svg>
                </a>
            </div>
            <Footer />
        </section>

    )
}


export default Connect;