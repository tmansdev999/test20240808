import { getDataFromToken } from "@/helpers";
import Movie from "@/models/Movie";
import { NextResponse } from "next/server";


export async function POST(req) {
    try {
        const user = await getDataFromToken(req);

        const { title, publish_year, banner, movieId } = await req.json();

        const movie = await Movie.findById(movieId);

        if (!movie) {
            return NextResponse.json({
                message: "No Movie Found"
            }, { status: 404 });
        }

        if (movie.userId == user.id) {
            await Movie.findByIdAndUpdate(movieId, {
                $set: {
                    title: title,
                    publish_year: publish_year,
                    banner: banner
                }
            })
            return NextResponse.json({
                message: "Movie Updated SuccessFully"
            }, { status: 200 });
        }
        else {
            return NextResponse.json({
                message: "You can edit your movie only"
            }, { status: 404 });
        }
    } catch (err) {
        console.log(err);
        return NextResponse.json({
            message: "Something went wrong",
        }, { status: 500 })
    }
}   