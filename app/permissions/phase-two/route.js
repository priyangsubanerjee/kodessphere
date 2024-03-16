export const dynamic = "force-dynamic";

import { CheckPhaseTwoAllowed } from "@/prisma/permission";

export async function GET(request) {
  let { success, message, value } = await CheckPhaseTwoAllowed();
  return Response.json({
    success: success,
    message: message,
    value: value,
  });
}
