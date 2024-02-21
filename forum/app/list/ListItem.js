"use client";

import { useEffect } from "react";

export default function ListItem({ result }) {
  // //useEffect는 html부터 유저에게 보여주고 실행됨 -> 검색노출이 어려울수있음
  // useEffect(() => {
  //     서버에 부탁해서 DB게시물 가져옴
  //     result = DB 게시물
  // }, [])

  {
    result.map((a, i) => {
      // return()+중괄호 생략가능
      return (
        <div className="list-item" key={i}>
          {/* link에도 prefetch기능이 내장되어 있음 */}
          <Link href={"/detail/" + result[i]._id}>{result[i].title}</Link>
          <Link href={"/edit/" + result[i]._id}>수정</Link>
          <p>1월 1일</p>
        </div>
      );
    });
  }
}
