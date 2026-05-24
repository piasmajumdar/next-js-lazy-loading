// src/app/api/show/route.jsx

export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 4000));
  return new Response("console.log('Script Loading')", {
    headers: {
      "Content-Type": "application/javascript",
    },
  });
}