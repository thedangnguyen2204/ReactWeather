var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=705b698c264b886332ced63274169a1b&units=metric';
//705b698c264b886332ced63274169a1b
module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
    // url = 'loclahost:3000?skldfkjsf=' + query
    // url = `localhost:3000?skdlfjksdjf=${query}` + "gfhgh"

    return axios.get(requestUrl).then(function (res) {
      // debugger;
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }
    }, function (res) {
      // debugger;
      console.log(res);
      throw new Error(res.response.data.message);
    });
  }
}
