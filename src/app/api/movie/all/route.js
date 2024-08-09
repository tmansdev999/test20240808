import { connect } from "@/database/connect";
import { getDataFromToken, getSearchParams } from "@/helpers";
import Movie from "@/models/Movie";
import { NextResponse } from "next/server";



connect();
export async function GET(req) {
    try {
        const user = await getDataFromToken(req);

        const page = Number(getSearchParams(req.url, "page")) || 1;

        const limit = process.env.NEXT_PUBLIC_LIMIT_PAGINATION;
        const skip = (page - 1) * limit;

        const movies = await Movie.find({ userId: user?.id }).skip(skip).limit(limit);


        return NextResponse.json({
            movies
        }, { status: 200 })

    } catch (err) {
        console.log(err);
        return NextResponse.json({
            message: "Something went wrong",
        }, { status: 500 })
    }
}