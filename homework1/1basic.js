/* var, let, const 비교 
** var: 재선언, 재할당 가능하고 초기값 필수 아님
** let: 재선언 안됨, 재할당 가능하고 초기값 필수 아님
** const: 재선언, 재할당 안되고 초기값 필수임 */
 
/* 1. 변수 재선언 실습 */

var vv = 123;
var vv = 321;
console.log("vv : ", vv);

// let ll = 123;
// let ll = 321;   // SyntaxError
// console.log("ll : ", ll);   

// const cc = 123;
// const cc = 321; // SyntaxError
// console.log("cc : ",cc);

/* 2. 변수 재할당 실습 */

var vv = 'abc';
vv = 'def';
console.log("vv : ", vv);

let ll = 'abc';
ll = 'def';
console.log("ll : ", ll);

// const cc = 'abc';
// cc = 'def'; // SyntaxError
// console.log("cc : ", cc);

/* 3. 변수 초기화 실습 */

// var vv;
// console.log("vv : ", vv);   // undefined

// let ll;
// console.log("ll : ", ll);   // undefined

// const cc;   // SyntaxError
// console.log("cc : ", cc);   







