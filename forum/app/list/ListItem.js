"use client";

export default function ListItem() {
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
