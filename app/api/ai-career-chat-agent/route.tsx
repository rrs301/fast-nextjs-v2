import { inngest } from "@/inngest/client";
import axios from "axios";
import { NextResponse } from "next/server";

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export async function POST(req: Request) {
  const { userInput } = await req.json();

  const resultIds = await inngest.send({
    name: "Ai Career Chat",
    data: {
      userInput,
    },
  });

  const runId = resultIds?.ids?.[0];
  if (!runId) {
    return NextResponse.json({ error: "No run ID returned" }, { status: 500 });
  }

  let runStatus;

  while (true) {
    runStatus = await getRuns(runId);
    const status = runStatus?.data?.[0]?.status;

    if (status === "Completed") {
      break;
    }

    await delay(500);
  }

  return NextResponse.json(runStatus?.data?.[0]?.output?.output?.[0]);
}

async function getRuns(runId: string) {
  const url = `${process.env.GEMINI_API_KEY}/v1/events/${runId}/runs`;

  const result = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${process.env.GEMINI_API_KEY}`,
    },
  });

  return result;
}

