

//  Write your own call, apply and bind methods

function customCall(func,context,args){
    return func.apply(context,args);
}

// const func = function(name) {
//     console.log(`Hello, ${this.name}`);
//   };
  
//   customCall(func, { name: "John" }); // "Hello, Javascript"

  function customApply(func,args){
   return func.apply(this,args)
  }

//   const func1 = function(name) {
//     console.log(`Hello, ${name}`);
//   };
  
//   customApply(func1, [ "John"]); // "Hello, Javascript"

function customBind(func,context,args){
    const boundFunction = function (){
        return func.apply(context,args)
    }
    return boundFunction;
}

// const func2 = function(name) {
//     console.log(`Hello, ${name}`);
//   };
  
//   const boundFunc = customBind(func, { name: "John" });
  
//   boundFunc();