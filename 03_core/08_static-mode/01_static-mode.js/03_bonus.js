// 암시적인 글로벌 변수선언 금지
/* function test(){
  id : "test",
  console.log(id);
}
test();
console.log(id); */

//----------------------------------------
// 2. 변수, 함수, 매개변수 삭제 금지
var strictVar = 5;
delete strictVar;

// ---------------------------------------
// 3. 중복된 매개변수 이름 금지
function strictParamsExample(param1, param1){   
 //  console.log(element); 마지막 매개변수로 초기화됨
    console.log(arguments);
}
/* 
strictParamsExample(1,2);  // 뒤에꺼만 나옴 같은 파라미터 */


// -----------------------------------------

// 4. 엄격 모드에서는 this 사용이 금지
function strictThisExample(){
  'use strict';   //this 를 지원하지 않음
  console.log(this);
}
strictThisExample();

// -----------------------------------------
// eval 의 안전성 향상  실행 컨텍스트를 만들수 있는 함수. 권장되지 않음 
/* "use strict";
eval("var stricEvalVar = 5;");
console.log(stricEvalVar); */

// ----------------------------------------
// arguments 객체 변경 제한
/* function strictArgumentExample(){
  'use strict';
  arguments[0] = 10;
  console.log(arguments);
}
strictArgumentExample(); */