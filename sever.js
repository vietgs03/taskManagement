const express =  require("express") ;
const mongoose = require('mongoose');
const Task = require('./models/task');
var bodyParser = require('body-parser');
require('dotenv').config();
const app  = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const port = process.env.PORT || 8888;

app.get('/',(req,res)=>{
    res.send('hello wordaaaa123123a as');
});
app.post('/tasks', async (req, res) => {
    try {
      const { title, description, deadline, priority, createdBy, assignedTo } = req.body;
  
      if (!title) {
        return res.status(400).json({ error: 'Title is required' });
      }
  
      const task = new Task({
        title,
        description,
        deadline,
        priority,
        createdBy,
        assignedTo
      });
  
      const savedTask = await task.save();
      // sử dụng await để đợi task.save thực hiện xong mới thực hiện câu tiếp theo nếu ko nó sẽ trả ra null nhưng vẫn create dc data
      
      res.json(savedTask);
    } catch (error) {
      console.error('Error creating task:', error);
      res.status(500).json({ error: 'Failed to create task. Please try again later.' });
    }
  });
  // test case 
//   {
//     "title": "Task 1",
//     "description": "Description 1",
//     "deadline": "2023-07-15",
//     "priority": "medium",
//     "createdBy": "64a7da912c6674fe93f426be",
//     "assignedTo": "64a7db912c6674fe93f426bf"
//   }
app.get('/tasks/:taskId',(req,res)=>{
    const taskId=req.params.taskId;
    Task.findById(taskId)
    .then((task)=>{
        if(!task)
        {
            res.status(404).json({error:'task not found'});
        }
        else
        {
            res.json(task)
        }
    })
    .catch((error)=>{
        console.error('Error fetching task:', error);
        res.status(500).json({ error: 'Failed to fetch task' });
    })

});

// kết nối database mongodb
// fix 1 vài issue khi client - sever của bạn không nhận localhost hoặc khi run build nó báo lỗi kết nối database 
// thay localhost thành 127.0.0.1 là có thể chạy được
mongoose.connect('mongodb://127.0.0.1:27017/TaskManagement',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=>{
        console.log('Connected to mongodb Taskmanagement');
        // khởi động máy chủ 
        app.listen(port,()=>{

            console.log(`connection success to localhost:${port}`);
        });

    })
    .catch((error)=>{
        console.error('Error connecting to mongodb',error);
    });