import { Filterbar, Header, Progress, Topics } from '@/components';
import { Button } from '@/components/ui/Button';
import { popularCourses, studyPlans } from '@/constants';
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: 'Problems | DevMate',
    description: 'DevMate is an AI-powered platform for developers to learn and grow their skills.',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <Header />
            <main className="container w-full min-h-screen px-2 lg:px-4 max-w-8xl">
                <section className="w-full h-full p-2 pt-8 overflow-hidden">
                    <div className="relative flex-row w-full mx-auto">
                        <div className="relative grid w-full grid-cols-1 gap-8 mx-auto lg:grid-cols-12 max-w-7xl">
                            <div className="w-full md:col-span-8 lg:col-span-8 xl:col-span-9 col-span-full">
                                {/* Plans */}
                                <div className="hidden w-full grid-cols-1 gap-8 lg:grid-cols-3">
                                    {studyPlans?.map((plan) => (
                                        <div key={plan.id} className="flex flex-col items-start w-full min-w-full p-5 transition-all border cursor-pointer rounded-xl hover:bg-primary-foreground border-border">
                                            <h4 className="text-lg font-semibold text-primary">
                                                {plan.title}
                                            </h4>
                                            <p className="mt-1 text-sm text-zinc-600">
                                                {plan.description}
                                            </p>
                                            <Button variant="default" size="sm" className="mt-3">
                                                {plan.button}
                                            </Button>
                                        </div>
                                    ))}
                                </div>

                                {/* Most popular */}
                                <div className="space-y-4">
                                    <h3 className="text-xl font-semibold text-start">
                                        Most Popular
                                    </h3>
                                    <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-3">
                                        {popularCourses?.map((course) => (
                                            <div key={course.id} className="flex items-center w-full h-24 gap-4 p-2 transition-all transform border cursor-pointer border-border rounded-xl hover:bg-primary-foreground active:scale-95">
                                                <div className="grid w-20 h-20 text-xl font-bold text-center uppercase place-items-center bg-zinc-600 text-zinc-300 rounded-xl">
                                                    {course.title.split(' ').map(word => word[0]).join('')}
                                                </div>
                                                <div className="flex flex-col flex-wrap justify-center">
                                                    <h4 className="text-sm font-semibold text-primary">
                                                        {course.title}
                                                    </h4>
                                                    <p className="flex-wrap mt-1 text-xs text-muted-foreground">
                                                        {course.description}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="w-full h-px my-8 bg-border"></div>

                                {/* Topics */}
                                <div className="relative flex flex-col items-center w-full overflow-auto overflow-x-scroll scrollbar-hide">
                                    <Topics />
                                </div>
                                <div className="flex flex-col items-start w-full py-2">
                                    <Filterbar />
                                    {children}
                                </div>
                            </div>
                            <div className="sticky top-0 right-0 items-start hidden w-full ml-auto md:flex md:col-span-4 lg:col-span-4 xl:col-span-3 rounded-xl">
                                <Progress />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}