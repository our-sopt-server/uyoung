function funcScope() {
    var vl = 123;
    if (true) {
        var v2 = 123;
        let ll = 'abc';
        console.log('let 은 Block Scope, ll : ', ll);
    }

    //console.log('let 은 Block Scope, ll : ', ll);
    console.log('var 은 Function Scope, v2 : ', v2);
}
funcScope();
//console.log('var 은 Function Scope, v1 : ', v1);
