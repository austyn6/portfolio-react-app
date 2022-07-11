
function Footer() {

    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <p><span>©</span>{currentYear} • Austyn Philpott</p>
        </footer>
    )
}

export default Footer;