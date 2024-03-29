import express from "express";
import cors from "cors";
import { userRoutes } from "./app/modules/User/user.routes";
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/v1/user", userRoutes);
app.get("/", (req, res) => {
  res.json({
    message: "hello prisma",
  });
});

export default app;
