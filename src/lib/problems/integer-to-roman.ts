import { Problem } from "@/types/problems";

const starterCode = `function integerToRoman(l1, l2) {
    // Write your code here
};`;

const handlerIntegerToRoman = (fn: any): boolean => {
    try {
        const testCases = [
            { input: 3, output: "III" },
            { input: 58, output: "LVIII" },
            { input: 1994, output: "MCMXCIV" },
        ];

        for (const testCase of testCases) {
            const result = fn(testCase.input);
            if (result !== testCase.output) {
                return false;
            }
        }

        return true;
    } catch (error) {
        console.log("handlerIntegerToRoman function error");
        throw error;
    }
};


export const integerToRoman: Problem = {
    id: "integer-to-roman",
    title: "Integer to Roman",
    slug: "integer-to-roman",
    difficulty: "medium",
    acceptance: "47.1",
    category: "All",
    status: "Todo",
    order: 2,
    problemStatement: `<p class='mt-3'>
      Given an integer, convert it to a roman numeral.
    </p>`,
    examples: [
        {
            id: 1,
            inputText: "3",
            outputText: "III",
            explanation: "3 is represented as 3 ones.",
        },
        {
            id: 2,
            inputText: "58",
            outputText: "LVIII",
            explanation: "L = 50, V = 5, III = 3.",
        },
        {
            id: 3,
            inputText: "1994",
            outputText: "MCMXCIV",
            explanation: "M = 1000, CM = 900, XC = 90 and IV = 4.",
        },
    ],
    constraints: `<ul class='mt-2'>
      <li>0 <= num <= 3999</li>
    </ul>`,
    starterCode: starterCode,
    handlerFunction: handlerIntegerToRoman,
    starterFunctionName: "integerToRoman",
};
