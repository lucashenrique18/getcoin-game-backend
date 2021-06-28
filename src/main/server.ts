import express from "express";
import { bodyParser, cors, contentType } from "./middlewares";
import setupRoutes from "./config/routes";

const PORT = process.env.PORT || 3000;

const app = express();
app.use(bodyParser);
app.use(cors);
app.use(contentType);
setupRoutes(app);
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
