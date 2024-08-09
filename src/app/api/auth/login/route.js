import { connect } from "@/database/connect"
import User from "@/models/User";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';


connect();

export async function POST(req) {
    try {
        const { email, password } = await req.json();

        // Find user by email
        const user = await User.findOne({ email });

        if (!user) {
            return NextResponse.json({
                message: "Email does not registered"
            }, { status: 404 });
        }

        // password match
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return NextResponse.json({
                message: "Password do not match"
            }, { status: 404 });
        }

        const tokenData = {
            id: user?._id
        }

        const token = await jwt.sign(tokenData, process.env.JWT_SECRET, { expiresIn: "24h" });

        const response = NextResponse.json({
            message: "LogIn SuccessFully",
        }, { status: 200 });

        response.cookies.set("token", token, {
            httpOnly: true
        });

        return response;


    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: "Something went wrong" }, { status: 500 });
    }
}