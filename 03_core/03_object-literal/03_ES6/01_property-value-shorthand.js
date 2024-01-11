/* 01_property-value-shorthand(프로퍼티 값 단축 구문) */

let id = "p-0001";
let price = 30000;

let product={
  id:id,
  price:price
}

console.log(product);

/* 
  ES6에서 프로퍼티 값으로 변수를 사용하는 경우
  프로퍼티 키는 변수 이름으로 값은 변수의 값으로 할당된다.
 */

  let product2 = {id,price};    // 위 내용 축약 표현
  console.log(product2);