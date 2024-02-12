export default function List() {
  let 상품 = ["Tomatoes", "Pasta", "Cocount"];
  let rr = [2, 3, 4];
  rr.map((a, i) => {
    console.log(a);
    console.log(i);
  });

  return (
    <div>
      <h2>Products</h2>
      <div className="food">
        <h4>{상품[0]} $40</h4>
      </div>
      <div className="food">
        <h4>{상품[1]} $40</h4>
      </div>
      <div className="food">
        <h4>{상품[2]} $40</h4>
      </div>
    </div>
  );
}
