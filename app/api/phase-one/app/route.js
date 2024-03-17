export const dynamic = "force-dynamic";

import { GetPhaseOneSubmissions } from "@/prisma/phaseOne";

export async function GET(request) {
  let { success, data = [] } = await GetPhaseOneSubmissions("Kognizance");
  return Response.json({ success, count: data.length, data });
}
