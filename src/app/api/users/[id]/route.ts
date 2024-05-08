import { NextResponse } from "next/server";
import data from "../../../../components/data.json"

export async function GETId(request:Request, context:any) {
    const {params} = context;
    const user = data.filter((x)=>params.userId === x.id.toString())

    return NextResponse.json({
        user
    })
}