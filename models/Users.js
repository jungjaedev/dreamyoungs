module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define(
    'Users',
    {
      index: {
        type: DataTypes.BIGINT().UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      userName: {
        type: DataTypes.CHAR(64),
      },
      userDesc: {
        type: DataTypes.TEXT(),
      },
      hasCat: {
        type: DataTypes.BOOLEAN,
      },
    },
    {
      timestamps: false,
    }
  );

  return Users;
};
