import './styles.css';

function Footer() {
    return (
        <footer>
            <div className="footer-bg">
                <h2 className="footer-text">App desenvolvido por: &nbsp;
                <a href="https://github.com/daniellegb"
                        target="_blank" rel="noreferrer">
                         Danielle Balogh
                    </a><br />
                    <div className="space">Bootcamp DevSuperior</div>
                </h2>

            </div>
        </footer>
    );
}

export default Footer;