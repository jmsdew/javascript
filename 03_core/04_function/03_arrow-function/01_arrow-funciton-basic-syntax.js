/* 01_arrow-funciton-basic-syntax
ES6에서 도입 된 화살표 함수는 function 키워드 대신 화살표를 사용해 좀 더 간략한 방법으로 함수를 선언할 수 있다. 
화살표 함수는 항상 익명 함수로 정의한다. 본문이 한 줄인 함수를 작성할 때 유용하다.
*/
var message;

// 기존 function 정의
message = function () {
    return "Hello World!";
};

console.log(message());

// function 키워드 생략 가능
message = () => {
    return "Arrow Function!";
};

console.log(message());

// 명령문이 하나만 있는 경우 중괄호 생략 가능
// 이 때 함수 몸체 내부의 문이 값으로 평가 될 수 있는 표현식인 문이라면 암묵적으로 반환 된다.
// return 키워드 생략 가능
message = () => "Arrow Functions are Simple!";

console.log(message());

// 매개변수가 있을 경우
message = (val1, val2) => "Arrow " + val1 + val2;  // 역시 괄호 없어서 return 자동.

console.log(message('Function', '!'));

// 매개변수가 하나면 소괄호 생략 가능
// 매개변수가 없거나 여러 개일 경우 생략 불가하다
message = val => "Arrow " + val;

console.log(message('Functions are GOOD!!!'));

let obj = {    // 구조 분해 할당
  a : "test",
  b : "value"
}

const test = ({a,b}) => ` hi ${a} + ${b} ` ; // 괄호가 없으면 return 값이 생략되어 있는것. return "hi";  괄호 있으면 return 을 달아줘야함
console.log(test(obj));

console.log(obj);