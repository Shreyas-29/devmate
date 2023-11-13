import { problems } from "@/lib/problems";

const getProblem = (slug: string) => {
    try {

        const problem = problems[slug];

        return problem;

    } catch (error) {
        console.log("Error in getting problem: ", error);
    }
};

export default getProblem;