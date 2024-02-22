import { connectDB } from "@/util/database";

// export const revalidate = 60;

export default async function Home() {
  const db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();
  console.log(result);

  // {}안에 있는 애들은 굳이 안 써도 캐싱 쓸 수 있음
  // await fetch("/url", { cache: "force-cache" });
  // await fetch('/url', {next: {revalidate:60}}) // 60초마다 갱신

  return <div>안녕</div>;
}

// 페이지는 static rendering해줌 (디폴트)
// npm run build 할때 만든 html 페이지 그대로 유저에게 보냄
// 미리 페이지 완성본을 만들어놨기 때문에 전송이 빠름

// 람다 페이지들은 dynamic rendering해줌
// 유저가 페이지 접속마다 html을 새로 만들어서 보내줌
// 서버/DB부담이 높아짐 -> 캐싱기능사용가능
// 캐싱 : 결과를 잠깐 저장해두고 재사용
// get요청 결과 캐싱 가능
