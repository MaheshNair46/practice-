/*

Q. 1
Write a JavaScript function or a line of code to check whether an `input` is an array or not.

Test Data :
const data = 'w3resource'
const data1 = [1, 2, 4, 0]

*/



const data='w3resource'
const data1 = [1, 2, 4, 0]
console.log(typeof{});
console.log(typeof[]);

const hay ='how are you '
console.log()
console.log( Array.isArray(hay));

console.log('it is an array ', ( hay instanceof Array))
console.log('it is an array ', ( data instanceof Array))
console.log('it is an array ', ( data1 instanceof Array))



/*
Q.2
Write a JavaScript function or a line of code to clone an array.
const data = ['w3resource','w3resource','w3resource']
const data1 = [1, 2, 4, 0]
*/


const data3 = ['1, 2, 4, 0']
const copyar =[]
for (let i=0; i < data3.length;i++)
{
    copyar[i]=data3[i]
    
    console.log('this is the original data',data3)
    console.log('this is the duplicat data ',copyar)

    
}
/*

Q.3
Write a JavaScript function to get the first element of an array. Passing the parameter 'n' will return the first 'n' elements
of the array.
const data = [[7, 9, 0, -2]]
*/

function Elements(arr, n = 1) {
    if (!Array.isArray(arr)) {
      return [];
    }
    if (n <= 0) {
      return [];
    }
    return arr.slice(0, n);
  }
  const first = [[7, 9, 0, -2]];
  const firstElement =Elements(first[0]);

  console.log(firstElement)








