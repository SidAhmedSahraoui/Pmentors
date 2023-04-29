import {TextLoop} from "react-text-loop-next";

import {
    CheckCircleIcon,
    NewspaperIcon,
    MinusCircleIcon,
    ChartPieIcon,
} from '@heroicons/react/24/solid';

export default function Header() {
    return (
        <header>
            <section className="px-4 py-16 mx-auto sm:py-16 lg:py-28 sm:px-6 lg:px-8 bg-secondary-header">
                <article className="text-center">
                    <p className="mt-1 text-4xl font-extrabold text-gray-one font-monst sm:text-5xl sm:tracking-tight lg:text-6xl">
                        Make{" "}
                        <TextLoop
                            springConfig={{ stiffness: 180, damping: 16 }}
                            mask={true}
                            className="text-left -mt-2 md:-mt-0"
                            interval={3000}
                        >
                            <p className="flex flex-row text-orange-400 items-center">
                                <NewspaperIcon className="w-14 h-14 mr-2" aria-hidden="true" />
                                <span className="">Charts</span>
                            </p>
                            <p className="flex flex-row text-pink-400 items-center">
                                <span className="">Boards</span>
                            </p>
                            <p className="flex flex-row text-indigo-400 items-center">
                                <ChartPieIcon className="w-14 h-14 mr-2" aria-hidden="true" />
                                <span className="">Graphs</span>
                            </p>
                        </TextLoop>{" "}
                        on the go
                    </p>
                </article>
            </section>
        </header>
    );
}