import { withSupabase } from "@supabase/server";

export const POST = withSupabase({ auth: "none" }, async (req, ctx) => {
  try {
    const { name, email, phone, college, branch, domain, message } = await req.json();

    if (!name || !email || !phone || !college || !branch || !domain || !message) {
      return Response.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    const { data, error } = await (ctx.supabase as any)
      .from("contact_submissions")
      .insert([{ name, email, phone, college, branch, domain, message }])
      .select();

    if (error) {
      console.error("Database insert error:", error);
      return Response.json({ error: error.message }, { status: 400 });
    }

    return Response.json({ success: true, data }, { status: 200 });
  } catch (err: any) {
    console.error("API contact handler error:", err);
    return Response.json(
      { error: err.message || "An unexpected error occurred." },
      { status: 500 }
    );
  }
});
