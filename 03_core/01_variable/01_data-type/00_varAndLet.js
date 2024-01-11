
function test(){

  for(var i = 0; i <= 3; i++){

  }
  console.log(i);
}
test();
// var let 차이  var 는 스코프가 없음 . 그래서 let을 사용함.

function test(){

  for(let i = 0; i <= 3; i++){

  }
  console.log(i);
}
test();