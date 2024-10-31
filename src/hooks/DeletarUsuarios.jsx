import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const DeletarUsuarios = () => {
    const [usuarios, setUsuarios] = useState([]);

    // Carrega os dados ao montar o componente
    useEffect(() => {
        const fetchUsuarios = async () => {
            try {
                const response = await fetch('http://localhost:3000/disponibilidades');
                const data = await response.json();
                setUsuarios(data);
            } catch (error) {
                console.error('Erro ao carregar dados:', error);
            }
        };

        fetchUsuarios();
    }, []);

    const handleDelete = async (event) => {
        event.preventDefault();
        console.log("Tentando deletar todos os dados...");

        try {
            // Deletar cada recurso
            await Promise.all(usuarios.map(async (usuario) => {
                const response = await fetch(`http://localhost:3000/disponibilidades/${usuario.id}`, {
                    method: 'DELETE',
                });
                if (!response.ok) {
                    throw new Error(`Erro ao deletar usuário ${usuario.id}: ${response.statusText}`);
                }
            }));

            // Atualiza o estado após a deleção
            setUsuarios([]);
            console.log('Todos os dados deletados com sucesso!');
        } catch (error) {
            console.error('Erro na deleção:', error);
        }
    };

    return (
        <Link className='del' onClick={handleDelete} to="#">
            Deletar tudo
        </Link>
    );
};

export default DeletarUsuarios;
