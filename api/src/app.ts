// server here
import Express from "express";
import cors from "cors";
import productRouter from "./routes/products";
import userRouter from "./routes/users";

const app = Express();

app.use(Express.json());
app.use(cors());

app.use("/products", productRouter);
app.use("/users", userRouter);

const port = 4000;
app.listen(port, () => {
  console.log(`server is running at the port ${port}`);
});
