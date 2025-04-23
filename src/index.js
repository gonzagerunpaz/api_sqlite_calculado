const express = require("express");
const app = express();
const PORT = process.env.PORT ?? 3001;
const { userRoute, rolRoute } = require("./routes");

app.use(express.json());
app.use("/user", userRoute);
app.use("/roles", rolRoute);

app.listen(PORT, () => {
  console.log(`App iniciada en el puerto ${PORT}.🚀`);
});
