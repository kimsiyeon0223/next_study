// Image 문법을 쓸려면 사진들을 import해서 가져와 써야함
// import Image from "next/image";
// import to from "/public/food0.png";
"use client";

import { useState } from "react";

export default function List() {
  let 상품 = ["Tomatoes", "Pasta", "Cocount"];
  let [수량, 수량변경] = useState(0);

  return (
    <div>
      <h4 className="title">상품목록</h4>
      {상품.map((a, i) => {
        return (
          <div className="food" key={i}>
            {/* 외부 이미지를 쓸 경우 : 링크를 넣고 width와 height를 지정해줘야 함 */}
            <img src={`/food${i}.png`} className="food-img" />
            <h4>{a} $40</h4>
            <span> {수량} </span>
            <button
              onClick={() => {
                수량변경(수량 + 1);
              }}
            >
              +
            </button>
          </div>
        );
      })}
    </div>
  );
}

// useState 문법
//  state쓰면 state 변경 시 html도 재렌더링 된다는게 장점
//  but. 굳이 변동될 일 없는 데이터들을 state로 만들 필요 없다.
