/*   var, let, const 비교    */

/*      1. 변수 재선언      */

var vv = 123;
var vv = 321;
console.log("vv : ", vv);

let ll = 123;
//let ll = 321;          : let 재선언 X
console.log("ll : ", ll);

const cc = 123;
//const cc = 321;       : const 재선언 X
console.log("cc : ", cc);


/*      2. 변수 재할당 실습     */

// var vv = 'abc';
// vv = 'def';
// console.log("vv : ", vv);

// let ll = 'abc';
// ll = 'def';
// console.log("ll : ", ll);

// const cc = 'abc';
// //cc = 'def';       : const 재할당 X
// console.log("cc : ", cc);


// /*      3. 변수 초기화 실습     */

// var vv;
// console.log("vv : ", vv);

// let ll;
// console.log("ll: ", ll);

// //const cc;             : const 초기화 값 필수
// //console.log("cc : ", cc);
