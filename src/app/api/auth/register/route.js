import {connect} from "@/database/connect"
import User from "@/models/User";
import { NextRequest,NextResponse } from "next/server";

connect();
export async function POST(req){
    try{
        const {name, email, password}= await req.json();
        console.log(name, email, password);

        if(!name || !password || !email){
            return NextResponse.json({message:"All fields are required"}, {status:400});
        }

        // unique email check

        const isEmailExist = await User.findOne({email});

        if(isEmailExist){
            return NextResponse.json({message:"Email Already Exist"}, {status:400});
        }

        const newUser = new User({
            name, 
            password, 
            email
        })

        await newUser.save();

        return NextResponse.json({message:"User Registered Successfully"}, {status:400});

    }catch(err){
        console.log(err);
        return NextResponse.json({message:"Something went wrong"}, {status:500});
    }
}