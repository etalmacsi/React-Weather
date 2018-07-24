let axios = require('axios');

const OPEN_WEATHER_MAP_URL='http://api.openweathermap.org/data/2.5/weather?appid=9e755ceebcac2310fd259f0b4a6a6b0c&units=metric';

module.exports={
    getCoord:function (location) {

        let encodeCoordURL=encodeURIComponent(location);

        let requestURL=`${OPEN_WEATHER_MAP_URL}&q=${encodeCoordURL}`;

        return axios.get(requestURL).then(function (res) {
            if(res.data.cod && res.data.message){
                throw new Error(res.data.message);
            }else{
                let result= {
                    lon : res.data.coord.lon,
                    lat : res.data.coord.lat,
                };

                return result;
            }
            
        },function (res) {
                throw new Error(res.data.message);
            });


    }  

};