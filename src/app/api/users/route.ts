import { NextResponse } from "next/server";
import data from "../../../components/data.json"


export async function GET() {
    return NextResponse.json({
        data
    })
}

export async function POST(request: Request) {
    const body = await request.json();

    const newUser = {
        name: body.name,
        age: parseInt(body.age),
        id: data.length + 1
    };
    data.push(newUser);
    return NextResponse.json({
        data
    })
}
