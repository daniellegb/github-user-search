import ButtonIcon from 'core/components/ButtonIcon';
import { Link } from 'react-router-dom';
import './styles.css';

const Home = () => {
    return (
        <>
            <h5 className="home-title">
                Desafio do Capítulo 3, Bootcamp DevSuperior
            </h5>
            <h2 className="home-text">
                <p>Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior.</p>
                <p>Conforme proposto, esta implementação oferece uma busca de usuários do Github.</p>
                <p>Este design foi adaptado a partir de Ant Design System for Figma, de Mateusz Wierzbicki: <a href="mailto: antforfigma@gmail.com" className="text-blue">antforfigma@gmail.com</a> </p>
            </h2>
            <div className="btn-position">
                <Link to="/search">
                    <ButtonIcon text="Começar" />
                </Link>
            </div>
        </>
    );
}

export default Home;