export async function handler(event, context) {
  console.log("Incoming request:", event);
  
  // optional: respond with confirmation
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Request logged successfully",
      path: event.path,
      headers: event.headers,
    }),
  };
}
