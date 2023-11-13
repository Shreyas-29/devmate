import { addTwoNumbers } from "@/lib/problems/add-two-numbers";
import { containerWithMostWater } from "@/lib/problems/container-with-most-water";
import { integerToRoman } from "@/lib/problems/integer-to-roman";
import { longestPalindromicSubstring } from "@/lib/problems/longest-palindromic-substring";
import { longestSubstring } from "@/lib/problems/longest-substring-without-repeating-characters";
import { medianOfTwoSortedArrays } from "@/lib/problems/median-of-two-sorted-arrays";
import { palindromeNumber } from "@/lib/problems/palindrome-number";
import { regularExpressionMatching } from "@/lib/problems/regular-expression-matching";
import { reverseInteger } from "@/lib/problems/reverse-integer";
import { stringToInteger } from "@/lib/problems/string-to-integer";
import { twoSum } from "@/lib/problems/two-sum";
import { zigZagConversion } from "@/lib/problems/zigzag-conversion";
import { Problem } from "@/types/problems";

const getRandomStatus = () => {
    const statuses = ["Todo", "Accepted", "Solved"];
    const randomIndex = Math.floor(Math.random() * statuses.length);
    return statuses[randomIndex];
    // @ts-ignore
};

export const getAllProblems: () => Promise<Problem[]> = async () => {
    return [
        {
            id: "1",
            title: "Two Sum",
            category: "Array",
            difficulty: "Easy",
            acceptance: "50.0%",
            status: "Solved",
            slug: "two-sum",
            problemStatement: twoSum.problemStatement,
            examples: twoSum.examples,

        },
        {
            id: "2",
            title: "Add Two Numbers",
            category: "Linked List",
            difficulty: "Medium",
            acceptance: "24.0%",
            status: "Solved",
            slug: "add-two-numbers",
            problemStatement: addTwoNumbers.problemStatement,
            examples: addTwoNumbers.examples,
        },
        {
            id: "3",
            title: "Longest Substring Without Repeating Characters",
            category: "String",
            difficulty: "Hard",
            acceptance: "84.0%",
            status: "Todo",
            slug: "longest-substring-without-repeating-characters",
            problemStatement: longestSubstring.problemStatement,
            examples: longestSubstring.examples,
        },
        {
            id: "4",
            title: "Median of Two Sorted Arrays",
            category: "Array",
            difficulty: "Hard",
            acceptance: "34.0%",
            status: "Todo",
            slug: "median-of-two-sorted-arrays",
            problemStatement: medianOfTwoSortedArrays.problemStatement,
            examples: medianOfTwoSortedArrays.examples,
        },
        {
            id: "5",
            title: "Longest Palindromic Substring",
            category: "String",
            difficulty: "Medium",
            acceptance: "48.4%",
            status: "Attempted",
            slug: "longest-palindromic-substring",
            problemStatement: longestPalindromicSubstring.problemStatement,
            examples: longestPalindromicSubstring.examples,
        },
        {
            id: "6",
            title: "ZigZag Conversion",
            category: "String",
            difficulty: "Medium",
            acceptance: "48.2%",
            status: "Attempted",
            slug: "zigzag-conversion",
            problemStatement: zigZagConversion.problemStatement,
            examples: zigZagConversion.examples,
        },
        {
            id: "7",
            title: "Reverse Integer",
            category: "Math",
            difficulty: "Easy",
            acceptance: "77.8%",
            status: "Attempted",
            slug: "reverse-integer",
            problemStatement: reverseInteger.problemStatement,
            examples: reverseInteger.examples,
        },
        {
            id: "8",
            title: "String to Integer",
            category: "Math",
            difficulty: "Medium",
            acceptance: "51.2%",
            status: "Attempted",
            slug: "string-to-integer",
            problemStatement: stringToInteger.problemStatement,
            examples: stringToInteger.examples
        },
        {
            id: "9",
            title: "Palindrome Number",
            category: "Math",
            difficulty: "Easy",
            acceptance: "68.3%",
            status: "Attempted",
            slug: "palindrome-number",
            problemStatement: palindromeNumber.problemStatement,
            examples: palindromeNumber.examples
        },
        {
            id: "10",
            title: "Regular Expression Matching",
            category: "Dynamic Programming",
            difficulty: "Hard",
            acceptance: "31.6%",
            status: "Attempted",
            slug: "regular-expression-matching",
            problemStatement: regularExpressionMatching.problemStatement,
            examples: regularExpressionMatching.examples
        },
        {
            id: "11",
            title: "Container With Most Water",
            category: "Array",
            difficulty: "Medium",
            acceptance: "64.2%",
            status: "Todo",
            slug: "container-with-most-water",
            problemStatement: containerWithMostWater.problemStatement,
            examples: containerWithMostWater.examples
        },
        {
            id: "12",
            title: "Integer to Roman",
            category: "Math",
            difficulty: "Medium",
            acceptance: "63.5%",
            status: "Todo",
            slug: "integer-to-roman",
            problemStatement: integerToRoman.problemStatement,
            examples: integerToRoman.examples
        }
    ]
};

