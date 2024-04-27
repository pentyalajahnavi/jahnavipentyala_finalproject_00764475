const http = require("http");
const fs = require("fs");
const path = require("path");
const { MongoClient } = require("mongodb");

const PORT = 4475;

const getExamDetails = async (client) => {
  const cursor = client.db("ExamsDB").collection("ExamsCollection").find({});
  const results = cursor.toArray();
  return results;
};

http
  .createServer(async (req, res) => {
    console.log(req.url);
    if (req.url === "/api") {
      const URL =
        "mongodb+srv://jpent2:Manoj0522@cluster0.r1mei7z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
      const client = new MongoClient(URL);
      try {
        await client.connect();
        console.log("Database connected successfully!");
        const examData = await getExamDetails(client);
        console.log(JSON.stringify(examData));
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.writeHead(200, { "content-type": "application/json" });
        res.end(JSON.stringify(examData));
      } catch (err) {
        console.log("Error in connecting database", err);
      } finally {
        await client.close();
        console.log("Database is closed");
      }
    } else {
      let contentType = "";
      const fileRoute = path.join(
        __dirname,
        "public",
        req.url === "/" ? "index.html" : req.url.slice(1)
      );
      if (fileRoute.endsWith(".png")) contentType = "image/png";
      else if (fileRoute.endsWith(".jpg") || fileRoute.endsWith(".jpeg"))
        contentType = "image/jpeg";
      else contentType = "text/html";
      fs.readFile(fileRoute, (err, data) => {
        if (err) {
          if (err.code === "ENOENT") {
            res.writeHead(404, { "content-type": "text/html" });
            res.end("<h1>404 Page not found!</h1>");
          } else {
            res.writeHead(500, { "content-type": "text/plain" });
            res.end("File can't be opened/read");
          }
        } else {
          res.writeHead(200, { "content-type": contentType });
          res.end(data);
        }
      });
    }
  })
  .listen(PORT, () => console.log(`Server is running on ${PORT}`));
