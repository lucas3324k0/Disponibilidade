import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Admin.css';
import { useEffect } from 'react';
import ApiGet from '../../hooks/ApiGet';
import DeletarUsuarios from '../../hooks/DeletarUsuarios';

const Admin = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { Validacao } = location.state || { Validacao: false }; // Verifica se a validação foi passada
    const { data, loading, error } = ApiGet(); // Use o hook para obter dados

    useEffect(() => {
        if (!Validacao) {
            navigate('/loginAdm');
        }
    }, [navigate, Validacao]);

    
    const contagem = data.length


    // Verifica se a API está carregando
    if (loading) {
        return <div>Carregando...</div>;
    }

    // Verifica se houve um erro na chamada da API
    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            <div className='menu'>
                <Link className='home' to={'/'}>Home</Link>
                
            </div>
            <div className='delete'>
            <DeletarUsuarios />
            </div>
            <h3>Disponibilidades:</h3>
            <br />
            <div className='container-admin'>
                <table>
                    <thead>
                        <tr >
                            <th className='title'>Nome</th>
                            <th className='title'>Dias Disponíveis</th>
                            <th className='title'>Cargo</th>
                            <th className='title'>Instrumento</th>
                        </tr>
                    </thead>
                    <tbody>
                    
                        {data == 0 ? (<h3>Sem dados</h3>) : 
                        (<>
                        {data.map((item, index) => (
                            <tr key={index}>
                                <td>{item.nome}</td>
                                <td>{item.dias}</td>
                                <td>{item.categoria}</td>
                                <td>{item.cargo}</td>
                                
                            </tr>
                        ))}
                        </>
                    )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Admin;
