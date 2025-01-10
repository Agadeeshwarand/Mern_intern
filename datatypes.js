console.log("hiiiii");
a = 1;
b = 'a';
c = "string";
console.log(a);
console.log(b);
console.log(c);
//object declarations
//1st
obj = { firstname: "hello", lastname: "world" }
console.log(obj)
//2nd
obj1 = {};
console.log(obj1)
//3rd
obj2 = new Object();
obj2.count = 70;
obj2.abs = 1;
console.log(obj2);
//Set
set = new Set(["hiiiii", 2, "hello"], 4);
console.log(typeof (set));
set.add(1);
set.add(1);
console.log(set);