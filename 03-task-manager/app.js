const express = require("express");
const tasks = require("./routes/tasks");
const app = express();
const connectDb = require("./db/connect");
const notFound = require("./middleware/not-found")
const errorHandler = require("./middleware/error-handler")
require("dotenv").config();

// middleware
app.use(express.static('./public'))
app.use(express.json());
app.use("/api/v1/tasks", tasks);
app.use(notFound)
app.use(errorHandler)
const port = process.env.PORT || 3000

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
		app.listen(port, () => console.log(`App is listening at port ${port}...`));
	} catch (error) {
		console.log(error);
	}
};

start();
