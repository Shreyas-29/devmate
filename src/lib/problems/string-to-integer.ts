import { Problem } from "@/types/problems";
import assert from "assert";

const starterCode = `function stringToInteger(s){
    // Write your code here
};`;


const handlerStringToInteger = (fn: any) => {
  try {
    // Define your test cases
    const input = ["42", "   -42", "4193 with words", "words and 987", "  -91283472332"];

    const answers = [42, -42, 4193, 0, -2147483648];

    for (let i = 0; i < input.length; i++) {
      const result = fn(input[i]);
      assert.deepStrictEqual(result, answers[i]);
    }

    return true;
  } catch (error: any) {
    console.log("stringToInteger handler function error");
    throw Error(error);
  }
};

export const stringToInteger: Problem = {
  id: "string-to-integer",
  title: "String to Integer (atoi)",
  slug: "string-to-integer",
  difficulty: "medium",
  acceptance: "28.5",
  category: "All",
  status: "Todo",
  order: 3,
  problemStatement: `<p class='mt-3'>
    Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer (similar to C/C++'s atoi function).
  </p>
  <p class='mt-3'>
    The algorithm for myAtoi(string s) is as follows:
  </p>
  <ul class='mt-3'>
    <li>Read in and ignore any leading whitespace.</li>
    <li>Check if the next character (if not already at the end of the string) is '-' or '+'. Read this character in if it is either.</li>
    <li>Assume the result is positive if neither is present.</li>
    <li>Read in next the characters until the next non-digit character or the end of the input is reached.</li>
    <li>Convert these digits into an integer (i.e. "123" -> 123, "0" -> 0, "-5" -> -5, etc.).</li>
    <li>If the first character was a '-', the result should be negative.</li>
    <li>Return the result, or 0 if the result is out of range of a 32-bit signed integer (-2147483648 to 2147483647).</li>
  </ul>
`,
  examples: [
    {
      id: 1,
      inputText: `"42"`,
      outputText: "42",
      explanation: "The string '42' is a valid integer and can be converted to the integer 42.",
    },
    {
      id: 2,
      inputText: `"   -42"`,
      outputText: "-42",
      explanation: "The string ' - 42' contains leading whitespace and a negative sign, but it is otherwise a valid integer and can be converted to the integer -42.",
    },
    {
      id: 3,
      inputText: `"4193 with words"`,
      outputText: "4193",
      explanation: "The string '4193 with words' contains trailing words, but the integer 4193 can be parsed from the input string.",
    },
    {
      id: 4,
      inputText: `"words and 987"`,
      outputText: "0",
      explanation: "The first non-whitespace character in the string is not a digit, so the result is 0.",
    },
    {
      id: 5,
      inputText: `"-91283472332"`,
      outputText: "-2147483648",
      explanation: "The integer -91283472332 is out of range of a 32-bit signed integer, so the result is -2147483648, which is the minimum possible value for a 32-bit signed integer.",
    },
  ],
  constraints: `<ul class='mt-2'>
    <li>The string s consists of English letters, digits, spaces, and '+'/'-'.</li>
    <li>It is guaranteed that s consists of at least one character.</li>
    <li>s cannot start with spaces.</li>
    <li>For non-empty s, the first non-whitespace character must be a digit, a sign character, or an English letter.</li>
    <li>If s consists of only English letters, the result is 0.</li>
    <li>The result must be an integer in the range [-2147483648, 2147483647].</li>
  </ul>`,
  starterCode: starterCode,
  handlerFunction: handlerStringToInteger
};