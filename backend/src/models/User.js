import mongoose from "mongoose";
import bcrypt from "bcryptjs"
// import { nanoid }from "nanoid";
const userSchema=new mongoose.Schema(
    {
//          _id: {
//     type: String,
//     default: () => nanoid(10), // 10-character short unique ID
//   },
        fullName:{
            type:String,
            required:true,
        },
        email:{
            type:String,
            required:true,
            unique:true,
        },
        password:{
            type:String,
            required:true,
            minlength:6,
        },
        bio:{
            type:String,
            default:"",
        },
        profilePic:{
            type:String,
            default:"",
        },
        nativeLanguage:{
            type:String,
            default:"",
        },
        learningLanguage:{
            type:String,
            default:"",
        },
        location:{
            type:String,
            default:"",
        },
        isOnbroaded:{
            type:Boolean,
            default:false,
        },
        friends:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:"User",
            }
        ]
    },
    {timestamps:true});
        //pre hook
    userSchema.pre("save",async function(next){
      if(!this.isModified("password"))return next();
        try {
               const salt=await bcrypt.genSalt(10);
               this.password=await bcrypt.hash(this.password,salt);

               next();

        } catch (error) {
            next(error)
        }
    });


      userSchema.methods.matchpassword=async function (enterpassword){
        const isPasswordCorrect=await bcrypt.compare(enterpassword,this.password);
        return isPasswordCorrect;
      }

    const User=mongoose.model("User",userSchema);


    export default User;