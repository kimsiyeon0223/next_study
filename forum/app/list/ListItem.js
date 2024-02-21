"use client";
import Link from "next/link";

export default function ListItem({ result }) {
  return (
    <div>
      {result.map((a, i) => (
        <div className="list-item" key={i}>
          <Link href={"/detail/" + result[i]._id}>{result[i].title}</Link>
          <Link href={"/edit/" + result[i]._id} className="list-btn">
            ✏️
          </Link>
          <span
            onClick={() => {
              fetch("/api/post/delete", {
                method: "DELETE",
                body: result[i]._id,
              })
                .then((r) => r.json())
                .then((result) => {
                  //성공시
                });
            }}
          >
            🗑️
          </span>
          <span>1월 1일</span>
        </div>
      ))}
    </div>
  );
}

// //useEffect는 html부터 유저에게 보여주고 실행됨 -> 검색노출이 어려울수있음
// useEffect(() => {
//     서버에 부탁해서 DB게시물 가져옴
//     result = DB 게시물
// }, [])
