import { Problem } from "@/types/problems";
import assert from "assert";

const starterCode = `function containerWithMostWater(nums,target){
    // Write your code here
};`;


const handlerContainerWithMostWater = (fn: any) => {
  try {
    const input = [[1, 8, 6, 2, 5, 4, 8, 3, 7], [1, 1]];

    const answers = [49, 1];

    for (let i = 0; i < input.length; i++) {
      const result = fn(input[i]);
      assert.deepStrictEqual(result, answers[i]);
    }

    return true;
  } catch (error: any) {
    console.log("handlerContainerWithMostWater function error");
    throw Error(error);
  }
};

export const containerWithMostWater: Problem = {
  id: "container-with-most-water",
  title: "Container With Most Water",
  slug: "container-with-most-water",
  difficulty: "medium",
  acceptance: "47.1",
  category: "All",
  status: "Todo",
  order: 4,
  problemStatement: `<p class='mt-3'>
    Given n non-negative integers a1, a2, ..., an, where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, 0) and (i, ai). Find two lines, which together with the x-axis form a container, such that the container contains the most water.
  </p>
  <p class='mt-3'>
    Notice that you may not slant the container.
  </p>`,
  examples: [
    {
      id: 1,
      inputText: `"[1,8,6,2,5,4,8,3,7]"`,
      outputText: "49",
      explanation: "The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.",
    },
  ],
  constraints: `<ul class='mt-2'>
    <li>n == height.length.</li>
    <li>2 <= n <= 10^5.</li>
    <li>0 <= height[i] <= 10^4.</li>
  </ul>`,
  starterCode: starterCode,
  handlerFunction: handlerContainerWithMostWater,
  starterFunctionName: "containerWithMostWater",
};
