export async function POST(request: Request) {
    try {
      const { message } = await request.json();
  
      const catFactRes = await fetch("https://catfact.ninja/fact");
      const catFactData = await catFactRes.json();
  
      return Response.json({
        userMessage: message,
        response: `Here's a cat fact: ${catFactData.fact}`,
      });
    } catch (error) {
      console.error("Error in POST /api/agent:", error);
      return Response.json({ error: "Failed to fetch cat fact." }, { status: 500 });
    }
  }
  