import axios from 'axios';

const ApiPost = (data) => {
    axios.post('http://localhost:3000/disponibilidades', data)
        .then(response => console.log(response.data)) // Mostra a resposta no console
        .catch(error => console.log(error));

};

export default ApiPost;
