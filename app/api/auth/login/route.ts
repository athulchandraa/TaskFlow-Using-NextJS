import { connectDB } from "@/src/lib/db";
import users from "@/src/models/user";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken"


export async function POST(request:NextRequest):Promise<NextResponse>{
    try{
        await connectDB()
        const {email,password}=await request.json()
        if(!email || !password){
            return NextResponse.json({success:false,message:"All Fields are required"},{status:400})
        }

        const user=await users.findOne({email:email.toLowerCase().trim()})
        if(!user){
            return NextResponse.json({success:false,message:"User Not Found"},{status:401})
        }

        const isPasswordMatch=await bcrypt.compare(password,user.password)
        if(!isPasswordMatch){
            return NextResponse.json({success:false,message:"Incorrect Password"},{status:401})
        }

        //Generate JWT

        const secretKey=process.env.JWT_SECRET
        if(!secretKey){
            return NextResponse.json({success:false,message:"Authentication kEy Missing"},{status:401})
        }
        const token=jwt.sign({userMail:email},secretKey,{expiresIn:"1d"})

        const response=NextResponse.json({
            success:true,message:"Login Success",user,
        })

        //Response Saved in Cookies
        response.cookies.set("token",token,{
            httpOnly:true,secure:process.env.NODE_ENV==="production",sameSite:"lax",path:'/',maxAge:60*60*24
        })

        return response

    }catch(error){
        console.error("Login Error: ",error);
        return NextResponse.json({success:false,message:"Internal Server error"},{status:500})
        
    }
}