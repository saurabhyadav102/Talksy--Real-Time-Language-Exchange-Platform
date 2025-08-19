import {StreamChat} from "stream-chat"
import "dotenv/config";
const apiKey=process.env.Stream_API_KEY
const apiSecret=process.env.Stream_API_SECRET

if(!apiKey||!apiSecret){
    console.error("Stream API Key or Secret is missing")
}

const StreamClient=StreamChat.getInstance(apiKey,apiSecret);

export const upsertStreamUser=async(userData)=>{


    try {
           await StreamClient.upsertUsers([userData])
           return userData
    } catch (error) {
        console.error("error upserting stream user :",error)
    }
};
export const generateStreamToken=(userId)=>{

    try {
        //ensure userid is a string
        const useridStr=userId.toString();
        return StreamClient.createToken(useridStr);
        
        
    } catch ( error) {
        console.log("error generating Strram token",error);
    }
}