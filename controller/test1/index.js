module.exports = {
  get: (req, res) => {
    try {
      res.send('test1 OK');
    } catch (error) {
      console.error(error);
    }
  },
};
