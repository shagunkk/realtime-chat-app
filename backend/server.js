import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";
import cookieParser from "cookie-parser";

const app = express();
const PORT = process.env.port || 5000;

dotenv.config();

// parses the incoming requests with JSON payloads (from req.body)
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

// app.get("/", (req, res) => {
// 	// our root route
// 	res.send("Hello World!!");
// });

// app.get("/api/auth/signup", (req, res) => {
// 	console.log("Sign up route");
// });

// app.get("/api/auth/login", (req, res) => {
// 	console.log("Log in route");
// });

// app.get("/api/auth/logout", (req, res) => {
// 	console.log("Log out route");
// });

app.listen(PORT, () => {
	connectToMongoDB();
	console.log(`Server running on port ${PORT}`);
});
