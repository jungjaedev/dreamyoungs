module.exports = {
  get: (req, res) => {
    try {
      res.json({ test2: 'OK' });
    } catch (error) {
      console.error(error);
    }
  },
};
