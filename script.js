arr = [5,8,10,7,9,11]
//Replace 7,9,11 with 17,19,111
console.log(arr)
arr.splice(3,3,17,19,111)
console.log(arr)
//output - [5, 8, 10, 17, 19, 111]


//Insert 100 in the beginning
newarr = [5,8,10,7,9,11]
newarr.unshift(100)
console.log(newarr)
//output - [100, 5, 8, 10, 7, 9, 11]

//Insert 200 in last but one position
newone = [5,8,10,7,9,11]
newone.splice(5,0,200)
console.log(newone)
// output - [5, 8, 10, 7, 9, 200, 11]


// Add 1000 at the end
newones = [5,8,10,7,9,11]

console.log(newones.splice(6,1,0+1000))
console.log(newones)
//output - [5, 8, 10, 7, 9, 11, 1000]
// Insert 0 in the middle. use arr.length to find middle
console.log(newones.length) 
newones.splice(4,0,0)
console.log(newones)
//output - [5, 8, 10, 7, 0, 9, 11, 1000]