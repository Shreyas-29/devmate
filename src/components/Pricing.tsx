import { plans } from '@/constants'
import { Check, CheckCircle } from 'lucide-react'
import React from 'react'
import { Button } from './ui/Button'

const Pricing = () => {
    return (
        <section className="relative flex flex-col items-center justify-center w-full px-4 py-20 mx-auto md:py-24 lg:pb-24 lg:pt-0 md:px-8">
            <div className="flex flex-col items-center justify-center space-y-6 md:space-y-8">
                <h2 className="text-2xl font-bold text-center capitalize md:text-4xl text-primary">
                    Tailored Pricing, Just for You
                </h2>
                <p className="text-base text-center text-muted-foreground md:text-lg">
                    Experience the power of premium features without breaking the bank
                </p>
            </div>
            <div className="grid w-full h-full max-w-4xl grid-cols-1 gap-8 py-8 mx-auto lg:gap-0 md:grid-cols-2 md:py-16">
                {plans.map((plan, index) => (
                    <div
                        key={index}
                        className="relative w-full h-full max-w-sm p-6 mx-auto text-center border shadow-2xl bg-secondary rounded-2xl border-zinc-800 hover:border-zinc-700 shadow-zinc-400/20"
                    >
                        {plan.title === "Pro" ? (
                            <span className="absolute right-auto flex items-start px-3 py-1.5 text-xs font-medium bg-primary rounded-full -top-3 left-5 text-muted">
                                Most Popular
                            </span>
                        ) : null}
                        <div className="flex flex-col items-start p-5 border-b border-slate-200">
                            <h4 className="text-lg font-semibold text-primary">
                                {plan.title}
                            </h4>
                            <p className="mt-2 text-muted-foreground">
                                {plan.tagline}
                            </p>
                            <div className="flex items-baseline gap-2 mt-4">
                                <span className="text-4xl font-extrabold md:text-5xl text-primary">
                                    {plan.price}
                                </span>
                                <span className="font-medium text-accent-foreground">
                                    /month
                                </span>
                            </div>
                            <Button className="w-full mt-6 mb-1">
                                Get Started
                            </Button>
                        </div>
                        <div className="flex flex-col items-start px-5 pt-5 pb-8">
                            <span className="w-full text-sm font-medium uppercase text-slate-200 text-start">
                                What&apos;s included
                            </span>
                            <ul className="mt-3">
                                {plan.features?.map((feature, index) => (
                                    <li key={index} className="flex items-center gap-3 py-1">
                                        <Check className="w-4 h-4 text-emerald-400" />
                                        <span className="text-slate-300">
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Pricing
