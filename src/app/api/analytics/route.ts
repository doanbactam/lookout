import { NextRequest, NextResponse } from "next/server";
import { getUser } from "@/auth/server";
import { generateTopicAnalytics } from "@/lib/analytics";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  try {
    const user = await getUser();
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { topicId } = await request.json();

    if (!topicId) {
      return NextResponse.json(
        { error: "topicId is required" },
        { status: 400 }
      );
    }

    const result = await generateTopicAnalytics(topicId);

    return NextResponse.json({ success: true, data: result });
  } catch (error) {
    console.error("Analytics API Error:", error);
    return NextResponse.json(
      { error: "Failed to generate analytics" },
      { status: 500 }
    );
  }
}
