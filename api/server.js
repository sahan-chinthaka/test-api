import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import multer from "multer";
import auth from "./routes/auth.js";
import user from "./routes/user.js";

dotenv.config();
const app = express();
const upload = multer();
const port = 5000;

app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(upload.array());

app.use("/auth", auth);
app.use("/user", user);

app.listen(port, () => {
	console.log(`Server started at ${port}`);
});