export const getJsProblems: () => Promise<any[]> = async () => [
    {
        id: "1",
        title: "Reverse a String",
        category: "String",
        difficulty: "Easy",
        acceptance: "60%",
        status: "Solved",
        order: 1,
        slug: "reverse-a-string",
    },
    {
        id: "2",
        title: "Find the Largest Number",
        category: "Array",
        difficulty: "Medium",
        acceptance: "45%",
        status: "Todo",
        order: 2,
        slug: "find-the-largest-number",
    },
    {
        id: "3",
        title: "Calculate Factorial",
        category: "Math",
        difficulty: "Medium",
        acceptance: "55%",
        status: "Solved",
        order: 3,
        slug: "calculate-factorial",
    },
    {
        id: "4",
        title: "Implement a Queue",
        category: "Data Structure",
        difficulty: "Hard",
        acceptance: "40%",
        status: "Solved",
        order: 4,
        slug: "implement-a-queue",
    },
    {
        id: "5",
        title: "Binary Search Algorithm",
        category: "Algorithm",
        difficulty: "Medium",
        acceptance: "70%",
        status: "Attempted",
        order: 5,
        slug: "binary-search-algorithm",
    },
    {
        id: "6",
        title: "Linked List Reversal",
        category: "Linked List",
        difficulty: "Medium",
        acceptance: "55%",
        status: "Todo",
        order: 6,
        slug: "linked-list-reversal",
    },
    {
        id: "7",
        title: "Palindrome Checker",
        category: "String",
        difficulty: "Easy",
        acceptance: "75%",
        status: "Solved",
        order: 7,
        slug: "palindrome-checker",
    },
    {
        id: "8",
        title: "Merge Sort Algorithm",
        category: "Algorithm",
        difficulty: "Medium",
        acceptance: "65%",
        status: "Attempted",
        order: 8,
        slug: "merge-sort-algorithm",
    },
    {
        id: "9",
        title: "Depth-First Search",
        category: "Graph",
        difficulty: "Hard",
        acceptance: "40%",
        status: "Solved",
        order: 9,
        slug: "depth-first-search",
    },
    {
        id: "10",
        title: "Breadth-First Search",
        category: "Graph",
        difficulty: "Medium",
        acceptance: "70%",
        status: "Todo",
        order: 10,
        slug: "breadth-first-search",
    },
    {
        id: "11",
        title: "Matrix Rotation",
        category: "Matrix",
        difficulty: "Hard",
        acceptance: "35%",
        status: "Todo",
        order: 11,
        slug: "matrix-rotation",
    },
    {
        id: "12",
        title: "Implement a Stack",
        category: "Data Structure",
        difficulty: "Easy",
        acceptance: "80%",
        status: "Solved",
        order: 12,
        slug: "implement-a-stack",
    },
];

export const getPythonProblems: () => Promise<any[]> = async () => [
    {
        id: "1",
        title: "Calculate Fibonacci Sequence",
        category: "Math",
        difficulty: "Easy",
        acceptance: "70%",
        status: "Solved",
        order: 1,
        slug: "calculate-fibonacci-sequence",
    },
    {
        id: "2",
        title: "Find Prime Numbers",
        category: "Math",
        difficulty: "Medium",
        acceptance: "45%",
        status: "Todo",
        order: 2,
        slug: "find-prime-numbers",
    },
    {
        id: "3",
        title: "String Reversal",
        category: "String",
        difficulty: "Easy",
        acceptance: "75%",
        status: "Solved",
        order: 3,
        slug: "string-reversal",
    },
    {
        id: "4",
        title: "Dictionary Operations",
        category: "Data Structure",
        difficulty: "Medium",
        acceptance: "60%",
        status: "Solved",
        order: 4,
        slug: "dictionary-operations",
    },
    {
        id: "5",
        title: "File Handling",
        category: "File I/O",
        difficulty: "Easy",
        acceptance: "80%",
        status: "Todo",
        order: 5,
        slug: "file-handling",
    },
    {
        id: "6",
        title: "Recursive Functions",
        category: "Functions",
        difficulty: "Medium",
        acceptance: "65%",
        status: "Attempted",
        order: 6,
        slug: "recursive-functions",
    },
    {
        id: "7",
        title: "Sorting Algorithms",
        category: "Algorithm",
        difficulty: "Medium",
        acceptance: "55%",
        status: "Todo",
        order: 7,
        slug: "sorting-algorithms",
    },
    {
        id: "8",
        title: "Object-Oriented Programming",
        category: "OOP",
        difficulty: "Medium",
        acceptance: "70%",
        status: "Todo",
        order: 8,
        slug: "object-oriented-programming",
    },
    {
        id: "9",
        title: "Regular Expressions",
        category: "String",
        difficulty: "Hard",
        acceptance: "40%",
        status: "Solved",
        order: 9,
        slug: "regular-expressions",
    },
    {
        id: "10",
        title: "Database Queries",
        category: "Database",
        difficulty: "Hard",
        acceptance: "50%",
        status: "Attempted",
        order: 10,
        slug: "database-queries",
    },
    {
        id: "11",
        title: "Graph Algorithms",
        category: "Graph",
        difficulty: "Medium",
        acceptance: "65%",
        status: "Todo",
        order: 11,
        slug: "graph-algorithms",
    },
    {
        id: "12",
        title: "Web Scraping",
        category: "Web",
        difficulty: "Medium",
        acceptance: "55%",
        status: "Todo",
        order: 12,
        slug: "web-scraping",
    },
];

