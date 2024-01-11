// 자바스크립트 엔진은 불리언 타입이 아닌 값을 Truthy 값(값 존재 여부) 
// 또는 Falsy 값(거짓으로 평가되는 값)으로 구분한다.
// Truthy -> true, Falsy -> false로 암묵적 타입 변환 된다.

 let test1;   // --값이 없기 때문에 falsy
console.log(!!test1); // -- ! 한번 쓰면 불리언 타입으로 형변환되며 falsy가 true 로 바뀜  
                    // --  !! 가 붙어야 false 가 나옴 ( 값이 있으면 truthy 없으면 falsy )
 

let test = {
  a : null,
  b : 0,              // 값은 0 이지만 자바스크립트에선 0 과 false로 두가지를 인정함
  fun(){
    console.log("fasdsdf");
  }
};

// test 라는 객체의 프로퍼티에 b의 값이 존재 하는지 확인
if(test?.b){    //  ? : 객체타입이 truthy 인지 falsy 인지 확인
  console.log("true");
}else {
  console.log("false");
}

// test라는 객체의 프로퍼티에 b의 값이 존재하는 경우 a 출력 / 존재하지 않을 시 null
console.log(test.b && "a");
console.log("=======================")
test.b ? console.log("true"): console.log("false");    // 자체에 값이 있는지 확인

console.log("=============");
test.fun();

test?.fun();  //  여기서 ? 는 fun이라는게 있으면 실행하라는 명령어