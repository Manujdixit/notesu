const express = require("express");
const notes = require("./data/notes");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const userRoutes = require("./Routes/userRoutes");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");
const noteRoutes = require("./Routes/noteRoutes");

const app = express();
dotenv.config();
connectDB();

app.use(express.json());

app.use(cors());

// app.use(require("./routes"));

app.get("/", (req, res) => {
  res.send("Hello World");
});

// app.get("/api/notes", (req, res) => {
//   res.json(notes);
// });

// app.get("/api/notes/:id", (req, res) => {
//   const note = notes.find((n) => n._id === req.params.id);
//   res.send(note);
// });

app.use("/api/users", userRoutes);
app.use("/api/notes", noteRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on port ${PORT}`));
