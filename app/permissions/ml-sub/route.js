export const dynamic = "force-dynamic";

import { checkMLAllowed } from "@/prisma/permission";

export async function GET(request) {
  let { success, message, value } = await checkMLAllowed();
  return Response.json({
    success: success,
    message: message,
    value: value,
  });
}
