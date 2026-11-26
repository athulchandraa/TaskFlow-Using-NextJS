import mongoose, { Document, Schema } from "mongoose";

export interface ITask extends Document{
    title:string;
    description:string;
    status:string;
    priority:string;
    dueDate?:Date;
    userEmail:string;
}

const taskSchema=new Schema<ITask>({
    title:{
        type:String,
        required:true,
        trim:true
    },
    description:{
        type:String,
        default:""
    },
    status:{
        type:String,
        enum:["Pending","In Progress","Completed"],
        default:"Pending"
    },
    priority:{
        type:String,
        enum:["Low","Medium","High"],
        default:"Medium"
    },
    dueDate:{
        type:Date,
    },
    userEmail:{
        type:String,
        required:true
    }
},
{timestamps:true})

const tasks=mongoose.models.tasks || mongoose.model<ITask>("tasks",taskSchema)

export default tasks