import { getProblem, getAllProblems, getRandomProblems } from '@/actions';
import { Container, Toolbar, Workspace } from '@/components';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import React from 'react';


interface ProblemProps {
    params: {
        slug: string
    }
}

export async function generateMetadata({ params }: ProblemProps) {
    const slug = params?.slug;

    const title = slug?.split("-").join(" ").charAt(0).toUpperCase() + slug?.split("-").join(" ").slice(1);

    return {
        title: `${title} - DevMate`,
    }
};

export default async function ProblemPage({ params }: ProblemProps) {

    const { getUser } = getKindeServerSession();

    const user = getUser();

    const problems = await getAllProblems();

    return (
        <section className="flex flex-col items-center w-full h-screen">
            <div className="flex-col hidden w-full h-full lg:flex">
                <Container user={user} problems={problems} />
            </div>
            <div className="flex flex-col w-full h-full lg:hidden">
                <p className="flex items-center justify-center w-full mx-auto text-center text-primary">
                    DevMate is not available on mobile devices yet.
                </p>
            </div>
        </section>
    )
}