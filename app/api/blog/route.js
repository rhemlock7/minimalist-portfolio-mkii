import connectMongoDB from "@/libs/mongo";
import Blog from "@/models/blog.schema";
import { NextResponse } from "next/server";

export async function POST(request) {
    const { title, body } = await request.json();
    await connectMongoDB();
    await Blog.create({title, body});
    return NextResponse.json({message: 'Blog Created'}, {status: 201});
}

export async function GET(request) {
    await connectMongoDB();
    const blogs = await Blog.find();
    return NextResponse.json({ blogs });
}