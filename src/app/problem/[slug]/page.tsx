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
            <Container user={user} problems={problems} />
        </section>
    )
}