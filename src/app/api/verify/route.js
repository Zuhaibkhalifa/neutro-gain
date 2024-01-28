// app/api/verify.js
import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    // Parse the incoming request data
    const data = await request.json();
    const codeToVerify = data.code;

    // Load the product codes from the JSON file
    const filePath = path.join(process.cwd(), "codes.json");
    const jsonCodes = fs.readFileSync(filePath);
    const productCodes = JSON.parse(jsonCodes);

    // Check if the provided code is valid
    if (productCodes.includes(codeToVerify)) {
      return NextResponse.json({ valid: true });
    } else {
      return NextResponse.json({ valid: false });
    }
  } catch (error) {
    return new Response("Internal Server Error", { status: 500 });
  }
}
