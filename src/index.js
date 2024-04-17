import http, { get } from "http";
import {tasks} from "./data.js";

const sever = http.createServer();

// sever.on("request", (req,res )=>{
//     console.log("Handle request:",{
//         url: req.url,
//         method: req.method,
//         body: req.body,
//     });
    
//     const url = req.url;

//     if(url ==="/rediect/gg") {
//         res.writeHead(301, {
//             location: "https://google.com"
//         });
//         res.end( );
//         return;
//     }

    
    // res.end("hello world")

    sever.on("request", async (req, res) => {
        //duong dan client request len
        const url = req.url;
        //http method: GET, POST, PUT....
        const method = req.method;

        switch(url) {
            case "/tasks":
                    if (method === "GET" ) {
                        res.setHeader("Content-Type", "application/json");
                        res.writeHead(200);
                        
                        res.end(JSON.stringify(tasks));
                    }
                    break;
            default:
                res.writeHead(404);
                res.end();
        }
    });

    sever.listen(3000, ()=> {
        console.log("sever is running on port 3000");
    });
