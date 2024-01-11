
// 숫자 타입
// 자바의 경우 정수와 실수를 구분해 int, long, float, double 등과 같은 다양한 숫자 타입을 제공한다.
// 하지만 자바스크립트의 경우 하나의 숫자 타입만 존재하고 모든 수를 실수로 처리한다.
// 자료형의 크기가 없음 - 문제 발생 가능성 높음

let integer = 10;
let double = 5.5;
let nagative = -10;
console.log(10 === 10.0);
console.log(10/4);

// 숫자 타입은 추가적으로 세 가지 특별한 값도 표현할 수 있다.
// Infinity = 양의 무한대
// -Infinity = 음의 무한대
// NaN = 산술 연산 불가능함.

console.log(10/0); //  Infinity
console.log(10/-0); // -Infinity
console.log(1* "문자열"); // NaN

// --------------------------------

/* 
  02. 문자열 타입
  문자열 타입은 텍스트 데이터를 나타내는데 사용한다.
  문자열은 작은 따옴표(''), 큰 따옴표(""), 또는 빽틱(``) (ex6) 으로 텍스트를 감싼다.
  자바는 문자열을 객체로 표현하지만 자바스크립트의 문자열은 원시 타입이며, 변경 불가능한 값이다.
*/

let String;
String = 'javascript';
String = "javascript";
String = `javascript`;

string = '작은 따옴표로 감싼 문자열 내의 "큰 따옴표" 는 문자열로 인식';
string = "큰 따옴표로 감싼 문자열 내의 '작은 따옴표' 는 문자열로 인식";

/* 
 템플릿 리터럴
 Es6 부터 도입 된 멀티라인 문자열, 표현식 삽입 등의 편리한 문자열 처리 기능을 제공하는 문자열 표기법
 이 떄는 작은 따옴표, 큰 따옴표 대신 빽틱을 사용해 표현한다.
*/
// let str = "안녕하세요
// 이상우 입니다."

// 이스케이프 시퀀스를 사용해야 한다.
let str = "안녕하세요 \n 이상우 입니다.";

let multiline = `안녕하세요 
이상우 입니다.`;

console.log(multiline);

let firstName = "이";
let lastName = "상우";

console.log(`안녕하세요 ${firstName}${lastName}  입니다.`);
console.log("안녕하세요"+lastName + firstName + " 입니다."); // 위처럼 편하게 사용 가능

// ------------------------------------

/* 
  03 불리언 타입
    불리언 타입의 값은 논리적 참, 거짓을 나타내는 true 와 false 뿐이다.
*/

let flag = true;
console.log(flag);

flag = false;
console.log(flag);

// ------------------------------------
/* 
  undefined 타입
  undefined 타입의 값은 undefined 가 유일하다.
  let,var 키워드로 선언한 변수는 암묵적으로 undefined로 초기화 된다.
  변수를 선언한 이후 값을 할당하지 않은 변수를 참조하면 undefined 가 반환된다.
  undefined 는 자바스크립트 엔진이 변수를 초기화 할 때 사용하는 값이고,
  개발자가 의도적으로 변수에 할당하는 것은 본래 취지와 어긋나고 혼란을 줄 수 있다.
  그렇기 때문에 undefined 보다는 null 을 주는 것이 바람직하다.
*/

let test;
console.log(test);

// const test2; const 는 상수 값이기 때문에 undefined 로 초기화 할 수 없음.

/* 
  null 타입
  null 타입의 값은 null이 유일하다.
  변수에 값이 없다는 것을 의도적으로 명시할 때 사용한다.
  이전에 할당 되어 있던 값에 대한 참조를 명시적으로 제거하지 않는 것을 의미하고,
  자바스크립트 엔진은 누구도 참조하지 않은 메모리 공간에 대해 가비지 컬렉션을 수행하게 된다.
*/

let nullVal = "something";
nullVal = null;
console.log(null);

// -------------------------------------------


/* 
  Symbol 타입
  심볼은 ES6 에서 추가 된 7번째 타입으로, 변경 불가능한 원시 타입의 값이다.
  다른 값과 중복 되지 않은 유일무이한 값으로 이름 충돌할 위험이 없는 객체에 유일한 프로퍼티 키를 만들기 위해 사용한다.
  심벌 이외의 원시 값은 리터럴을 통해 생성하지만 symbol 함수를 통해 호출해 생성한다.
  (실제로 사용하는 일은 거의 없음)
*/
let key = Symbol("key");
console.log(typeof key);
console.log(key);

// 객체 생성
let obj = {};

obj[key] = "value";
// 이름 충돌할 위험이 없는 유일무이한 값이 심벌을 프로퍼티 키로 사용한다.
console.log(obj[key]);


// 값이 바뀌지 않고 새로운 주소값을 할당. 
// 변수 주소 값 = 2byte , 데이터 주소 값 = 8byte
// let a = "1"; let b = "1";   - 같은 데이터 주소 값을 가지고 있음 (변수 주소만 다름)
// a = "2";  가 되면 데이터 주소 값 바뀜. 데이터가 바뀌지는 않음.