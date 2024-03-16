export const dynamic = "force-dynamic";

import { CheckPhaseOneAllowed } from "@/prisma/permission";

export async function GET(request) {
  let { success, message, value } = await CheckPhaseOneAllowed();
  return Response.json({
    success: success,
    message: message,
    value: value,
  });
}
