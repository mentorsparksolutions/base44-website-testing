export async function onRequestPost({ request, env }) {
  try {
    const data = await request.json();
    const required = ["name", "email", "service", "message"];
    for (const key of required) {
      if (!data[key] || !String(data[key]).trim()) {
        return Response.json({ error: `Missing required field: ${key}` }, { status: 400 });
      }
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      return Response.json({ error: "Please provide a valid email address." }, { status: 400 });
    }
    if (!env.DB) {
      return Response.json({ error: "The enquiry database is not configured yet." }, { status: 503 });
    }
    await env.DB.prepare(
      `INSERT INTO enquiries (name, email, phone, service, technology, experience, message, consent, status, created_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, 'New', CURRENT_TIMESTAMP)`
    ).bind(
      data.name, data.email, data.phone || "", data.service,
      data.technology || "", data.experience || "", data.message,
      data.consent === "yes" ? 1 : 0
    ).run();
    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: "Unable to process this enquiry right now." }, { status: 500 });
  }
}
