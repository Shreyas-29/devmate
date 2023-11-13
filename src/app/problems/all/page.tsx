import { getAllProblems } from '@/actions';
import { DataTable, ProblemLoader } from '@/components';

export default async function Problems() {

    const data = await getAllProblems();

    return (
        <div className="flex flex-col items-start w-full h-full pb-4">
            <DataTable data={data} />
        </div>
    )
};
