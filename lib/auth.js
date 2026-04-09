// FOUNDER-ONLY: Auth middleware
export function requireAuth(req) {
  const token = req.headers.get("Authorization")?.replace("Bearer ", "");
  if (!token) throw new Error("Unauthorized");
  // verify JWT against Supabase...
  return { userId: "demo-user-id" };
}
