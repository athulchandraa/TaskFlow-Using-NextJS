import mongoose, { Schema } from "mongoose";

export interface IUser extends Document{
    name:String;
    email:String;
    password:String;
    createdAt:Date;
}

const userSchema=new Schema<IUser>(
    {
        name:{
            type:String,
            required:true,
            trim:true
        },
        email:{
            type:String,
            required:true,
            trim:true,
            unique:true,
            lowercase:true
        },
        password:{
            type:String,
            required:true,
        }
    },
    {
        timestamps:true
    }
)

const users=mongoose.models.users || mongoose.model<IUser>("users",userSchema)


export default users