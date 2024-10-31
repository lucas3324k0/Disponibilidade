import { useState } from 'react';
import { Link } from 'react-router-dom';
import ApiPost from '../../hooks/ApiPost';
import ApiGet from '../../hooks/ApiGet';
import './SendDdisponibilidade.css';

const SendDisponibilidade = () => {
    const [category, setCategory] = useState("");
    const [nome, setNome] = useState('');
    const [dias, setDias] = useState('');
    const [cargo, setCargo] = useState('');
  
    const { data, loading, error } = ApiGet(); // Use o hook para obter dados

    const handleSubmit = (e) => {

        if ( category == 'Backing' || 'Backing_ministro') {
            setCargo(' ')
        }

        e.preventDefault();
        const dataToSend = {
            nome,
            dias,
            cargo: cargo.length <= 2 ? "Nenhum selecionado" :
            cargo,
            categoria: category
        };
        
        ApiPost(dataToSend);
        console.log(nome, dias, cargo, category);
    };

    // Verifica se a API está carregando
    if (loading) {
        return <div>Loading...</div>;
    }

    // Verifica se houve um erro na chamada da API
    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <>
            <div className='menu'>
                <Link className='home' to={'/'}>Home</Link>
            </div>

            <div className="container">
                <div className="Area_input">
                    <h3>Disponibilidade</h3>
                    <br />
                    <form onSubmit={handleSubmit}>
                        <input 
                            type="text" 
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            placeholder='Nome'  
                            required
                        />
                        <input 
                            type="text" 
                            value={dias}
                            onChange={(e) => setDias(e.target.value)}
                            placeholder='Dias separado por vírgula' 
                            required
                        />
                        <select 
                            id='Cargo'
                            onChange={(e) => setCategory(e.target.value)}
                            value={category}
                            required
                        >
                            <option value="" disabled>Selecione o papel</option>
                            <option value="Musico">Músico</option>
                            <option value="Backing">Backing</option>
                            <option value="Backing_ministro">Backing e Ministro</option>
                        </select>
                        {category === "Musico" && (
                            <>
                                <h4>Instrumento</h4>
                                <select 
                                    id='Cargo'
                                    onChange={(e) => setCargo(e.target.value)}
                                    value={cargo} 
                                    required
                                >
                                    <option value="" disabled>Selecione o instrumento</option>
                                    <option value="Qualquer"></option>
                                    <option value="Teclado">Teclado</option>
                                    <option value="Violão">Violão</option>
                                    <option value="Guitarra">Guitarra</option>
                                    <option value="Bateria">Bateria</option>
                                    <option value="Bass">Contra Baixo</option>
                                </select>
                            </>
                        )}
                        <br />
                        <input type="submit" value='Enviar' />
                    </form>
                </div>
            </div>
        </>
    );
};

export default SendDisponibilidade;
