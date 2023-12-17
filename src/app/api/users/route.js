import User from "@/models/User";
import connectDB from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async () => {
    await connectDB();
  
    try {
      const users = await User.find();
      return new NextResponse(JSON.stringify(users), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (err) {
      return new NextResponse(err.message, {
        status: 500,
      });
    }
  };