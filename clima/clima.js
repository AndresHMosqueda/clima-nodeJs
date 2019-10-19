const axios = require('axios');

const getClima = async(lat, lon) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=34e37f4a6f336f18def1350091262509&units=metric`)

    return resp.data.main.temp;
}

module.exports = {
    getClima
}
