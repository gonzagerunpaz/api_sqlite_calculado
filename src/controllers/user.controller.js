const getUser = (req, res) => {
  res.status(200).json({ mensaje: "Hola desde la ruta user." });
};

const getUserById = (req, res) => {
  res.status(200).json({ mensaje: `Recibi el id: ${req.params.id}` });
};

module.exports = { getUser, getUserById };
