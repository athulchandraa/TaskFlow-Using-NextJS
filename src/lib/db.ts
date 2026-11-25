import mongoose from "mongoose"
const dbConnectionString=process.env.DATABASE_URL

if(!dbConnectionString){
    throw new Error("MongoDB URL Mssing...")
}

export const connectDB=async()=>{
    try{
        await mongoose.connect(dbConnectionString)
        console.log("MongoDB Connected Successfull");
        
    }catch(error){
        console.log("MongoDB connection Failed");
        console.log(error);
    }
}