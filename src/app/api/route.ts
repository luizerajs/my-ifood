export const dynamic = "force-dynamic"; // defaults to auto

export async function GET() {
  return Response.json({ message: "Welcome to My Ifood" });
}
