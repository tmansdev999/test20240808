import mongoose from "mongoose";
import User from "./User";

const movieSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: User,
        required: true
    },
    publish_year: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true
    },
    banner: {
        required: true,
        type: String
    }
}, { timestamps: true });

const Movie = mongoose.models.Movie || mongoose.model("Movie", movieSchema, "Movie");

export default Movie