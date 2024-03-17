export const dynamic = "force-dynamic";

import { GetPhaseOneSubmissions } from "@/prisma/phaseOne";

export async function GET(request) {
  let { success, data = [] } = await GetPhaseOneSubmissions("Konnexweb");
  return Response.json({ success, count: data.length, data });
}
