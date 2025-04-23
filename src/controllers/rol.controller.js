const getRoles = (req, res) => {
  res.status(200).json({ mensaje: "Hola desde la ruta roles." });
};

const getRolById = (req, res) => {
  res.status(200).json({ mensaje: `Recibi el id del rol: ${req.params.id}` });
};

module.exports = { getRoles, getRolById };
