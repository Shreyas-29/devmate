import { Problem } from "@/types/problems";
import assert from "assert";

const starterCode = `function addTwoNumbers(l1, l2) {
    // Write your code here
};`;

// checks if the user has the correct code
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

export const addTwoNumbers: Problem = {
    id: "add-two-numbers",
    title: "Add Two Numbers",
    slug: "add-two-numbers",
    difficulty: "medium",
    acceptance: "28.5",
    category: "All",
    status: "Todo",
    order: 2,
    problemStatement: `<p class='mt-3'>
        You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit.
    </p>
    <p class='mt-3'>
        Add the two numbers and return it as a linked list.
    </p>
    <p class='mt-3'>
        You may assume the two numbers do not contain any leading zero, except the number 0 itself.
    </p>`,
    examples: [
        {
            id: 1,
            inputText: "l1 = [2, 4, 3], l2 = [5, 6, 4]",
            outputText: "[7, 0, 8]",
            explanation: "342 + 465 = 807, which is represented as [7, 0, 8] in reverse order.",
        },
        {
            id: 2,
            inputText: "l1 = [0], l2 = [0]",
            outputText: "[0]",
            explanation: "0 + 0 = 0.",
        },
        {
            id: 3,
            inputText: "l1 = [9, 9, 9, 9, 9, 9, 9], l2 = [9, 9, 9, 9]",
            outputText: "[8, 9, 9, 9, 0, 0, 0, 1]",
            explanation: "9999999 + 9999 = 10000000, which is represented as [8, 9, 9, 9, 0, 0, 0, 1] in reverse order.",
        },
    ],
    constraints: `<li class='mt-2'>
    The number of nodes in each linked list is in the range <code>[1, 100]</code>.
</li>
<li class='mt-2'>
    <code>0 <= Node.val <= 9</code>
</li>
<li class='mt-2'>
    It is guaranteed that the list represents a number that does not have leading zeros, except for the zero itself.
</li>`,
    starterCode: starterCode,
    handlerFunction: handlerAddTwoNumbers,
    starterFunctionName: "addTwoNumbers",
};