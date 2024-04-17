import express from "express";
import {tasks} from "./data.js";
import bodyParser from "body-parser";
const app = express();
app.use(bodyParser.json());
app.get("/tasks", async(req, res) =>{
    res.json(tasks);

});
app.post("/tasks", async(req, res) =>{
    const data = req.body;
    console.log("Task data:", data);

    //them task vao danh sach
    tasks.push(data);
    res.json(data);

});
app.get("/tasks/:id", async (req, res)=> {
    const params = req.params;
    const id = params.id;
    console.log("GET TASKS BY ID:", id);
    const task = task.find((item)=> item.id === id);
    res.json({
        task,
    });
});

app.delete("/task/:id", async (req,res)=>{
    const params = req.params;
    const id = params.id;
    console.log("DELETE TASKS BY ID:", id);
    tasks = tasks.filter((item)=> item.id !== id);
    res.json({
        status: true,
    });
});

app.listen(3000, () => {
    console.log("ExpressJS Sever is running on port 3000");
});
