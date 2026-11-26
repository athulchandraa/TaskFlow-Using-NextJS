import { verifyToken } from "@/src/lib/auth";
import { connectDB } from "@/src/lib/db";
import users from "@/src/models/user";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";


export async function GET(request:NextRequest){
    try{
        await connectDB()
        //Reading JWT Cookie
        const cookieStore=await cookies()
        const token=cookieStore.get("token")?.value

        if(!token){
            return NextResponse.json({
                success:false,message:"Unauthorized. Please Login"
            },{status:401})
        }

        //Verify JWT
        const decoded=await verifyToken(token)
        if(!decoded){
            return NextResponse.json({
                success:false,message:"Invalid / Expired Token"
            },{status:401})
        }

        //Find User Using Email
        const user=await users.findOne({email:decoded.userMail}).select("-password")

        if(!user){
            return NextResponse.json({
                success:false,message:"User not found"
            },{status:404})
        }

        // return User Details

        return NextResponse.json({
            success:true,user
        })

    }catch(error){
        console.error("Get User Error: ",error);
        return NextResponse.json({
                success:false,message:"Internal Server Error"
            },{status:500})
        
    }
}