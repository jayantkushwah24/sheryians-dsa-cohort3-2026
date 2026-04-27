let map = new Map();
map.set("jayant", 6);
map.set("kushwah", 1);
map.set("mahi", 7);
map.set("dishika", 17);
// console.log(map);
// console.log(map.get("mahi")); // 7
map.delete("dishika");
// console.log(map.has("jayant")); // true
// console.log(map.size); // 3
console.log(map.get(7));

for (let key of map.keys()) {
//   console.log(key);
}
for (let value of map.values()) {
//   console.log(value);
}
