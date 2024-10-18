const num = [2,3,4,5,6,9,1];
console.log("Sort the element of num")
console.log(num.sort());
console.log("Filter function")
console.log(num.filter((n)=>(n%2!=0)));
// second method with map to acces every element
const data = num.filter((n)=>(n%2!=0)).map((a)=>(a*5))
console.log(data)
// reduce method
const data1 = num.filter((n)=>(n%2!=0)).map((a)=>(a*5)).reduce((b,s)=>(b+s))
console.log(data1)