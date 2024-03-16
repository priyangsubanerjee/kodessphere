import { SubmitPhaseOne } from "@/prisma/phaseOne";

export async function POST(request) {
  let data = await request.json();
  let { id, name, arena, gmail, content } = data;

  let { success, message } = await SubmitPhaseOne(
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
