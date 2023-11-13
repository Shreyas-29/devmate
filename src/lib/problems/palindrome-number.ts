import { Problem } from "@/types/problems";
import assert from "assert";

const starterCode = `function palindromeNumber(l1, l2) {
    // Write your code here
};`;

// checks if the user has the correct code
const handlerIsPalindrome = (fn: any) => {
    try {
        // Define your test cases
        const input = [121, -121, 10, 12321];

        const answers = [true, false, false, true];

        for (let i = 0; i < input.length; i++) {
            const result = fn(input[i]);
            assert.deepStrictEqual(result, answers[i]);
        }

        return true;
    } catch (error: any) {
        console.log("handlerIsPalindrome function error");
        throw Error(error);
    }
};

export const palindromeNumber: Problem = {
    id: "is-palindrome",
    title: "Palindrome Number",
    slug: "is-palindrome",
    difficulty: "easy",
    acceptance: "39.1",
    category: "All",
    status: "Todo",
    order: 2,
    problemStatement: `<p class='mt-3'>
      Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.
    </p>`,
    examples: [
        {
            id: 1,
            inputText: "121",
            outputText: "true",
            explanation: "121 reads the same backward as forward, so it is a palindrome.",
        },
        {
            id: 2,
            inputText: "-121",
            outputText: "false",
            explanation: "-121 does not read the same backward as forward, so it is not a palindrome.",
        },
        {
            id: 3,
            inputText: "10",
            outputText: "false",
            explanation: "10 does not read the same backward as forward, so it is not a palindrome.",
        },
    ],
    constraints: `<ul class='mt-2'>
      <li>-231 <= x <= 231 - 1</li>
    </ul>`,
    starterCode: starterCode,
    handlerFunction: handlerIsPalindrome,
    starterFunctionName: "isPalindrome",
};
