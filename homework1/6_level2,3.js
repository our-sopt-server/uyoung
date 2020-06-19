var group = {
    member : [
        { name : "유가희", nickname : "가희", age : 22 },
        { name : "최영훈", nickname : "영훈", age : 26 },
        { name : "김민지", nickname : "민지", age : 24 },
        { name : "홍민정", nickname : "민정", age : 22 },    
    ],

    printInfo : function()  {
        this.member.forEach( 
            item => console.log("이름 : " + item.name + ", 별명 : " + item.nickname + ", 나이 :" + item.age)
        )
    },
 };
 
 group.printInfo();
 