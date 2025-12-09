
export async function POST(req) {
  try {
    const data = await req.json();

    const res = await fetch(
      "https://script.google.com/macros/s/AKfycby-oYyfgSnnfkhQol7u_r8eq9BvUMoHkX3TzXgcfE4CzqkWHIKjm5IP7lKXYACl1gyj/exec",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    );

    if (!res.ok) {
      return new Response(JSON.stringify({ success: false }), { status: 500 });
    }

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ success: false, error: err.message }), { status: 500 });
  }
}
