import connectMongoDB from "@/libs/mongo";
import Blog from "@/models/blog.schema";
import { NextResponse } from "next/server";

// Update a blog post
export async function PUT(request, { params }) {
    const { id } = params;
    const { newTitle: title, newBody: body } = await request.json();
    await connectMongoDB();
    await Blog.findByIdAndUpdate(id, { title, body });
    return NextResponse.json({ message: 'Blog Updated' }, { status: 200 });
}

// Get blog post by ID
export async function GET(request, { params }) {
    const { id } = params;
    await connectMongoDB();
    const blogPost = await Blog.findOne({_id: id});
    return NextResponse.json({ blogPost }, { status: 200 });
}