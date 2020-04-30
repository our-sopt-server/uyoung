/*      1. JASON 객체  {}     */

var sopt = {
    name : 'OUR SOPT',          //프로퍼티 :이름과 값으로 구성
    slogan : 'WE LEAD OUR SOPT',
    part : ['plan', 'design', 'android', 'iOS', 'server'],
    number : 180,
    printName : function () {           //메소드 :함수인 프로퍼티
        console.log('name : ', this.name)
    },
    printNum : function () {
        console.log('number : ', this.name)
    }
};

console.log('typeof sopt : ' + typeof sopt);            //typeof 연산자 :변수의 데이터타입 반환
                                                        /* expected output |    typeof sopt : object */
console.log('sopt : ' + sopt);          /* expected output |    [object Object] */
console.log('sopt : ', sopt);

console.log('sopt :' +JSON.stringify(sopt));            //JASON.stringify() :JavaScript 값이나 객체를 JSON 문자열로 변환
/* expected output |    sopt :{"name":"OUR SOPT","slogan":"WE LEAD OUR SOPT","part":["plan","design","android","iOS","server"],"number":180} */

sopt.printName();
sopt.number = 190;
sopt.printNum();


/*      2. JASON 배열  []     */

var dogs = [
    { name: '식빵', family: '웰시코기', age: 1, weight: 2.14},
    { name: '콩콩', family: '포메라니안', age: 3, weight: 2.5},
    { name: '두팔', family: '푸들', age: 7, weight: 3.1}
];


console.log('dogs : ' + dogs);          /* exepected output |   dogs : [object Object],[object Object],[object Object] */
console.log('dogs : ', dogs);
console.log('dogs :' + JSON.stringify(dogs));


dogs.forEach( 
    dog => console.log(dog.name+'이는 종이 '+dog.family+'이고, 나이가 '+dog.age+'세입니다 ~')           //dog로 해도 가능
);          //세미콜론 주의
