const countVowels = () => {
  const inputString = document.getElementById("inputText").value;
  const result = calculateVowels(inputString);
  document.getElementById("result").textContent = `Number of vowels: ${result}`;
};

const calculateVowels = (input) => {
  input = input.toLowerCase();
  const vowels = ["a", "e", "i", "o", "u"];
  let vowelCount = 0;

  for (let char of input) {
    if (vowels.includes(char)) {
      vowelCount++;
    }
  }

  return vowelCount;
};
