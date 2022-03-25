export const get = async () => {

  console.log("api > something.json.js 파일 실행 중")

  return {
    status: 200,
    body: {
      x: "something"
    }
  }
}