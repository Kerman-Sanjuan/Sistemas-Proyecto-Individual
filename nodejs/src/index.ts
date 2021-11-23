import express from "express";
import cors from "cors";
import dbRoutes from "./routes/dbRoutes";
import "reflect-metadata";
import { createConnection } from "typeorm";

const app = express();
const port = 5005;
createConnection();
// Middleware
app.use(cors());
app.use(express.json());
app.use("/geolocate", dbRoutes);

app.listen(port, () => {
  console.log(`Server express escuchando en http://localhost:${port}`);
});
