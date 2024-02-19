export default async function handler(
  요쳥 /*유저들의 요청과 관련된 정보*/,
  응답 /*응답을 도와줌*/,
) {
  const db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();
  let a = new Date();
  응답.status(200).json(a);
}

// 서버기능 처리성공시 -> status(200)
// 서버기능 처리실패시 -> status(500)
// 서버기능 처리실패시(유저잘못) -> status(400)
