const axios = require('axios');

const getLugarLatLng = async dir => {

    const encodedUrl = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        headers: { 'x-rapidapi-key': 'fcc4cfc279mshff63c53bc630480p1e6f68jsnb38aafe88abb' }
    });

    const resp = await instance.get() //Debe traer la respuesta y almacenarla en la constante
       
    if (resp.data.Results.length === 0 ) {
        throw new Error(`No hay resultados para ${dir}`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lon = data.lon;

     return {
         direccion,
         lat,
         lon
     }   

}

module.exports = {
    getLugarLatLng
}
