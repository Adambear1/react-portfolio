const { Model, Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/index");

class Post extends Model {}

Post.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    learningExp: {
      type: DataTypes.ARRAY,
      allowNull: false,
    },
    githubCode: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    githubRepo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { sequelize, modelName: "post" }
);
// sequelize.sync();
module.exports = Post;
