import { Problem } from "@/types/problems";
import assert from "assert";

const starterCodeTwoSum = `function longestPalindromicSubstring(nums,target){
    // Write your code here
};`;

// checks if the user has the correct code
const handlerLongestPalindromicSubstring = (fn: any) => {
  try {
    // Define your test cases
    const input = ["babad", "cbbd", "a", "ac"];

    const answers = ["bab", "bb", "a", "a"];

    for (let i = 0; i < input.length; i++) {
      const result = fn(input[i]);
      assert.deepStrictEqual(result, answers[i]);
    }

    return true;
  } catch (error: any) {
    console.log("longestPalindromicSubstring handler function error");
    throw Error(error);
  }
};

export const longestPalindromicSubstring: Problem = {
  id: "longest-palindromic-substring",
  title: "Longest Palindromic Substring",
  slug: "longest-palindromic-substring",
  difficulty: "medium",
  acceptance: "31.5",
  category: "All",
  status: "Todo",
  order: 1,
  problemStatement: `<p class='mt-3'>
      Given a string s, find the longest palindromic substring.
    </p>
    <p class='mt-3'>
      Examples:
    </p>
    <ul class='mt-3'>
      <li>Input: s = "babad"</li>
      <li>Output: "bab"</li>
    </ul>
    <ul class='mt-3'>
      <li>Input: s = "cbbd"</li>
      <li>Output: "bb"</li>
    </ul>
    <p class='mt-3'>
      Constraints:
    </p>
    <ul class='mt-3'>
      <li>1 <= s.length <= 1000</li>
      <li>s consists of English letters, digits, symbols, and spaces.</li>
    </ul>`,
  examples: [
    {
      id: 1,
      inputText: "babad",
      outputText: "bab",
      explanation: "The longest palindromic substring is 'bab'.",
    },
    {
      id: 2,
      inputText: "cbbd",
      outputText: "bb",
      explanation: "The longest palindromic substring is 'bb'.",
    },
  ],
  constraints: `<ul class='mt-2'>
      <li>1 <= s.length <= 1000</li>
      <li>s consists of English letters, digits, symbols, and spaces.</li>
    </ul>`,
  starterCode: `function longestPalindromicSubstring(s: string) {
      // Write your code here
    };`,
  handlerFunction: handlerLongestPalindromicSubstring,
  starterFunctionName: "longestPalindromicSubstring",
};
