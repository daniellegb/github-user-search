import './styles.css';
import ButtonIcon from 'core/components/ButtonIcon';
import { useState } from 'react';
import BaseResult from '../BaseResult';
import WaitingComponent from '../WaitingComponent/Waiting';

const BaseForm = () => {

    const [formData, setFormData] = useState('');
    const [isRequested, setIsRequested] = useState(false);

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(event.target.value);
        setIsRequested(false);
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(formData);
        setIsRequested(true);
    }

    return (
        <>
            <div className="card-search">
                <h4 className="card-text">Encontre um perfil Github</h4>
                <form onSubmit={handleSubmit}>
                    <input
                        value={formData}
                        className="card-form card-form-text"
                        onChange={handleOnChange}
                        placeholder="Usuário Github"
                    />

                    <div className="btn-card">
                        <ButtonIcon text="Buscar" />
                    </div>
                </form>

            </div>
            {isRequested ? <BaseResult user={formData} /> : <WaitingComponent />}
        </>
    );
}

export default BaseForm;