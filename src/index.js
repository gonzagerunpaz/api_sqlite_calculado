const express = require("express");
const app = express();
const PORT = process.env.PORT ?? 3001;
const { userRoute, rolRoute } = require("./routes");
const { sequelize } = require("./db/models");

app.use(express.json());
app.use("/user", userRoute);
app.use("/roles", rolRoute);

app.listen(PORT, async () => {
  await sequelize.authenticate();
  //sequelize.sync({ force: true });
  console.log(`App iniciada en el puerto ${PORT}.🚀`);
});
