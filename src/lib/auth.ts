import jwt from "jsonwebtoken"

interface JwtPayload{
    userMail:string;
}

export const verifyToken=(token:string):JwtPayload | null =>{

    try{
        const secret=process.env.JWT_SECRET
        if(!secret){
            throw new Error ("JWT TOKEN MISSING...")
        }
        const decoded=jwt.verify(token,secret)as JwtPayload
        return decoded
    }catch(error){
        return null
    }
}