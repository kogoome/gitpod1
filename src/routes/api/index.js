export const get = async () => {

  console.log("api > index.js 파일 실행 중")

  return {
    status: 200,
    body: {
      x: "index"
    }
  }
}