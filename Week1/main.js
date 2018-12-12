

console.log("Hello man");
console.log("Salam ya rijal");
console.log("marhaba");

//  let x = 5;
// console.log("Hello World " +x);
document.write("Another Test");

console.log('I\'m awesome');

let x;
console.log("I think for the x will be undefined");
console.log(x);

x = 1;
    console.log("I think for the x will be 1");
    console.log(x);


let y = "Firts words";
console.log("I think for the y will be Firsts words");
console.log(y);
y = "Second words";
console.log("I think for the y will be Second words");
console.log(y);

let z = 7.25;


let a = Math.round(z);
let bigval;
if ( z>a)
{
    bigval = z
    console.log( "the biggest value is z "+bigval);
}
else if ( a>z)
{
bigval=a
console.log("the biggest value is a "+bigval);
}
else
conslue.log("a and z are the same");


//Array
let array=[];
console.log("The array value will be undefined");
console.log(array[0]);
let r;
for (r=0 ; r< array.length;r++)
{
    console.log(array[r]);
}

let animalslist= ["Dog", "cat", "fish"];
let t;
for (   t=0 ; t< animalslist.length;t++)
{
    console.log(animalslist[t]);
}
animalslist.push("baby big");

for (  let t=0 ; t< animalslist.length;t++)
{
    console.log(animalslist[t]);

}

//string

let myString = "this is a test";
console.log(myString);
console.log("myStrying length is: "+ myString.length);

// Types

let w = 2;
let q = 4;
if (typeof(w)== typeof(q))
console.log("w and Q are identical");


// arrays and multiple types
let multiarray = [1, "one", 2, "two", 3, "three"];
console.log("Multiple Array type, printing screen.")
for (r=0 ; r< multiarray.length;r++)
{
    console.log(multiarray[r]);
}


// Testing infinty:
if (isFinite(6/0)===true)
{
    console.log(" 6/0 is not infinite  ");
}
else{
    console.log(" 6/0 is infinite ");
}

if (isFinite(10/0)===true)
{
    console.log(" 10/0 is not infinite  ");
}
else{
    console.log(" 10/0 is infinite ");
}

if( (isFinite(10/0) && isFinite(6/0))=== false)
{
    console.log("both numbers are equal and infinite");
}