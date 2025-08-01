// 1) Find the "JavaScript" in an array
let str = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'];
let search = 'JavaScript';
for (let i = 0; i < str.length; i++) {
  if (str[i] === search) {
    console.log(`Found ${search} at index ${i}`);
    break;
  }
}

// 2) Find duplicate elements in an array
const arr = [20, 57, 44, 10, 100, 57, 44, 54];
for(let i = 0; i < arr.length; i++) {
    for(let j = i + 1; j < arr.length; j++) {
        if(arr[i] == arr[j]) {
            console.log(`Duplicate element found: ${arr[i]}`);
        }
    }
}




