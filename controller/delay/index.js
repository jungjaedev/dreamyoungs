module.exports = {
  get: (req, res) => {
    try {
      console.log('delay');
    } catch (error) {
      console.error(error);
    }
  },
};
