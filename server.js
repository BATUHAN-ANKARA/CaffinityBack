const express = require("express");
const cors = require("cors");
const { default: helmet } = require("helmet");
const configs = require("./configs/index");
const db = require("./db/index");
const router = require("./router/index");
const consts = require("./consts/index");
const app = express();
// const middlewares = require("./middlewares/index");
const utils = require("./utils/index");
const controller = require("./controllers/index");

const PORT = process.env.PORT || 6000;

configs.serverConfig.initialServerConfig();
utils.helpers.createUploadDir("./uploads");

app.use("/uploads", express.static("uploads"));

app.use(express.json());
app.use(helmet());
const corsOptions = {
  origin: 'https://cihatkarayeell.github.io'
}
app.use(cors(corsOptions));
const ejs = require("ejs");
app.set("view engine", "ejs");

// app.use(middlewares.loggerMiddleware);
// app.use(middlewares.authMiddleware)

app.use(`${process.env.APP_PREFIX}${consts.router.USER}`, router.userRouter);

app.use(`${process.env.APP_PREFIX}${consts.router.TABLES}`, router.tablesRouter);

app.use(`${process.env.APP_PREFIX}${consts.router.ORDERS}`, router.ordersRouter);

app.use(`${process.env.APP_PREFIX}${consts.router.ITEMS}`, router.itemsRouter);

db.mongooseCoonection.connectToMongoDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
  });
});
