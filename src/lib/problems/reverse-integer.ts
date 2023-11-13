import { Problem } from "@/types/problems";
import assert from "assert";

const starterCode = `function reverseInteger(a, b){
    // Write your code here
};`;

// Handler function
const handlerReverseInteger = (fn: any) => {
  try {
    // Define your test cases
    const input = [123, -123, 120, 1534236469];

    const answers = [321, -321, 21, 0];

    for (let i = 0; i < input.length; i++) {
      const result = fn(input[i]);
      assert.deepStrictEqual(result, answers[i]);
    }

    return true;
  } catch (error: any) {
    console.log("reverseInteger handler function error");
    throw Error(error);
  }
};

// Problem description
export const reverseInteger: Problem = {
  id: "reverse-integer",
  title: "Reverse Integer",
  slug: "reverse-integer",
  difficulty: "easy",
  acceptance: "51.5",
  category: "All",
  status: "Todo",
  order: 1,
  problemStatement: `<p class='mt-3'>
    Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
  </p>
  <p class='mt-3'>
    Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
  </p>
  <p class='mt-3'>
    Examples:
  </p>
  <ul class='mt-3'>
    <li>Input: x = 123</li>
    <li>Output: 321</li>
  </ul>
  <ul class='mt-3'>
    <li>Input: x = -123</li>
    <li>Output: -321</li>
  </ul>
  <ul class='mt-3'>
    <li>Input: x = 120</li>
    <li>Output: 21</li>
  </ul>
  <p class='mt-3'>
    Constraints:
  </p>
  <ul class='mt-3'>
    <li>-231 <= x <= 231 - 1</li>
  </ul>`,
  examples: [
    {
      id: 1,
      inputText: "123",
      outputText: "321",
      explanation: "The reverse of 123 is 321.",
    },
    {
      id: 2,
      inputText: "-123",
      outputText: "-321",
      explanation: "The reverse of -123 is -321.",
    },
    {
      id: 3,
      inputText: "120",
      outputText: "21",
      explanation: "The reverse of 120 is 21.",
    },
  ],
  constraints: `<ul class='mt-2'>
    <li>-231 <= x <= 231 - 1</li>
  </ul>`,
  starterCode: starterCode,
  handlerFunction: handlerReverseInteger,
  starterFunctionName: "reverseInteger",
};


