const axios = require('axios');
module.exports = {
  get: async (req, res) => {
    try {
      const delayResult = await axios.get('https://httpbin.org/delay/5');
      if (delayResult) {
        return res.send('OK');
      } else {
        return res.status(400).json({ message: 'delay sever error' });
      }
    } catch (error) {
      console.error(error);
    }
  },
};
