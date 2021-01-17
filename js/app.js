var number = 15;
while ( number<15)
{
    
    console.log(number);
    number--;
}


for ( n1 = 0 ; n1<10 ; n1++) 
{
    console.log(n1);
}



for ( number = 0; number <4; number++)
{
    console.log(number);

}



function multiply ( number1, number2,)
 {
    return( number1*number2);
}

var x = 5;
var y = 6;
var result = multiply(x,y);
console.log(result);




function multiplication ( n1, n2, n3)
{
    return(n1*n2*n3);
}
var a = 2;
var b = 3;
var c = 4;
var result = multiplication(a,b,c);
alert(result);
console.log(result);


function carre (a){
    return(a*a);
}
var x=10;
var result = carre(x);
alert(result);

var eleve = {nom: "moussa", age: 18, ecole:"pascaline"}
if( eleve.age >=18)
{
    console.log('tu peux passer ton permis');
}
else if (eleve.age >=18)
{
    console.log('tu dois etre accompagné');
}
else {
    console.log('tu ne peux pas conduire');
}
