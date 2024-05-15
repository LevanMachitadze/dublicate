let array = [1, 2, 2, 3, 3, 4, 4];

for (let i = 0; i < array.length; i++) {
  if (array[i] === array[i + 1]) {
    array.splice(i, 1);
  }
}

console.log(array);
