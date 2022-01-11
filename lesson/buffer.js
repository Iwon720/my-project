const buf = Buffer.alloc(10,'A');
const man = { name: 'Andrusha', age:55 }
const bufFrom = Buffer.from(JSON.stringify(man));
console.log(bufFrom.toJSON())