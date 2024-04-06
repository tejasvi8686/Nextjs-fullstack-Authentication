import { connect } from "@/dbConfig/dbconfig";
import User from "@/model/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";


connect()


export async function POST(request: NextRequest) {
    try {
        const reqbody = await request.json()
        const { username, email, password } = reqbody

        console.log(reqbody);

        const user = await User.findOne({ email })

        if (user) {
            return NextResponse.json({ error: "User already exists" }, { status: 400 })
        }

    }

    catch (error: any) {
        return NextResponse.json({ error: error.message },
            { status: 500 }
        )
    }
}