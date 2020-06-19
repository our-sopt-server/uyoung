/* JSON, 자바스크립트 객체 표현식, 
         클라이언트와 통신식 주로 사용(application/json) 
         프로퍼티(이름 : 값)로 구성된 정렬되지 않은 집합 */

/* 1. JSON 객체 */

var sopt = {
    name : 'OUR SOPT',
    slogan : 'WE LEAD OUR SOPT',
    part : ['plan', 'design', 'android', 'iOS', 'server'],
    number : 180,
    printName : function() {
        console.log('name : ', this.name)
    },
    printNum : () => {
        console.log('numver : ', this.number)
    },
};

console.log('typeof sopt : '+ typeof sopt); // 연산자 typeof A, A의 타입 반환
// var num = 123;
// var array = Array(123, 'abc', null, false);
// console.log("num : " + num);
// console.log("array : " + array);
console.log("sopt : " + sopt);  // JSON 객체는 [object Object] 출력
console.log('sopt : ', sopt);
console.log('sopt : ' + JSON.stringify(sopt));  // stringify 메소드, json객체->string객체 변환 (<-> parse)

sopt.printName();
sopt.number = 190;
sopt.printNum();

/* 2. JSON 배열 실습 */

var dogs = [
    { name: '식빵', family: '웰시코기', age: 1, weight: 2.14},
    { name: '콩콩', family: '포메라니안', age: 3, weight: 2.5},
    { name: '두팔', family: '푸들', age: 7, weight: 3.1}
];

console.log('dogs : ' + dogs);  // [object Object],[object Object],[object Object] 출력
console.log('dogs : ', dogs);
console.log('dogs :' , JSON.stringify(dogs));
console.log('dogs :' + JSON.stringify(dogs));   // 동일

dogs.forEach(dog => console.log(dog.name + '이는 ' + dog.family + '(이)고, ' + dog.age + "살입니다"));