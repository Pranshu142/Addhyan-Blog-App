import http from "http";
import app from "./app.js";
import dbconnection from "./config/db.config.js";

const server = http.createServer(app);

const port = process.env.PORT || 8000;

dbconnection();

server.listen(port, () => {
  console.log(`app started listening on ${port}`);
});
