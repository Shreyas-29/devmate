export interface Problem {
    id: string;
    title: string;
    slug: string;
    category: string | null;
    difficulty: string;
    acceptance: string;
    status: "Todo" | "Solved" | "Attempted" | null;
    order?: number | null;
    problemStatement?: string;
    examples?: Examples[];
    constraints?: string;
    starterCode?: string;
    handlerFunction?: ((fn: any) => boolean) | string;
    starterFunctionName?: string;
}

interface Examples {
    id: number;
    inputText: string;
    outputText: string;
    explanation: string;
}
// export interface Problems {
//     id: string;
//     title: string;
//     category: string;
//     difficulty: string;
//     acceptance: string;
//     status?: "Todo" | "Solved" | "Attempted";
//     order?: number;
// }