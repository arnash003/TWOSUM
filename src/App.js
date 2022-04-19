import "./styles.css";

const input = [1, 3, 10, 11, 13];

function twoSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    const diffIndex = array.indexOf(target - array[i]);
    if (diffIndex >= 0 && diffIndex !== i) {
      return [i, diffIndex];
    }
  }
  return []; // no solution found
}

console.log(twoSum(input, 13)); // outputs [1,2]

const answer = twoSum(input, 13);
document.getElementById("app").innerHTML = `
<h1>Answer: ${JSON.stringify(answer)}</h1>
`;
