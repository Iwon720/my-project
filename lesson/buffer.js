const bufAlloc = Buffer.alloc(10, 'a');
// const bufFrom = Buffer.from('aaaaa');
const man = {name: "Andrusha", age: 55};
const bufFrom = Buffer.from(JSON.stringify(man));

console.log(bufAlloc);
console.log(bufFrom.toString());