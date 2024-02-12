// Image 문법을 쓸려면 사진들을 import해서 가져와 써야함
import Image from "next/image";
import to from "/public/food0.png";
export default function List() {
  let 상품 = ["Tomatoes", "Pasta", "Cocount"];

  return (
    <div>
      <h4 className="title">상품목록</h4>
      {상품.map((a, i) => {
        return (
          <div className="food" key={i}>
            {/* 외부 이미지를 쓸 경우 : 링크를 넣고 width와 height를 지정해줘야 함 */}
            <Image src={to} className="food-img" />
            <h4>{a} $40</h4>
          </div>
        );
      })}
    </div>
  );
}
