const mongoose =require('mongoose');

const taskSchema = mongoose.Schema({
    title:{
        type:String,
        required: true
    },
    description:String,
    deadline:Date,
    priority:{
        type:String,
        enum:['low','medium','high'],
        default:'medium'
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    assignedTo:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

const Task = mongoose.model('Task', taskSchema);
module.exports = Task;