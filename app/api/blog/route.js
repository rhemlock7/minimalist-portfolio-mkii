import connectMongoDB from "@/libs/mongo";
import Blog from "@/models/blog.schema";
import { NextResponse } from "next/server";

// Create a new blog post
export async function POST(request) {
    const { title, body } = await request.json();
    await connectMongoDB();
    await Blog.create({ title, body });
    return NextResponse.json({ message: 'Blog Created' }, { status: 201 });
}

// Get ALL blog posts
export async function GET(request) {
    await connectMongoDB();
    const blogs = await Blog.find();
    return NextResponse.json({ blogs });
}

// Delete a blog post
export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get('id');
    await connectMongoDB();
    await Blog.findByIdAndDelete(id);
    return NextResponse.json({ message: 'Blog Deleted' }, { status: 200 });
} 