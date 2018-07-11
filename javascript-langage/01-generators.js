function *exemple1() {
  yield 1;
  yield 2;
  yield 10;
}

const it1 = exemple1();

console.log(it1.next().value);
console.log(it1.next().value);
console.log(it1.next().value);

for (const value of exemple1()) {
  console.log(value);
}