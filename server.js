const app = require("./app.js");
const connectDB = require("./DB/connectDB");
const cors = require("cors");

require("dotenv").config({ path: "./BookList/.env" });

// port and mongoDB url
const PORT = process.env.PORT || 5000;
const url = process.env.MONG_URI;

// app.use(
//   cors({
//     origin: "*",
//     methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
//   })
// );


// Connect to database and start the server
const startServer = async () => {
  try {
    await connectDB(url).then(() => {
      app.listen(
        PORT,
        console.log(
          `Connected to Database and server is running on PORT : ${PORT}`
        )
      );
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
