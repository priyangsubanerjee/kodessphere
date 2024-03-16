export const dynamic = "force-dynamic";

import { CheckEventStarted } from "@/prisma/permission";

export async function GET(request) {
  let { success, message, value } = await CheckEventStarted();
  return Response.json({
    success: success,
    message: message,
    value: value,
  });
}
