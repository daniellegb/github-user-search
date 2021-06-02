import { makeRequest } from 'core/utils/request';
import { useEffect, useState } from 'react';
import { Result } from './../../../../core/types/Result';
import './styles.css';

const BaseResult = () => {

    const [result, setResult] = useState<Result>();

    useEffect(() => {
        makeRequest({ url: `/daniellegb` })
            .then(response => setResult(response.data))
    }, []);

    return (
        <>
            <div className="card-result">
                <div>
                    <img src={result?.avatar_url} alt={result?.login} />
                </div>

                <h1>Repositórios públicos: {result?.public_repos}</h1>
                <h1>Seguidores: {result?.followers}</h1>
                <h1>Seguindo: {result?.following}</h1>
                <h2 className="text-blue">Informações</h2>
                <h1>Empresa: {result?.company} </h1>
                <h1>Website/Blog: {result?.blog} </h1>
                <h1>Localidade: {result?.location} </h1>
                <h1>Membro desde: {result?.created_at} </h1>
            </div>

        </>
    );
}

export default BaseResult;