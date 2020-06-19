/* 함수 선언식 : 호이스팅에 영향 받음
** 함수 표현식 : 호이스팅에 영향 안받음, 함수를 변수에 할당(일급 객체),
                화살표 함수로 표현 가능 */

/* 1. 함수 선언식 */
function addNum(x,y) {
    console.log(x+y);
}
addNum(2,3);    // 5

/* 2. 함수 표현식, 변수 = function(파라미터){} */

var addStr = function(x,y) {
    console.log(x+y);
}
addStr("함수", "표현식");   // 함수표현식

/* 2-1. 화살표 함수, 변수 = (파라미터) => {} */

var addBool = (x,y) => {    
    console.log(x+y);
}
addBool(true, false);  // 1
