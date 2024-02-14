export default function Cart() {
  let 장바구니 = ["Tomatoes", "Pasta"];
  return (
    <div>
      <h4 className="title">Cart</h4>
      <CartItem item={장바구니[0]} />
      <CartItem item={장바구니[1]} />
      <Banner content="롯데카드" />
      <Banner content="현대카드" />
    </div>
  );
}

function Banner(props) {
  return <h5>{props.content} 결제 행사중</h5>;
}

function CartItem(props) {
  return (
    <div className="cart-item">
      <p>{props.item}</p>
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

// 파라미터 문법 == props 문법
// : 매번 약간 다른 내용으로 function을 실행하고 싶을 때 사용
