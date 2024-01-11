// 함수 선언문과 할당문의 차이

/* 
  함수 선언문

  프로그램의 흐름을 기준으로 생각
    처음 보는 것
  function test(){
    console.log("이거랑")
  }
    두번쨰 보는 것
  function test(){
  console.log("이거 중 어떤게 실행되나?")
  } 
    세번째
    var variable; 선언

    네번쨰
    test();

    다섯번째
    variable = "qfqfqfqwfq"; 

    이래서 test(); 실행문이 어디에 있든 이 흐름대로 

    (  함수, 변수 선언을 먼저 함. -> 호출 실행 -> 값 할당  )
*/


test();
console.log(variable);

// 함수 선언문
function test(){
  console.log("이거랑")
}

function test(){
  console.log("이거 중 어떤게 실행되나?")
}



var variable = "qfqfqfqwfq";


//-----------------------------------------------------
console.log("============================");
// 프로그램을 여기서 부터 실행된다고 생각

// 함수 할당문   
/* 
  1번 var funTest; 

  2번 console.log(funTest);

  3번 var funTest = () =>{
    console.log("1"); 
  
  4번 
  funTest(); 

  5번 var funTest = () =>{
  console.log("2");
}
  6번
  funTest();

}
*/

console.log(funTest);

var funTest = () =>{
    console.log("1");
}
funTest();
var funTest = () =>{
  console.log("2");
}
funTest();
/* var 는 중복함수 허용함. let은 불가 사전에 휴먼에러를 방지할 수 있음
let funTest = () =>{
  console.log("2");
}
 */

// 함수 선언문과 표현식

// 함수 선언문
function a (){

};

// 함수 할당식
// 익명함수 표현식
const b = function(){};

// 기명 함수 표현식
const c = function d(){};

(function test(){
  console.log("이거 맞나?")
})();  // 일회성 함수문