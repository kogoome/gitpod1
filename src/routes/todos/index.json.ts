import type { RequestHandler } from "@sveltejs/kit"

export const get: RequestHandler = () => {
  return {
    status: 200,
    body: "Hello from the API."
  };
}

export const post: RequestHandler = async ({request}) => {
  const data = await request.formData()

  console.log('\n');
  console.log(data);

  return {
    status: 200,
    body: "string"
  }
}