const { User } = require("../db/models");

const getUser = async (req, res) => {
  const data = await User.findAll({});
  res.status(200).json(data);
};

const getUserById = async (req, res) => {
  const id = req.params.id;
  const data = await User.findByPk(id);
  res.status(200).json(data);
};

const crearUsuario = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ boyd: req.body, message: error.message });
  }
};

const getSimpleUser = async (req, res) => {
  const data = await User.findAll({
    attributes: ["userName", "edad"],
  });
  res.status(200).json(data);
};

module.exports = { getUser, getUserById, crearUsuario, getSimpleUser };
