import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { redirect } from 'next/navigation';
import React from 'react';

export default function Problems() {

    const { getUser } = getKindeServerSession();

    const user = getUser();

    if (user) {
        redirect("/problems/all");
    }

    return (
        <section className="w-full h-screen z-[100] bg-white overflow-hidden flex items-center justify-center flex-col">
            <div className="flex items-center justify-center h-full flex-col space-y-2">
                <div className="w-8 h-8 border-[3.5px] border-border rounded-full animate-spin border-t-primary"></div>
                <p className="text-muted-foreground">
                    Getting ready...
                </p>
            </div>
        </section>
    )
}
