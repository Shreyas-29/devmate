import { features } from '@/constants'
import Image from 'next/image'
import React from 'react'

const Features = () => {
    return (
        <section className="relative flex flex-col items-center justify-center w-full min-h-full px-4 py-20 mx-auto md:py-24 lg:pb-24 lg:pt-24 md:px-8">
            <div className="flex flex-col items-center justify-center space-y-6 md:space-y-8">
                <h2 className="text-2xl font-bold text-center capitalize md:text-4xl text-primary">
                    Explore our cutting-edge features
                </h2>
                <p className="text-base text-center text-muted-foreground md:text-lg">
                    Discover the power of AI-driven coding challenges, personalized learning paths, and community engagement
                </p>
            </div>
            <div className="grid w-full grid-cols-1 py-8 mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:py-16 xl:px-32">
                {features?.map((feature) => (
                    <div key={feature.id} className="flex flex-col items-start p-4 lg:p-6 custom-border">
                        <Image
                            src={feature.src}
                            alt={feature.title}
                            width={100}
                            height={100}
                            className="object-cover w-8 h-8"
                        />
                        <h4 className="mt-5 mb-3 text-lg font-semibold text-card-foreground text-start">
                            {feature.title}
                        </h4>
                        <p className="text-sm font-medium text-zinc-500">
                            {feature.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Features