export const getDatabaseProblems: () => Promise<any[]> = async () => [
    {
        id: "1",
        title: "Design a Relational Database",
        category: "Design",
        difficulty: "Hard",
        acceptance: "35%",
        status: "Solved",
        order: 1,
        slug: "design-a-relational-database",
    },
    {
        id: "2",
        title: "SQL Query Optimization",
        category: "SQL",
        difficulty: "Medium",
        acceptance: "50%",
        status: "Todo",
        order: 2,
        slug: "sql-query-optimization",
    },
    {
        id: "3",
        title: "Data Backup Strategy",
        category: "Security",
        difficulty: "Medium",
        acceptance: "60%",
        status: "Solved",
        order: 3,
        slug: "data-backup-strategy",
    },
    {
        id: "4",
        title: "NoSQL Database Design",
        category: "Design",
        difficulty: "Medium",
        acceptance: "45%",
        status: "Solved",
        order: 4,
        slug: "nosql-database-design",
    },
    {
        id: "5",
        title: "Querying with MongoDB",
        category: "MongoDB",
        difficulty: "Easy",
        acceptance: "70%",
        status: "Attempted",
        order: 5,
        slug: "querying-with-mongodb",
    },
    {
        id: "6",
        title: "Relational Schema Normalization",
        category: "Design",
        difficulty: "Hard",
        acceptance: "40%",
        status: "Todo",
        order: 6,
        slug: "relational-schema-normalization",
    },
    {
        id: "7",
        title: "Data Warehouse Design",
        category: "Design",
        difficulty: "Medium",
        acceptance: "55%",
        status: "Solved",
        order: 7,
        slug: "data-warehouse-design",
    },
    {
        id: "8",
        title: "SQL Indexing Strategies",
        category: "SQL",
        difficulty: "Medium",
        acceptance: "65%",
        status: "Attempted",
        order: 8,
        slug: "sql-indexing-strategies",
    },
    {
        id: "9",
        title: "Database Security Best Practices",
        category: "Security",
        difficulty: "Hard",
        acceptance: "30%",
        status: "Solved",
        order: 9,
        slug: "database-security-best-practices",
    },
    {
        id: "10",
        title: "ACID vs. BASE in Database Systems",
        category: "Concepts",
        difficulty: "Easy",
        acceptance: "75%",
        status: "Todo",
        order: 10,
        slug: "acid-vs-base-in-database-systems",
    },
    {
        id: "11",
        title: "Replication in Database Systems",
        category: "Replication",
        difficulty: "Medium",
        acceptance: "70%",
        status: "Todo",
        order: 11,
        slug: "replication-in-database-systems",
    },
    {
        id: "12",
        title: "Database Performance Tuning",
        category: "Performance",
        difficulty: "Hard",
        acceptance: "35%",
        status: "Todo",
        order: 12,
        slug: "database-performance-tuning",
    },
];

export const getAllProblems2 = async () => {
    // try {
    //     const problems = await db.problem.findMany({
    //         where: {
    //             category: "All"
    //         },
    //         orderBy: {
    //             order: "desc"
    //         }
    //     });

    //     return problems;
    // } catch (error) {
    //     console.log("Error getting problems: ", error);
    //     return [];
    // }
};

export const getRandomProblems = async () => {
    // try {
    //     const problems = await db.problem.findMany({
    //         orderBy: {
    //             order: "desc"
    //         }
    //     });

    //     return problems;
    // } catch (error) {
    //     console.log("Error getting problems: ", error);
    //     return [];
    // }
};