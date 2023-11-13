import { Problem } from "@/types/problems";
import assert from "assert";

const starterCode = `function medianOfTwoSortedArrays(s) {
    // Write your code here
};`;

// Checks if the user has the correct code
const handlerAddTwoNumbers = (fn: any) => {
  try {
    // Define your test cases
    const input = [
      { l1: [2, 4, 3], l2: [5, 6, 4] },
      { l1: [0], l2: [0] },
      { l1: [9, 9, 9, 9, 9, 9, 9], l2: [9, 9, 9, 9] },
    ];

    const answers = [
      [7, 0, 8],
      [0],
      [8, 9, 9, 9, 0, 0, 0, 1],
    ];

    for (let i = 0; i < input.length; i++) {
      const result = fn(input[i].l1, input[i].l2);
      assert.deepStrictEqual(result, answers[i]);
    }

    return true;
  } catch (error: any) {
    console.log("addTwoNumbers handler function error");
    throw Error(error);
  }
};

export const medianOfTwoSortedArrays: Problem = {
  id: "median-of-two-sorted-arrays",
  title: "Median of Two Sorted Arrays",
  slug: "median-of-two-sorted-arrays",
  difficulty: "hard",
  acceptance: "38.3",
  category: "All",
  status: "Todo",
  order: 4,
  problemStatement: `<p class='mt-3'>
    Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
  </p>
  <p class='mt-3'>
    The overall run time complexity should be O(log (m+n)).
  </p>
  <p class='mt-3'>
    Examples:
  </p>
  <ul class='mt-3'>
    <li>Input: nums1 = [1,3], nums2 = [2]</li>
    <li>Output: 2.00000</li>
  </ul>
  <ul class='mt-3'>
    <li>Input: nums1 = [1,2], nums2 = [3,4]</li>
    <li>Output: 2.50000</li>
  </ul>
  <p class='mt-3'>
    Constraints:
  </p>
  <ul class='mt-3'>
    <li>nums1.length == m</li>
    <li>nums2.length == n</li>
    <li>0 <= m <= 1000</li>
    <li>0 <= n <= 1000</li>
    <li>1 <= m + n <= 2000</li>
    <li>-10^6 <= nums1[i], nums2[i] <= 10^6</li>
  </ul>`,
  examples: [
    {
      id: 1,
      inputText: "nums1 = [1,3], nums2 = [2]",
      outputText: "2.00000",
      explanation: "The median of the two sorted arrays is 2.",
    },
    {
      id: 2,
      inputText: "nums1 = [1,2], nums2 = [3,4]",
      outputText: "2.50000",
      explanation: "The median of the two sorted arrays is 2.5.",
    },
  ],
  constraints: `<ul class='mt-2'>
    <li> nums1.length == m </li>
    <li> nums2.length == n </li>
    <li> 0 <= m <= 1000 </li>
    <li> 0 <= n <= 1000 </li>
    <li> 1 <= m + n <= 2000 </li>
    <li> -10^6 <= nums1[i], nums2[i] <= 10^6 </li>
  </ul>`,
  starterCode: starterCode,
  handlerFunction: handlerAddTwoNumbers,
  starterFunctionName: "medianOfTwoSortedArrays",
};
