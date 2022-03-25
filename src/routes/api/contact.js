// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
export const post = async ({ request }) => {

  // fetch 요청 처리 (json)
  const data = await request.json() // .text() 도 사용 가능. 비추
  const name = data.name
  const email = data.email

  // form 요청 처리 (formData)
  // const data = await request.formData()
  // const name = data.get("name")
  // const email = data.get("email")

  return {
    status: 200,
    body: {
      name, email
    }
  }
}