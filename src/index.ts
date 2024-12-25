import { app } from "./app";
import cors from "cors";

const corsOptions = {
  origin: "http://localhost:5173/",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.get("/", (req, res) => {
  res.json({ test: "Hello word" });
});

app.listen(5000, () => {
  console.log("Escuchando el puerto 5000");
});
