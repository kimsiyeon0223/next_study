"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function DetailLink() {
  let router = useRouter();
  // 뒤로가기 -> router.back();
  // 앞으로가기 -> router.forward();
  // 새로고침 -> router.refresh();
  // 페이지 미리로드 -> router.prefetch()
  // let a = usePathname() //현재 url출력
  // let b = useSearchParams() // Search parameter출력
  return (
    <button
      onClick={() => {
        router.prefetch("/detail/dsds");
      }}
    >
      버튼
    </button>
  );
}

// 상세페이지 만들기 강의 요약
// 1. 여러페이지 만들려면 [Dynamic Route]
// 2. 현재 URL이 뭔지 궁금하면 props/useRouter
// 3. 페이지 이동, prefetch 등은 useRouter
