//write your code here
//1

const reverseString = (str) => {
  let output = "";
  for (let i = str.length - 1; i >= 0; i--) {
    output += str[i];
    console.log(output);
  }
  return output;
};

reverseString("benaty");
