import { Problem } from "@/types/problems";
import assert from "assert";

const starterCode = `function longestSubstringWithoutRepeatingCharacters(s) {
    // Write your code here
};`;

// Checks if the user has the correct code
const handlerLongestSubstring = (fn: any) => {
  try {
    // Define your test cases
    const input = [
      "abcabcbb",
      "bbbbb",
      "pwwkew",
      "au",
      "",
    ];

    const answers = [
      3,
      1,
      3,
      2,
      0,
    ];

    for (let i = 0; i < input.length; i++) {
      const result = fn(input[i]);
      assert.deepStrictEqual(result, answers[i]);
    }

    return true;
  } catch (error: any) {
    console.log("longestSubstringWithoutRepeatingCharacters handler function error");
    throw Error(error);
  }
};


export const longestSubstring: Problem = {
  id: "longest-substring",
  title: "Longest Substring Without Repeating Characters",
  slug: "longest-substring",
  difficulty: "medium",
  acceptance: "31.5",
  category: "All",
  status: "Todo",
  order: 3,
  problemStatement: `<p class='mt-3'>
      Given a string, find the length of the longest substring without repeating characters.
    </p>
    <p class='mt-3'>
      Examples:
    </p>
    <ul class='mt-3'>
      <li>Input: "abcabcbb"</li>
      <li>Output: 3</li>
    </ul>
    <ul class='mt-3'>
      <li>Input: "bbbbb"</li>
      <li>Output: 1</li>
    </ul>
    <ul class='mt-3'>
      <li>Input: "pwwkew"</li>
      <li>Output: 3</li>
    </ul>
    <p class='mt-3'>
      Constraints:
    </p>
    <ul class='mt-3'>
      <li>1 <= s.length <= 5 * 10^4</li>
      <li>s consists of English letters, digits, symbols, and spaces.</li>
    </ul>`,
  examples: [
    {
      id: 1,
      inputText: "abcabcbb",
      outputText: "3",
      explanation: "The longest substring without repeating characters is 'abc'.",
    },
    {
      id: 2,
      inputText: "bbbbb",
      outputText: "1",
      explanation: "The longest substring without repeating characters is 'b'.",
    },
    {
      id: 3,
      inputText: "pwwkew",
      outputText: "3",
      explanation: "The longest substring without repeating characters is 'wke'.",
    },
  ],
  constraints: `<ul class='mt-2'>
      <li>1 <= s.length <= 5 * 10^4</li>
      <li>s consists of English letters, digits, symbols, and spaces.</li>
    </ul>`,
  starterCode: starterCode,
  handlerFunction: handlerLongestSubstring,
  starterFunctionName: "longestSubstring",
};
