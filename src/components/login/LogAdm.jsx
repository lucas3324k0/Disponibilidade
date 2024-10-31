import { useState } from 'react';
import './LogAdm.css';
import { Link, useNavigate } from 'react-router-dom';
import Admin from '../admin/UserAdm';

const LogAdm = () => {
    const [nome, setNome] = useState(''); // Estado para o nome do usuário
    const [senha, setSenha] = useState(''); // Estado para a senha
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Verificando as credenciais
        if (nome === 'Admin' && senha === 'Admin') {
            navigate('/admin', { state: { Validacao: true } });     
        } else {
            alert('Login ou senha inválidos');
        }
    };

    return (
        <div className='ContainerAdm'>
             <div className='menu'>
                <Link className='home' to={'/'}>Home</Link>
            </div>
            <h2>Formulário de Login</h2>
            <br />
            <form onSubmit={handleSubmit}>
                <div>
                    <input 
                        type="text"
                        placeholder='Usuário' 
                        value={nome} 
                        onChange={(e) => setNome(e.target.value)} 
                    />
                </div>
                <div>
                    <input 
                        type="password" 
                        placeholder='Senha'
                        value={senha} 
                        onChange={(e) => setSenha(e.target.value)} 
                    />
                </div>
                
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}

export default LogAdm;
