const http = require("http")

const mongodb = require("mongodb");
let db;
const connectionString = "mongodb+srv://Mayk:Timur1707!@cluster0.hc86m.mongodb.net/Reja"

mongodb.connect(
    connectionString, {
        userNewUrlParser: true,
        useUnifiedTopology: true,
    }, 
    (err, client) => {
        if (err) console.log("ERROR on connection MongoDB");
            else {
                console.log("MongoDB connection succed");
                console.log(client);
                const app = require("./server");
                const server = http.createServer(app);
                let PORT = 3000;
                server.listen(PORT, function (){
                console.log(`The server ishga tushdi: ${PORT}, http://localhost:${PORT}`);
});
            }
        }
    
)