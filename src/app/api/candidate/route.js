import connectDB from "@/utils/db";
import Candidate from "@/models/Candidate";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const {
    candidateName,
    subject,
    candidateEmail,
    candidatePhone,
    address,
    dateOfBirth,
    image,
  } = await request.json();

  await connectDB();

  const newCandidate = new Candidate({
    candidateName,
    subject,
    candidateEmail,
    candidatePhone,
    address,
    dateOfBirth,
    image,
  });

  try {
    await newCandidate.save();
    return new NextResponse("Candidate has been created", {
      status: 201,
    });
  } catch (err) {
    return new NextResponse(err.message, {
      status: 500,
    });
  }
};


