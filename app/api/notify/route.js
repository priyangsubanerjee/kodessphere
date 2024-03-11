export async function POST(request) {
  let { message } = await request.json();
  let url = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_ID}/sendMessage?chat_id=${process.env.TELEGRAM_CHANNEL_ID}&text=${message}`;
  try {
    await fetch(url, {
      method: "GET",
    });
    return Response.json({
      success: true,
      message: "Message sent successfully",
    });
  } catch (error) {
    return Response.json({
      success: false,
      message: "Failed to send message",
    });
  }
}
