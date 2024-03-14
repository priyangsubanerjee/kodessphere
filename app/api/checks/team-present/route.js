import { GetTeam } from "@/prisma/team";

export async function POST(request) {
  const data = await request.json();
  const { id } = data;

  const { success, message, team } = await GetTeam(id);
  console.log(success, message, team);

  return Response.json({
    success,
    message,
    team,
  });
}
