/* 
  Strict-mode-apply(엄격 모드 적용)
  전역의 선두 또는 함수 몸체의 선두 'use strict'를 추가한다.
*/
 
function test(){  // function 스코프 내부에도 전언 가능하고 전역에도 선언 가능하다. 함수 몸체에 선두에 추가하면 해당 함수와
                  // 중첩 함수에 strict 모드가 적용된다.
  'use strict';
  x = 10;
}

// test();

// console.log(x);

function test2(){
  y = 10;
}
test2();
console.log(y);

//---------------------
/* 전역에 strict mode 를 적용하면 스크립트 단위로 적용 되어 strict mode 와 non-strict mode 의 혼용으로 인한 오류가 발생할 수 있다. */
/*    위에만 적용됨. 한 스크립트 안에서 나누는 것 별로 좋지 않음.
<script>
  'use strict';
</script>
<script>
  x = 10;
</script> */

/* 서드파이 라이브러리가 non-strict mode 인 경우 즉시 실행 함수로 
스크립트 전체를 감싸서 스코프를 구분하고 즉시 실행 함수의 선두에 strict mode 를 적용한다. */
(function(){
  'use strict';
});

/* 
  함수 단위로 strict 를 적용하면 strict mode 와 non strict mode의 혼용이 되어 바람직 하지 않고 모든 함수에 일일히 적용한 것도
  번거롭다. => 즉시 실행 함수로 감싼 스크립트 단위로 적용하는 것이 바람직하다.
*/
