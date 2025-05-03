const axios = require('axios');
const API_URL = 'https://socialpanel.app/adminapi/v2/orders';

// GET orders controller
const getOrders = async (req, res) => {
    console.log(req.query)
    try {
        const { limit, offset } = req.query;

        // API'ye isteği ilet
        const response = await axios.get(API_URL, {
            headers: {
                'Content-Type': 'application/json',
                'X-Api-Key': 'co393qbx4pdh2xfq08goc8a79k4mtjw1bcyzh2s11xy1a9frd1t1d4b32ih7k30u',

            },
            params: {
                limit,
                offset,
                service_ids: '4250,2169,1398'
            },
        });

        // API'den gelen veriyi frontend'e ilet
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching data from API:', error);
        res.status(500).json({ message: 'Error fetching data from the API' });
    }
};

module.exports = {
    getOrders,
};
