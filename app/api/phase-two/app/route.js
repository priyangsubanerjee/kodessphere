export const dynamic = "force-dynamic";

import { GetPhaseOneSubmissions } from "@/prisma/phaseOne";
import { GetPhaseTwoSubmissions } from "@/prisma/phaseTwo";

export async function GET(request) {
  let { success, data = [] } = await GetPhaseTwoSubmissions("Kognizance");
  return Response.json({ success, count: data.length, data });
}
