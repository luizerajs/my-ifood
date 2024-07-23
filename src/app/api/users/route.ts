export const dynamic = "force-dynamic"; // defaults to auto

export async function GET() {
  return Response.json({ name: "Jane Doe", time: Date.now() });
}
