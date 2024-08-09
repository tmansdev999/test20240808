import { connect } from "@/database/connect"
import User from "@/models/User";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
import { getDataFromToken } from "@/helpers";


export async function GET(req){
    try{
        const tokenData = await getDataFromToken(req);

        return NextResponse.json({
            success:true,
            isLoggedIn:true,
        })
    }catch(err){
        // console.log(err);
        return NextResponse.json({message:"Something went wrong"}, {status:500});
    }
}