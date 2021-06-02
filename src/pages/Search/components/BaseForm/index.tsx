import './styles.css';
import ButtonIcon from 'core/components/ButtonIcon';

const BaseForm = () => {

    return (
        <div className="card-search">
            <h4 className="card-text">Encontre um perfil Github</h4>
            <input
                value={"oi"}
                className="card-form card-form-text"
                //onChange={}
                placeholder="Preço do produto"
            />
            <div className="btn-card">
                <ButtonIcon text="Buscar" />
            </div>
        </div>
    );
}

export default BaseForm;