export async function POST(req) {
  try {
    const body = await req.json();
    console.log("New contact message:", body);

    return Response.json({ success: true });
  } catch (err) {
    return Response.json({ success: false }, { status: 500 });
  }
}
