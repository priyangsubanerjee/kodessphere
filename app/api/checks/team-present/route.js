import { GetTeam } from "@/prisma/team";

export async function POST(request) {
  const data = await request.json();
  const { id } = data;

  const { success, message } = await GetTeam(id);

  console.log(success, message);

  return Response.json({
    success,
    message,
  });
}
