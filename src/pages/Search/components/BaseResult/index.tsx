import ButtonIcon from 'core/components/ButtonIcon';
import { URL_GIT, makeRequest } from 'core/utils/request';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ImageLoader from '../Loaders/ImageLoader';
import InfoLoader from '../Loaders/InfoLoader';
import { Result } from './../../../../core/types/Result';
import './styles.css';

type Props = {
    user: string;
}


const BaseResult = ({ user }: Props) => {

    const [result, setResult] = useState<Result>();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        makeRequest({ url: `/${user}` })
            .then(response => setResult(response.data))
            .finally(() => {
                setIsLoading(false);
            })
    }, [user]);

    return (

        <div className="card-result-container">
            <div className="inner-box1">
                {isLoading ? <ImageLoader /> :
                    <>
                        <img src={result?.avatar_url} alt={result?.login} className="card-img" />

                        <div className="button-position">
                            <Link to={{ pathname: `${URL_GIT}/${user}` }} target="_blank">
                                <ButtonIcon text="Ver perfil" />
                            </Link>
                        </div>
                    </>
                }
            </div>
            {isLoading ?
                <div className="loaderInfoPosition"><InfoLoader /></div>
                :
                <>

                    <div className="inner-box2">
                        <div className="info-align">
                            <div className="card-result-fragment">
                                <h2 className="card-fragment-text">
                                    Repositórios públicos: {result?.public_repos}
                                </h2>
                            </div>
                            <div className="card-result-fragment">
                                <h2 className="card-fragment-text">
                                    Seguidores: {result?.followers}
                                </h2>
                            </div>
                            <div className="card-result-fragment">
                                <h2 className="card-fragment-text">
                                    Seguindo: {result?.following}
                                </h2>
                            </div>
                        </div>

                        <div className="card-box-info">
                            <h3 className="text-size-color">Informações</h3>
                            <h3 className="card-result-text card-result"><strong>Empresa: </strong>  {result?.company} </h3>
                            <h3 className="card-result-text card-result"><strong>Website/Blog: </strong> {result?.blog} </h3>
                            <h3 className="card-result-text card-result"><strong>Localidade: </strong> {result?.location} </h3>
                            <h3 className="card-result-text card-result">
                                <strong>Membro desde: </strong> {dayjs(result?.created_at).format('DD/MM/YYYY')}
                            </h3>
                        </div>


                    </div>
                </>
            }
        </div >

    );
}

export default BaseResult;