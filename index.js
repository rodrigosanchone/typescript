//console.log('hola mundo');
//tipos de datos
var myString = "Hola Mundo";
myString = 22 + ""; //lo transforma en un string
var myNumbre = 22;
var myBool = true;
var myVar = "hello";
myVar = 22 + "";
//string
var StringArray = ['item1', 'item2', 'item3'];
var NumberArrya = [1, 2, 3];
var BooleanArrya = [true, false, true];
var AnyArrya = [1, "hola", false];
//document.write(myString);
var strNUmTuple;
strNUmTuple = ['hola', 3];
//void, undefined, null
var myVoid = undefined; //tipo de dato vacion
var myNull = null; //tipo dedato nulo
var myUndefined = undefined; //tipo de dato undefinido
//document.write(typeof(myVoid));
//function
function getSum(num1, num2) {
    return num1 + num2;
}
//Interface
getSum(4, 10);
var mySum = function (num1, num2) {
    if (typeof (num1) === 'string') {
        num1 = parseInt(num1);
    }
    if (typeof (num2) === 'string') {
        num2 = parseInt(num2);
    }
    return num1 + num2;
};
function getName(firsName, lastName) {
    if (lastName == undefined) {
        return firsName;
    }
    return "".concat(firsName, "  ").concat(lastName);
}
function showTodo(todo) {
    console.log("".concat(todo.title, " -").concat(todo.text));
}
var myTodo = {
    title: 'Eat breakfast',
    text: 'Lorem'
};
showTodo(myTodo);
/*  showTodo({
     title:'Eat Dinner',
     text: 'Lorem'
 }); */
//clases
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    User.prototype.register = function () {
        console.log("".concat(this.name, " is registered!"));
    };
    User.prototype.showMeAge = function () {
        return this.age;
    };
    return User;
}());
var Jhon = new User('Jhon');
console.log(Jhon.register());
document.write(Jhon.email);
