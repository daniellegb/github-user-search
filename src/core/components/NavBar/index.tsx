import { Link } from 'react-router-dom';
import './styles.css';
import './../../../app.css';

const NavBar = () => (
    <nav className="navbar-bg">
            <Link to="/">
                <h4 className="nav-text">Bootcamp DevSuperior</h4>
            </Link>
    </nav>
);

export default NavBar;