/* 1. 배열의 선언 */

var server1 = ["박우영", "유가희", 43, null, true]; // 1) 배열 리터럴
var server2 = Array("김민지", "최영훈", 13);    // 2) Array 객체 생성자 
var server3 = new Array("이현주", "신윤재", false, undefined);  // 3) new연산자, Array 객체 생성자

console.log(`server1 : `, server1);
console.log(`server2 : `, server2);
console.log(`server3 : `, server3);

/* 2. 배열의 추가 */

server1.push(123);  // 1) push() 메소드
server2[server2.length] = true; // 2) length 프로퍼티
server3[99] = "김하나";   // 3) 특정 인덱스 지정

console.log();
console.log(`server1 : `, server1);
console.log(`server2 : `, server2);
console.log(`server3 : `, server3); //... <95 empty items>


/* 3 배열의 순회 */

let str1 = 'server1에는 "';
for (var item of server1) { // 1)  for-of, 엘리먼트를 하나씩 가져옴
    str1 += item + ',';
}
str1 += '"이 들어있어요';
console.log();
console.log(str1);

let str2 = 'server2에는 "';
for (var item in server2) { // 2) for-in, 인덱스를 하나씩 가져옴
    str2 += server2[item] + ',';
}
str2 += '"이 들어있어요';
console.log(str2);

let str3 = 'server3에는 "';
server3.forEach(item => str3 += item + ', ');   // 3) forEach, 엘리먼트를 하나씩 가져옴, 콜백함수를 등록할 수 있음
str3 += '"이(가) 들어있어요';
console.log(str3);
