import { connectDB } from "@/util/database";

export default async function handler(요청, 응답) {
  if (요청.method == "POST") {
    console.log(요청.body);
    if (요청.body.title == "") {
      return 응답.status(500).json("너 왜 제목 안 씀");
    }
    const db = (await connectDB).db("forum");
    let result = await db.collection("post").insertOne(요청.body);
    return 응답.status(200).redirect("/list");
  }
}

// 글 작성기능 만들기 강의 요약
// 1. 유저->서버->DB 이런식으로 개발하자
// 2. 서버기능은 /api 폴더에 코드짜자
// 3. DB에 document 하나 발행하고싶으면 insertOne() 사용
