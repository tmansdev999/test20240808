import jwt from 'jsonwebtoken';

export const getDataFromToken = async (req) => {
    try {
        const token = req.cookies.get("token")?.value || "";

        const decodedToken = await jwt.verify(token, process.env.JWT_SECRET);
        return decodedToken;

    } catch (err) {
        // console.log(err);
        throw new Error(err?.message)
    }
}


export function getSearchParams(url, name) {
    const searchParams = new URLSearchParams(new URL(url).search);
    const result = searchParams.get(name);

    return result;
}