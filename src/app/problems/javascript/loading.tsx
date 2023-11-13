import { getAllProblems } from '@/actions';
import { ProblemLoader } from '@/components';

const Loading = async () => {

    const data = await getAllProblems();

    return (
        <ProblemLoader data={data} />
    )
}

export default Loading
