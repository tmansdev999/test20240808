import { connect } from "@/database/connect";
import { getDataFromToken, getSearchParams } from "@/helpers";
import Movie from "@/models/Movie";
import { NextResponse } from "next/server";



connect();
export async function GET(req) {
    try {
       
        const movieId = getSearchParams(req.url, "movieId");
        
        const movie = await Movie.findById(movieId)


        return NextResponse.json({
            movie
        }, { status: 200 })

    } catch (err) {
        console.log(err);
        return NextResponse.json({
            message: "Something went wrong",
        }, { status: 500 })
    }
}