/* 함수와 메소드의 차이 */

const test = {
  getThis: function (){
    console.log(this);
  },
  innerObject:{
    test: function(){
      this.getThis();
    }
  }
}

test.getThis();
console.log("================")
/* node.js 스크립트의 최상위 레벨 에서 this */

/* 
    최상위 scope 에서 this 가 {} 로 출력되는 이유
    common.js 모듈 시스템을 사용하는 node의 문제이기 때문이다.
    node 는 각 모듈이 *자체의 독립된 스코프*를 갖기 때문에 최상위 레벨의 코드 블록이 모듈 내에서 실행되어 this가 빈 객체가 되는 것이다.
*/
console.log(this);  // 이렇게 호출하면 이미 최상위기 때문에 그 위를 참조해야 하기에 아무것도 뜨지 않음

// 모듈이 독립된 환경에서 실행되는 것 확인하기
console.log(this == module.exports);

// 스코프가 분리되면서 this 는 상위 객체를 바라보게 되고 global을 참조한다.
function testFunction(){  // 이렇게 호출하면 하나 위에 페이지 전체
  console.log(this);
}
testFunction();
// 화살표함수 ES6  화살표함수는 자기 자신의 스코프를 가지지않음 - this 는 상위 스코프의 this를 참조하게 된다.
// 이로 인해 최 상위 상태의 this 를 호출하게 되는 것이고 this 는 상위 스코프의 객체를 참조하기 때문에 최상위 스코프의
// 상위가 존재하지 않아 this에 빈 객체가 출력된다.
const test1 = () =>{
  console.log(this);
};
// 화살표 함수 호출
test1();
// 브라우저의 상위 스코프 window 
// node 의 상위 스코프 global

// ============================= 함수와 메서드의 차이 ===================

var func = function(){
  console.log(this);
}
const obj = {
  name : "a",
  method : func
}

console.log("====함수 호출====");   // 일반적으로 선언된 코드의 묶음을 함수
func();
console.log("===== 메서드 호출 =====");  // 클래스 내부에서 선언된 코드의 묶음을 클래스
obj.method();

// this를 호출하는 위치에 따라 다르게 응답.

// ======================== 메서드 내부의 this ==================
console.log("====================메서드 내부의 this 확인 ====================")
const innerThis={
  methodA:function(){console.log(this)},
  inner:{
    methodB : function(){
      console.log(this);
    }
  }
}
innerThis.methodA();
innerThis.inner.methodB();


// ================================= Object Level Bind ======================

class person {
  constructor(name,age){
    this.name = name;
    this.age = age;
  }
}

let john = new person("john",30);
let risa = new person("risa",40);

function getInfo(){
  return (`안녕하세요 ${this.name} 이에요
        저의 나이는 ${this.age} 입니다.`);
}

// 전역 공간에 선언된 name과 age 가 없기 때문에 undefined가 출력된다.
console.log(getInfo());

// this 를 지정하는 것도 가능하다.
const boundjohn = getInfo.bind(john);  // 디스바인드
console.log(boundjohn());

const boundRisa = getInfo.bind(risa);
console.log(boundRisa());

const 한솔카피 = {
   name : "한피",
   age : 20,
   getInfo : function(){
      console.log(`${this.name}의 나이는 ${this.age}`);
   }
}

한솔카피.getInfo();

const copy = 한솔카피.getInfo.bind(john);
copy();