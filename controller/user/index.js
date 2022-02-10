const { Users } = require('../../models');

module.exports = {
  getAllUsers: async (req, res) => {
    try {
      const users = await Users.findAll();
      return res.json(users);
    } catch (error) {
      console.error(error);
      return res.status(400).json({ message: 'sever error' });
    }
  },
  createUser: async (req, res) => {
    try {
      const { userName, userDesc, hasCat } = req.body;
      if (!userName || !userDesc || !hasCat) {
        return res.status(422).json({ message: 'insufficient parameters supplied' });
      }
      const existingUser = await Users.findOne({ where: { userName } });
      if (existingUser) {
        return res.status(409).json({ message: `userName already exists` });
      }
      const user = await Users.create({ userName, userDesc, hasCat });
      return res.status(201).json({ user, message: 'successfully created' });
    } catch (error) {
      console.error(error);
      return res.status(400).json({ message: 'sever error' });
    }
  },
  checkHasCat: async (req, res) => {
    try {
      const index = req.params.userIndex;
      const user = await Users.findOne({
        where: {
          index,
        },
      });
      if (!user) {
        res.status(404).json({ message: `user doesn't exist` });
      }
      const hasCat = user.dataValues.hasCat;
      return res.json({ hasCat });
    } catch (error) {
      console.error(error);
      return res.status(400).json({ message: 'sever error' });
    }
  },
  updateHasCat: async (req, res) => {
    try {
      const index = req.params.userIndex;
      const user = await Users.findOne({
        raw: true,
        where: {
          index,
        },
      });
      if (!user) {
        res.status(404).json({ message: `user doesn't exist` });
      }
      const updatedData = { ...user, hasCat: !user.hasCat };
      await Users.update(
        { ...updatedData },
        {
          where: {
            index,
          },
        }
      );
      return res.json({ message: 'successfully updated' });
    } catch (error) {
      console.error(error);
      return res.status(400).json({ message: 'sever error' });
    }
  },
};
