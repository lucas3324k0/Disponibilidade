import axios from 'axios';

// Use a URL da sua API real
const apiUrl = 'http://localhost:3000/disponibilidades';

const fetchData = async () => {
  try {
    const response = await axios.get(apiUrl);
    console.log(response.data);
  } catch (error) {
    console.error('Erro ao buscar dados:', error);
  }
};
