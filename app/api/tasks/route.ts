import { verifyToken } from "@/src/lib/auth";
import { connectDB } from "@/src/lib/db";
import tasks from "@/src/models/task";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";




export async function POST(request:NextRequest){
    try{

        await connectDB()
        const cookieStore=await cookies()
        const token=cookieStore.get("token")?.value

        if(!token){
            return NextResponse.json({
                success:false,message:"Login First"
            },{status:401})
        }

        //Verify JWT
        const decoded=verifyToken(token)
        if(!decoded){
            return NextResponse.json({
                success:false,message:"Invalid or Expired Token"
            },{status:401})
        }

        const{title,description,priority,dueDate}=await request.json()
        if(!title?.trim()){
            return NextResponse.json({
                success:false,message:"Title Required"
            },{status:400})
        }

        //Save Task
        const newTask=await tasks.create({
            title,description,priority,dueDate:dueDate,userEmail:decoded.userMail
        })

        return NextResponse.json({
                success:true,message:"New Task addedd Successfully",task:newTask
            },{status:201})


    }catch(error){
        console.error("Create Task Error: ",error);
        return NextResponse.json({
                success:false,message:"Internal Server Error"
            },{status:500})
    }
}

export async function GET(){
    try{

        await connectDB()
        const cookieStore=await cookies()
        const token=cookieStore.get("token")?.value
        console.log("Inside Get All tAsks");
        

        if(!token){
            return NextResponse.json({
                success:false,message:"Please Login"
            },{status:401})
        }
        const decoded=verifyToken(token)

        if(!decoded){
            return NextResponse.json({
                success:false,message:"Invalid Token"
            },{status:401})
        }
        const allTasks=await tasks.find({userEmail:decoded.userMail})

        console.log(allTasks);
        

        if(allTasks){
            return NextResponse.json({
                success:true,message:"Fetched Successfull",allTasks:allTasks
            },{status:200})
        }


    }catch(error){
        console.log(error);
        
        return NextResponse.json({
                success:false,message:"Internal Server Error"
            },{status:500})
    }
}