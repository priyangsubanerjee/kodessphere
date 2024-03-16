import { SubmitPhaseTwo } from "@/prisma/phaseTwo";

export async function POST(request) {
  let data = await request.json();
  let { id, name, arena, gmail, content } = data;

  let { success, message } = await SubmitPhaseTwo(
    id,
    name,
    arena,
    gmail,
    content
  );

  return Response.json({
    success,
    message,
  });
}
