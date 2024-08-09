import { connect } from "@/database/connect";
import { getDataFromToken } from "@/helpers";
import Movie from "@/models/Movie";
import { NextResponse } from "next/server";


connect();
export async function POST(req) {
    try {
        const user = await getDataFromToken(req);
        console.log(user);

        const data = await req.json();
        console.log(data);

        const movie = await Movie.create({
            userId: user?.id,
            title: data.title,
            publish_year: data.publish_year,
            banner: data.banner
        })

        return NextResponse.json({ message: "Movie Created Successfully."},{status:201})
    } catch (err) {
        return NextResponse.json({ message: "Something went wrong." }, {status:500})
    }
}