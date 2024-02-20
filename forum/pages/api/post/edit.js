import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(요청, 응답) {
  if (요청.method == "POST") {
    let 바꿀거 = { title: 요청.body.title, content: 요청.body.content };
    // console.log(요청.body);
    const db = (await connectDB).db("forum");
    let result = await db
      .collection("post")
      .updateOne({ _id: new ObjectId(요청.body._id) }, { $set: 바꿀거 });
    응답.status(200).redirect("/list");
  }
}

// 수정기능 만들기 강의 요약
// document 수정은 updateOne()

// updateOne시 숫자를 덮어쓰기 말고, $inc 연산자를 쓰면 기존갑을 증감만 해줄수도있다
