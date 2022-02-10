const { Users } = require('../../models');

module.exports = {
  // 전체 유저 목록
  get: async (req, res) => {
    try {
      const users = await Users.findAll();
      return res.json(users);
    } catch (error) {
      console.error(error);
      return res.status(400).json({ message: 'sever error' });
    }
  },
  // 새로운 유저 생성
  post: async (req, res) => {
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
};
