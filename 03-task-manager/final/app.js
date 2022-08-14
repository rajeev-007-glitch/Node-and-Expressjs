const express = require("express");
const tasks = require("./routes/tasks");
const app = express();
const connectDb = require("./db/connect");
require("dotenv").config();

// middleware
app.use(express.json());

// routes
app.get("/hello", (req, res) => {
	res.send("Hello this is Task Manager!");
});

app.use("/api/v1/tasks", tasks);

/*
 * app.get('/api/v1/tasks') - get all the tasks
 * app.post('/api/v1/tasks') - create a new task
 * app.get('/api/v1/tasks/:id') - get a single task
 * app.patch('/api/v1/tasks/:id') - update task
 * app.delete('/api/v1/tasks/:id') - delete tasks
 */

const start = async () => {
	try {
		await connectDb(process.env.MONGO_URI);
		console.log("Connected to DB...");
		app.listen(5000, () => console.log("App is listening at port 5000..."));
	} catch (error) {
		console.log(error);
	}
};

start();
