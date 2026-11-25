import { connectDB } from "@/src/lib/db";
import { NextResponse } from "next/server";

export async function GET():Promise<NextResponse> {
    try{
        await connectDB();

        return NextResponse.json({
            success:true,message:"MongoDB Connection Success"
        })
    }catch(error){
        return NextResponse.json({
            success:false,message:"MongoDB Connection Failed"
        },{status:500})
    }
}