// let arr=[4,'ilhom',true]
// for (let i=0;i<=99;i++)
// console.log(arr[99])



// ARRAY METHODS

// push

// let arr = [1,2,3,4]
// arr.push(4)
// console.log(arr)



// unshift

// let arr=[1,2,3,4]
// arr.unshift(0)
// console.log(arr)



// splice

// let arr=[1,2,3,4]
// arr.splice(1,0,'ilhom')
// console.log(arr)





// slice

// let arr=[1,2,3,4]
// arr.slice(0,2)
// console.log(arr)




// at

// let arr=[1,2,3,4]
// let arr2=arr.at(0)
// console.log(arr2)





// callback

// function f (name,age,f1){
//     f1(name,age);
// }
// f('John', (a,b)=>{
//     console.log(a,b)
// })




// 1

// let arr=[1,2,3]
// function getFirstValue(arr){
//     return arr[0]
// }
// console.log(getFirstValue(arr))




// 2

// let arr=[1,2,3]
// function getLAsItem(arr){
//     return arr.at(-1)
// }
// console.log(getLAsItem(arr))




// 3

// function makePair (a,b){
//     return [a,b]
// }
// console.log(makePair(1,2))




// 4

// function drop (a,b){
//      a.splice(0,b)
//      return a
// }
// console.log(drop([1,2,3],1))




// 5

// let arr=[1,2,3,4]
// function reverse(a){
//     return a.reverse()
// }
// console.log(reverse(arr))




// 6





// 7

// let arr=[1,2,3,4,5,6]
// function arrayToString (arr){
//     return arr.join('')
// }
// console.log(arrayToString(arr))




// 8

// let arr=[1,2,'a','b']
// function filterArray (arr){
//    return arr.filter((elem)=>{
//        return typeof (elem)=='number'
//     })
// }
// console.log(filterArray(arr))




// 9

// let arr=[1,3,5]
// let arr2=[2,4,6]
// function concat (arr,arr2){
//     return arr.concat(arr2)
// }
// console.log(concat(arr,arr2))





// 10

// let arr=[1,2,3,4,5]
// function minMax (arr){
//     return [Math.max(...arr)+' '+Math.min(...arr)]
// }
// console.log(minMax(arr))




//task 11

// function arrayType(n){
//     return a = n.map(e => typeof (e));
// }
// console.log(arrayType([1,2,'null',[]]));




//task 12

// function convert(n){
//     return n.toString().split(',')
// }
// console.log(convert(['1',2,3,4,'a','b']));





//task 13

// function sum(n){
//     return n.reduce((a,b)=>{
//         return a+b
//     },0)
// }
// console.log(sum([1,2,3,4,5,6,7,8,9,10]));





//task 14  

// function sorts(n){
//     return n.sort((a,b) =>{
//         return a.length > b.length ? 1 : a.length < b.length ? -1:0;
//     });
// }
// console.log(sorts(['Google', 'Apple', 'Mazhabsho','Ibrohim', 'Ilhom','Hi']));




//task 15

// function numSort(p){
//    return p.sort((a,b)=>{
//     return a>b ? 1 :a<b?-1:0;
//    })

// }
// console.log(numSort([1, 2, 10, 50, 5,0,11,-12]));




//task 16

// function countTrue(n){
//     let cnt = 0;
//     let a = n.map((elem)=>{
//        if(elem === true){
//         cnt++;
//        }
//     })
//     return cnt;
// }
// console.log(countTrue([true, true, false, true]));
// function counts(n){
//     let cnt = 0;
//     for(let i=0;i<n.length;i++){
//         if(n[i] == true){
//             cnt++;
//         }
//     }
//     return cnt;
// }
//console.log(counts([true, true, false, true]));

