const express = require("express");
const cors = require("cors");
const Router = require("./routes/routes.js");
const PORT = 5000;

const app = express();

//Настраиваем кто может стучаться к апишке, тут будет путь к фронту
const corsOptions = {
  origin: "http://localhost:5173",
};

app.use(cors(corsOptions));
app.use(express.json());

//Подключаем наши роуты
app.use(Router);

//Запускаем прослушивание сервера
app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
