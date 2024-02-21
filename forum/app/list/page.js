import { connectDB } from "@/util/database";
import Link from "next/link";

export default async function List() {
  const db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();
  console.log(result[0].title); //대괄호 -> array자료형

  return (
    <div className="list-bg">
      {result.map((a, i) => {
        // return()+중괄호 생략가능
        return (
          <div className="list-item" key={i}>
            {/* link에도 prefetch기능이 내장되어 있음 */}
            <Link href={"/detail/" + result[i]._id}>{result[i].title}</Link>
            <Link href={"/edit/" + result[i]._id}>수정</Link>
            <p>1월 1일</p>
          </div>
        );
      })}

      {/* <div className="list-item">
        <h4>{result[1].title}</h4>
        <p>{result[1].content}</p>
      </div>
      <div className="list-item">
        <h4>{result[2].title}</h4>
        <p>{result[2].content}</p>
      </div> */}
    </div>
  );
}

// *자바스크입트는 처리가 늦게되는 코드를 발견하면 재껴두고 다음줄 실행함*
// -> await을 쓰면 잠시 기다려줌 (but. promise를 뱉는 코드만 await을 붙일 수 있음)

//   //object자료형
//   let data = {name:'kim', age:20}
//   console.log(data.name)
//   data.age = 30 // object안에 있는 데이터 수정
