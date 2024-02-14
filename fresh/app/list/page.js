// Image 문법을 쓸려면 사진들을 import해서 가져와 써야함
// import Image from "next/image";
// import to from "/public/food0.png";
"use client";

import { useState } from "react";

export default function List() {
  let 상품 = ["Tomatoes", "Pasta", "Cocount"];
  let [수량, 수량변경] = useState([0, 0, 0]);

  return (
    <div>
      <h4 className="title">상품목록</h4>

      {/* <span>{수량[0]}</span>
      <button
        onClick={() => {
          let copy = [...수량]; // 독립적인 array를 만들어서 복사해줌
          copy[0]++;
          수량변경(copy);
          // let arr = [1, 2, 3];
          // let arr2 = arr; // 화살표가 같음
          // console.log(arr2 == arr); //true
        }}
      >
        +
      </button> */}

      {/* <span>{수량[1]}</span>
      <button>+</button>
      <span>{수량[2]}</span>
      <button>+</button> */}

      {상품.map((a, i) => {
        return (
          <div className="food" key={i}>
            {/* 외부 이미지를 쓸 경우 : 링크를 넣고 width와 height를 지정해줘야 함 */}
            <img src={`/food${i}.png`} className="food-img" />
            <h4>{a} $40</h4>
            <button
              onClick={() => {
                let copy1 = [...수량];
                copy1[i]--;
                수량변경(copy1);
              }}
            >
              {" "}
              -{" "}
            </button>
            <span> {수량[i]} </span>
            <button
              onClick={() => {
                let copy = [...수량];
                copy[i]++;
                수량변경(copy);
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
// state변경함수 사용시
// 새 state == 기존 state 일 경우 변경 x

// array/object인 state의 경우
//  : ...로 복사해서 수정하고 state변경함수 사용하자!
