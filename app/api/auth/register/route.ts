import { connectDB } from "@/src/lib/db";
import users from "@/src/models/user";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";


export async function POST(request:NextRequest):Promise<NextResponse>{
    try{
        await connectDB()
        const {name,email,password}=await request.json()
        if(!name || !email || !password){
            return NextResponse.json({success:false,message:"Input Field must Filled"},{status:400})
        }
        if(password.length<8){
            return NextResponse.json({success:false,message:"Password should be more than 8 charectors"},{status:400})
        }
        //Check Existing User
        const existingUser=await users.findOne({email:email.toLowerCase().trim()})
        if(existingUser){
            return NextResponse.json({success:false,message:"User Already Exist"},{status:409})
        }

        //Adding New USer
        const encPass=await bcrypt.hash(password,10)
        const newUser=await users.create({name,email:email.toLowerCase().trim(),password:encPass})


        return NextResponse.json({success:true,message:"User created Succcessfully",data:newUser},{status:201})

    }catch(error){
        console.log(error);
        return NextResponse.json({success:false,message:"Internal Server Error"},{status:500})
        
    }
}