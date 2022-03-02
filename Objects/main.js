const user = {
    name: 'Mishael',
    age: 21,
    married: false,
    purchases: ['phone', 'car', 'laptop'],
    sayName : function(){
        console.log(this);
        //This keyword refers to the variable that invokes the function in which THIS keyword is used
    }
}
user.sayName()

//Get purchases
// console.log(user.purchases);

//THE KEYWORD THIS
//This keyword always refers toi the windows object
// console.log(this);