import React, { useState } from 'react';
import axios from 'axios';
import * as S from './styled';
import { useNavigate } from 'react-router-dom';

export default function Home(props) {
    const navigate = useNavigate();
    const [usuario, setUsuario] = useState('');
    const [erro, setErro] = useState(false);

    function handlePesquisa() {
        axios.get(`https://api.github.com/users/${usuario}/repos`)
            .then(response => {
                const repositories = response.data;
                const repositoriesName = [];
                // eslint-disable-next-line array-callback-return
                repositories.map((repository) => {
                    repositoriesName.push(repository.name);
                });
                localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));
                setErro(false);
                navigate('/repositories');
            })
            .catch(err => {
                setErro(true);
            });
    }

    return (
        <S.HomeContainer>
            <S.Title>GitHub User Repos</S.Title>
            <S.Content>
                <S.Input autoFocus className="usuarioInput" placeholder="Type user" value={usuario} onChange={e => setUsuario(e.target.value)} />
                <S.Button type="button" onClick={ handlePesquisa }>Search</S.Button>
            </S.Content>
            {erro ? <S.ErrorMsg>Error. Try again.</S.ErrorMsg> : ''}
        </S.HomeContainer>
    );
}