//console.log('hola mundo');

//tipos de datos
var myString: string ="Hola Mundo";
myString =22 +""; //lo transforma en un string

var myNumbre: number =22;
var myBool: boolean=  true;

var myVar = "hello";
myVar= 22 + "";



//string
var StringArray: string[]=['item1','item2','item3']
var NumberArrya: number[]=[1,2,3]
var BooleanArrya: boolean[]=[true,false,true]
var AnyArrya: any[]=[1,"hola",false]
//document.write(myString);

var strNUmTuple: [string,number];
strNUmTuple=['hola',3];

//void, undefined, null
let myVoid: void= undefined; //tipo de dato vacion
let myNull:  null = null;//tipo dedato nulo
let myUndefined: undefined= undefined//tipo de dato undefinido
//document.write(typeof(myVoid));

//function
function getSum(num1:number, num2:number):number{
    return num1 +num2;
}

getSum(4,10);


let mySum = function(num1:number|string,num2:number|string):number{
    if(typeof(num1)==='string'){
        num1= parseInt(num1);
    }

    if(typeof(num2)==='string'){
        num2= parseInt(num2);
    }

    return num1+num2
}

function getName(firsName:string, 
    lastName?:string
    ):string{
        if(lastName==undefined){
            return firsName;
        }
    return `${firsName}  ${lastName}`;
}


//document.write(getName("Pablo","Solo"));

