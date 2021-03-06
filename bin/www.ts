import * as http from "http";
import app from "../app";

const port = parseInt(process.env.PORT, 10) || 8000;
app.set("port", port);

try {
  const server = http.createServer(app);
  server.listen(port);
} catch (error) {
  console.error(error);
}
