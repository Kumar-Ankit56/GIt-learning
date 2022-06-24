<<<<<<< HEAD
/*//case 1
function a(){
    console.log(b); //Instead of printing the undefined it prints 10, So somehow this a function could access the variavle b outside the function scope.
}
var b=10;
a();
//here in this case a local variable of function can access global variable.
*/


/*//case 2
function a(){
    c();
    function c(){
        console.log(b);
    }
}
var b=10;
a();
//Her it shows that within the nested funciton too the floval scope variable can be accessed.
*/


///case 3
function a(){
    c();
    function c(){
        var b=100;
        console.log(b);
    }
}
var b=10;
a();

//Here it means that local variable of the same name took precedence over a global variable.



/*//Case 4
function a(){
    var b=10;
    c();
    function c(){
        console.log(b);
    }
}

a();
console.log(b);
//A function can access the gloabl variabl but a GEC doesnt the behavior.
*/



//Scope means where you can access a specific variable and function in a code.


/*two way to look up around a variable as what is the scope of any variable.
Can i access a variable inside a function.*/

=======
//When variable is declared but not assigned value its value is undefined but when the variavle itself is not declared but called in code then it is notdefined


console.log(x);
var x= 45;
console.log(b);
console.log(x);
>>>>>>> 1b90224cadd145f6735e16c514f76ba6f3efb9d0
