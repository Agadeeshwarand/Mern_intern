/*
two kinds of looping 
1.normal looping 
->for
->while
->do ...while
2.Bit advanced looping
->for in
->for of
->for each
*/
var a=[10,20,30]
var b={"count":70,"abs":1}
for(let i in a){
    console.log(i)
}
for(let i in b){
    console.log(i,b[i])
}
set=new Set(["hello",1,2,"44","sece",5,"sece"])
//for(let i in set){
 //   console.log(i)
//}
console.log(set)

for(let i of a){
    console.log(i)

}
var b={"count":70,"abs":1}
for(let [i,j] of Object.keys(b)){
    console.log(i)
}
for(let [i,j] of Object.entries(b)){
    console.log(i,j)
}