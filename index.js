function  receivesAFunction(callback){
    return callback();
}
receivesAFunction(()=>{return "i'm a callback function";});

function returnsANamedFunction(){
    return function name(){return "i'm a named function";};
}

function returnsAnAnonymousFunction(){
    return ()=>"i'm anonymous function";
}