const { DataTypes } = require("sequelize");
const dbConnection = require("../db/connection");

const todoModel = dbConnection.define("todos", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  dueDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
}, {
    timestamps: false
});

todoModel
  .sync()
  .then(() => {
    console.log("Todo model has been synced to the database");
  })
  .catch((err) => {
    console.log(
      `Todo model not synced properly with error message: ${err.message}`
    );
  });

module.exports = todoModel;
