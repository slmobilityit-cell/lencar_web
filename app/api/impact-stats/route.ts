import { NextResponse } from "next/server";
import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";

const BUCKET = "amzn-s3-lencar-web";
const KEY = "distance-reports/latest.json";

export async function GET() {
    try {
        const client = new S3Client({
            region: process.env.AWS_REGION || "ap-southeast-1",
            credentials: {
                accessKeyId: process.env.AWS_ACCESS_KEY_ID || "",
                secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || "",
            },
        });

        const command = new GetObjectCommand({
            Bucket: BUCKET,
            Key: KEY,
        });

        const response = await client.send(command);

        if (!response.Body) {
            return NextResponse.json(
                { message: "Empty response from S3" },
                { status: 502 }
            );
        }

        const bodyText = await response.Body.transformToString();
        const data = JSON.parse(bodyText);

        return NextResponse.json(data, {
            headers: {
                "Access-Control-Allow-Origin": "*",
            },
        });
    } catch (error) {
        console.error("Failed to fetch impact stats from S3:", error);
        return NextResponse.json(
            { message: "Failed to fetch impact stats" },
            { status: 502 }
        );
    }
}

export async function OPTIONS() {
    return new NextResponse(null, {
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type",
        },
    });
}
