import { Problem } from "@/types/problems";
import assert from "assert";

const starterCode = `function zigZagConversion(a1, b1){
    // Write your code here
};`;

const handlerZigZagConversion = (fn: any) => {
  try {
    // Define your test cases
    const input = [
      { s: "PAYPALISHIRING", numRows: 3 },
      { s: "PAYPALISHIRING", numRows: 4 },
      { s: "A", numRows: 1 },
    ];

    const answers = ["PAHNAPLSIIGYIR", "PINALSIGYAHRPI", "A"];

    for (let i = 0; i < input.length; i++) {
      const result = fn(input[i].s, input[i].numRows);
      assert.deepStrictEqual(result, answers[i]);
    }

    return true;
  } catch (error: any) {
    console.log("zigZagConversion handler function error");
    throw Error(error);
  }
};


export const zigZagConversion: Problem = {
  id: "zigzag-conversion",
  title: "ZigZag Conversion",
  slug: "zigzag-conversion",
  difficulty: "medium",
  acceptance: "28.5",
  category: "All",
  status: "Todo",
  order: 2,
  problemStatement: `<p class='mt-3'>
    The string "PAYPALISHIRING" is written in a zigzag pattern on a board like this:
  </p>
  <p class='mt-3'>
    P A H N
    A P L S I I G
    Y I R
  </p>
  <p class='mt-3'>
    And then read line by line: "PAHNAPLSIIGYIR".
  </p>
  <p class='mt-3'>
    Write the code that will take a string and make this conversion given an integer numRows.
  </p>
  <p class='mt-3'>
    Examples:
  </p>
  <ul class='mt-3'>
    <li>Input: s = "PAYPALISHIRING", numRows = 3</li>
    <li>Output: "PAHNAPLSIIGYIR"</li>
  </ul>
  <ul class='mt-3'>
    <li>Input: s = "PAYPALISHIRING", numRows = 4</li>
    <li>Output: "PINALSIGYAHRPI"</li>
  </ul>
  <p class='mt-3'>
    Constraints:
  </p>
  <ul class='mt-3'>
    <li>1 <= s.length <= 1000</li>
    <li>s consists of English letters (lower-case and upper-case), ',' and ' '.</li>
    <li>1 <= numRows <= 1000</li>
  </ul>`,
  examples: [
    {
      id: 1,
      inputText: "PAYPALISHIRING",
      outputText: "PAHNAPLSIIGYIR",
      explanation: "The input string is written in a zigzag pattern on a board with 3 rows.",
    },
    {
      id: 2,
      inputText: "PAYPALISHIRING",
      outputText: "PINALSIGYAHRPI",
      explanation: "The input string is written in a zigzag pattern on a board with 4 rows.",
    },
  ],
  constraints: `<ul class='mt-2'>
    <li>1 <= s.length <= 1000</li>
    <li>s consists of English letters (lower-case and upper-case), ',' and ' '.</li>
    <li>1 <= numRows <= 1000</li>
  </ul>`,
  starterCode: starterCode,
  handlerFunction: handlerZigZagConversion,
  starterFunctionName: "zigZagConversion",
};
