const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://shazam.p.rapidapi.com/search',
  params: {
    term: 'kiss the rain',
    locale: 'en-US',
    offset: '0',
    limit: '5'
  },
  headers: {
    'X-RapidAPI-Key': 'f522a4479bmsh597573f3a09deb8p12bb87jsn8f1c1925536d',
    'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}