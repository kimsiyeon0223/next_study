import { age, name } from "./data";

export default function Cart() {
  return (
    <div>
      <h4 className="title">Cart</h4>
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
    </div>
  );
}

function CartItem() {
  return (
    <div className="cart-item">
      <p>상품명</p>
      <p>$40</p>
      <p>1개</p>
    </div>
  );
}

// next.js 컴포넌트 종류
// 1. server componenet(큰 페이지 추천) : 아무데나 대충 만든 거
// - html에 자바스크립트 기능 넣기 불가능 (useState, useEffect 불가능)
// - 로딩 속도 빠름, 건색엔진 노출 유리

// 2. client compornent(js 필요한 곳만 추천) : 파일 맨 위에 'use client' 넣고 만든 거
// - html에 자바스크립트 기능 넣기 가능 (useState, useEffect 가능)
// - 로딩속도 느림1 ( 자바스크립트 많이 필요함 )
// - 로딩속도 느림2 (hydration 필요)
// hydration : html을 유저에게 보낸 후 자바스크립트로 html을 다시 읽고 분석하는 일
