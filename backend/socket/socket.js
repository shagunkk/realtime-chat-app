import { Server } from "socket.io";
import http from "http";
import express from "express";
import cors from "cors";

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
	// CORS configuration
	cors: {
		origin: "http://localhost:3000", // Allow requests from localhost:3000
		methods: ["GET", "POST"], // Allow GET and POST methods
		credentials: true, // Allow credentials (cookies, authorization headers) to be sent
	},
});

// Define userSocketMap inside the io.on callback or using closure
io.on("connection", (socket) => {
	console.log("a user connected", socket.id);

	const userSocketMap = {}; // {userId: socketId}

	const userId = socket.handshake.query.userId;
	if (userId != "undefined") userSocketMap[userId] = socket.id;

	io.emit("getOnlineUsers", Object.keys(userSocketMap));

	socket.on("disconnect", () => {
		console.log("user disconnected", socket.id);
		delete userSocketMap[userId];
		io.emit("getOnlineUsers", Object.keys(userSocketMap));
	});
});

export { app, io, server };
