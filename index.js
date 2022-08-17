

// function color(vegetable){
//     let vegetables = { 
//         carrot:"orange",
//         tomato:"red",
//         cucumber:"green",
//         cabbage:"white",
//         potato:"brown"
//     };
//     return vegetables[vegetable]
// }
// console.log(color("carrot"));

// function max(array_elements){

//     max_element = Math.max(...array_elements)
//     return max_element
// }

// let array_elements = [5,4,6,7,3];
// c=max(array_elements);
// console.log(c);



// let arr = [1,2,3,[4,5]];
// let count=0;
// arr.map(function breakarr(e)
// {
//     if(Array.isArray(e))
//     {
//         return e.map(breakarr)
//     }
//     count += 1;
// }) 
// console.log(count);

// function cutInHalfAndFloor(num) {
//     return `Invoking cutInHalfAndFloor on ${(num)} and the output is ${(Math.floor(num/2))}`;
//   }

// console.log(cutInHalfAndFloor(22));



// function titleCaseEdit(title) {
//     const arr = title.split(" ");
//     const capital = [];
//     for(let i = 0;i < arr.length;i++)
//     {
//         let c=arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
//         capital.push(c); 
//     }
//     let cap = capital.join(" ");
//     console.log(cap);
    
//   }
  
//   titleCaseEdit("the Road not taken")

// function getHashTags(title) {
//     const arr = title.split(" ");
//     const asc = arr.sort((a,b) => b.length - a.length);
//     const hashtag = [];
//     let n = asc.length<=3?asc.length:3;
//     {
//         for(let i = 0; i < n;i++)
//     {
//         let c = '#' +  asc[i];
//         hashtag.push(c);
//     }
//         console.log(hashtag);
//     } 
    
// }

// getHashTags("How the");

// let array=[];
// function fizzBuzz(start, end) {
//     for(let i=start;i<=end;i++){
//         if(i%3==0 && i%5==0){
//             array.push("FIZZBUZZ")
//         }
//         else if(i%5==0){
//             array.push("BUZZ");
//         }
//         else if(i%3==0){
//             array.push("FIZZ");
//         }
//         else(array.push(i));
//     }
//     console.log(array);
//   }
  
//   fizzBuzz(1, 15);


// function productOfNumbers(...num)
// {
// let n = num.length;
// let product=1;
// for(let i=0;i<n;i++)
// {
//     product = num[i]*product;
// }
// console.log(product);
// }

// function distanceTravel(cost)
// {
//     let dist=0;
//     if(cost!=0)
//     {
//     dist++;
//     cost-=3
//     }
//     while(cost!=0)
//     {
//         dist++;
//         cost-=2;
//     }
//     return dist;
// }
// console.log(distanceTravel(0));


// productOfNumbers(3,2,5);

// const  Set1 = new Set([3,4,5])
//  const Set2 = new Set([6,5,3])
//  const Set3 = new Set([3,9,6])
//  const Set4 = new Set([...Set1, ...Set2, ...Set3]) 
//  console.log(Set4)

// let str =  '{"Javascript" : "The Good Parts", "Author": "Douglas Crockford"}';

// let obj = JSON.parse(str);
// console.log(obj.Author);


// let a = 4;
// let b = 5;
// let mult = a * b;
// console.log(mult);


class Person{
    constructor(fname,lname){
        this.fname=fname;
        this.lname=lname;
        console.log(`My name is ${(fname)} ${(lname)}`);
    }
}
let p1 = new Person('varun','gm');
console.log(p1.fname);
console.log(p1.__proto__);


//updating for git