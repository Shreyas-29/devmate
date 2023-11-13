import { twoSum } from "./two-sum";
import { addTwoNumbers } from "./add-two-numbers";
import { longestSubstring } from "./longest-substring-without-repeating-characters";
import { medianOfTwoSortedArrays } from "./median-of-two-sorted-arrays";
import { longestPalindromicSubstring } from "./longest-palindromic-substring";
import { zigZagConversion } from "./zigzag-conversion";
import { reverseInteger } from "./reverse-integer";
import { stringToInteger } from "./string-to-integer";
import { regularExpressionMatching } from "./regular-expression-matching";
import { containerWithMostWater } from "./container-with-most-water";
import { Problem } from "@/types/problems";
import { palindromeNumber } from "./palindrome-number";
import { integerToRoman } from "./integer-to-roman";

interface ProblemMap {
    [key: string]: Problem;
}

export const problems: ProblemMap = {
    "two-sum": twoSum,
    "add-two-numbers": addTwoNumbers,
    "longest-substring-without-repeating-characters": longestSubstring,
    "median-of-two-sorted-arrays": medianOfTwoSortedArrays,
    "longest-palindromic-substring": longestPalindromicSubstring,
    "zigzag-conversion": zigZagConversion,
    "reverse-integer": reverseInteger,
    "string-to-integer": stringToInteger,
    "regular-expression-matching": regularExpressionMatching,
    "container-with-most-water": containerWithMostWater,
    "palindrome-number": palindromeNumber,
    "integer-to-roman": integerToRoman
};