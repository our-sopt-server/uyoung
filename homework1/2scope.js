/* var scope : function
** let, const scope : block */

function funcScope() {
    var v1 = 123;
    if (true) {
        var v1 = 321;
        let ll = 'abc';
        console.log(`let은 Block Scope, ll : `, ll);
    }
    //console.log(`let은 Block Scope, ll : `, ll);  // ReferenceError
    console.log(`var은 function Scope, v1 : `, v1); // 321
}

funcScope();
console.log(`var은 function Scope, v1 : `, v1); // ReferenceError
