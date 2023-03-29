const express = require("express");
const cors = require("cors");
const Router = require("./routes/routes.js");
const errorMiddleware = require("./middlewares/error-middleware.js");
const PORT = 5000;

const app = express();

const corsOptions = {
  //origin: "http://localhost:5173",
  origin: "*",
};

app.use(cors(corsOptions));
app.use(express.json());

app.use(function (req, res, next) {
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, Origin, Content-Type, Accept"
  );
  next();
});

app.use(Router);
app.use(errorMiddleware);

//Запускаем прослушивание сервера
app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
