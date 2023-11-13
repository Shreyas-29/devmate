import { Problem } from "@/types/problems";
import assert from "assert";

const starterCode = `function regularExpressionMatching(l1, l2){
    // Write your code here
};`;


const handlerRegularExpressionMatching = (fn: any) => {
  try {
    // Define your test cases
    const input = [
      ["aa", "a"],
      ["aa", "a*"],
      ["ab", ".*"],
      ["aab", "c*a*b"],
      ["mississippi", "mis*is*p*."],
    ];

    const answers = [false, true, true, true, true];

    for (let i = 0; i < input.length; i++) {
      const [s, p] = input[i];
      const result = fn(s, p);
      assert.deepStrictEqual(result, answers[i]);
    }

    return true;
  } catch (error: any) {
    console.log("handlerRegularExpressionMatching function error");
    throw Error(error);
  }
};

export const regularExpressionMatching: Problem = {
  id: "regular-expression-matching",
  title: "Regular Expression Matching",
  slug: "regular-expression-matching",
  difficulty: "hard",
  acceptance: "30.8",
  category: "All",
  status: "Todo",
  order: 4,
  problemStatement: `<p class='mt-3'>
    Given an input string (s) and a pattern (p), implement regular expression matching with support for '.' and '*'.
  </p>
  <p class='mt-3'>
    '.' Matches any single character.
  </p>
  <p class='mt-3'>
    '*' Matches zero or more of the preceding element.
  </p>
  <p class='mt-3'>
    The matching should cover the entire input string (not partial).
  </p>`,
  examples: [
    {
      id: 1,
      inputText: `"aa"`,
      outputText: `"a"`,
      explanation: "The string 'aa' matches the pattern 'a' because the '.' matches any single character.",
    },
    {
      id: 2,
      inputText: `"aa"`,
      outputText: `"a*".`,
      explanation: "The string 'aa' matches the pattern 'a*' because the '*' matches zero or more of the preceding element.",
    },
    {
      id: 3,
      inputText: `"ab"`,
      outputText: `".*".`,
      explanation: "The string 'ab' matches the pattern '.*' because the '.' matches any single character and the '*' matches zero or more of the preceding element.",
    },
    {
      id: 4,
      inputText: `"aab"`,
      outputText: `"c*a*b".`,
      explanation: "The string 'aab' matches the pattern 'c*a*b' because the 'c*' matches zero or more of the character 'c', the 'a*' matches zero or more of the character 'a', and the 'b' matches the character 'b'.",
    },
    {
      id: 5,
      inputText: `"mississippi"`,
      outputText: `"mis*is*p*."`,
      explanation: "The string 'mississippi' matches the pattern 'mis*is*p*.' because the 'mis*' matches zero or more of the string 'mis', the 'is*' matches zero or more of the string 'is', and the 'p*.' matches zero or more of the character 'p' followed by the end of the string.",
    },
  ],
  constraints: `<ul class='mt-2'>
    <li>0 <= s.length <= 20</li>
    <li>0 <= p.length <= 30</li>
    <li>s consists of characters from the set {0-9, a-z, A-Z}</li>
    <li>p consists of characters from the set {0-9, a-z, A-Z, *, .}</li>
  </ul>`,
  starterCode: starterCode,
  handlerFunction: handlerRegularExpressionMatching,
  starterFunctionName: "regularExpressionMatching",
};
