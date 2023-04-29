import {TextLoop} from "react-text-loop-next";
import {QuestionMarkCircleIcon, GiftTopIcon, AcademicCapIcon} from "@heroicons/react/20/solid";
import Link from "next/link";

export default function Header() {
    return (
        <header>
            <div className="px-4 pt-8 pb-32 mx-auto bg-secondary-header flex flex-row flex-nowrap justify-evenly items-center z-0">
                <div className="text-start basis-1/3">
                    <h1 className="text-3xl font-medium text-gray-one font-monst">
                        {'S\'entraîner aux entretiens, +\n' +
                            '    consulter des expert,\n' +
                            '    et prendre  des expériences\n' +
                            '    des gens prospères'}
                    </h1>

                    <TextLoop
                        springConfig={{ stiffness: 180, damping: 16 }}
                        mask={true}
                        className="text-left mt-2"
                        interval={1500}
                    >
                        <div className="flex flex-row text-sub-text-600  items-center">
                            <h4 className="">
                                Notre plateforme vous aide à reussir votre carriere !
                            </h4>
                        </div>
                        <div className="flex flex-row text-sub-text-600  items-center">
                            <h4 className="">Rencontrer des personnes expérimentées</h4>
                        </div>
                        <div className="flex flex-row text-sub-text-600  items-center">
                            <h4 className="">Profiter de leurs expériences</h4>
                        </div>
                    </TextLoop>{" "}

                    <Link
                        href='/register'
                        className="relative inline-flex items-center mt-2 px-4 py-2 text-sm font-medium text-white transition duration-200 bg-purple-one border border-transparent rounded-md shadow-3xl font-monst">
                        <span>Inscrit vous</span>
                    </Link>
                </div>
            </div>
            <div className="flex flex-row justify-evenly items-center text-center">
                <div className="w-1/4 pb-4 h-60 shadow-lg shadow-sub-text rounded-md bg-white text-center flex flex-col justify-between   text-center items-center relative bottom-10 z-40">
                    <div className='bg-card-bg w-full h-1/2 flex flex-row items-center justify-center'>
                        <AcademicCapIcon className="h-16 w-16" />
                    </div>
                    <h4 className="text-purple-one text-lg">
                        Preparation aux Entretiens
                    </h4>
                    <p className="mt-2 text-sm text-gray-one">
                        Preparez-vous aux entretiens Avec
                        des professionnels expérimentés
                    </p>
                    <Link
                        href='/register'
                        className="relative inline-flex items-center mt-2 px-4 py-2 text-sm font-medium text-white transition duration-200 bg-purple-one border border-transparent rounded-md shadow-3xl font-monst">
                        <span>Prendre RDV</span>
                    </Link>
                </div>
                <div className="w-1/4 pb-4 h-60 shadow-lg shadow-sub-text rounded-md bg-white text-center flex flex-col justify-between   text-center items-center relative bottom-10 z-40">
                    <div className='bg-card-bg w-full h-1/2 flex flex-row items-center justify-center'>
                        <QuestionMarkCircleIcon className="h-16 w-16" />
                    </div>
                    <h4 className="text-purple-one text-lg">
                        Consultation en ligne
                    </h4>
                    <p className="mt-2 text-sm text-gray-one">
                        Entrepreneuriat, obtenir un job,
                        <br/>
                        {'procedure d\'etude a l\'etranger'}
                    </p>
                    <Link
                        href='/register'
                        className="relative inline-flex items-center mt-2 px-4 py-2 text-sm font-medium text-white transition duration-200 bg-purple-one border border-transparent rounded-md shadow-3xl font-monst">
                        <span>Prendre RDV</span>
                    </Link>
                </div>
                <div className="w-1/4 pb-4 h-60 shadow-lg shadow-sub-text rounded-md bg-white text-center flex flex-col justify-between   text-center items-center relative bottom-10 z-40">
                    <div className='bg-card-bg w-full h-1/2 flex flex-row items-center justify-center'>
                        <GiftTopIcon className="h-16 w-16" />
                    </div>
                    <h4 className="text-purple-one text-lg">
                        Prendre l’experience
                    </h4>
                    <p className="mt-2 text-sm text-gray-one">
                        {'Bénéficiez des conseils, des informations et\n' +
                            'des expériences d\'entrepreneurs, d\'étudiants ...'}
                    </p>
                    <Link
                        href='/register'
                        className="relative inline-flex items-center mt-2 px-4 py-2 text-sm font-medium text-white transition duration-200 bg-purple-one border border-transparent rounded-md shadow-3xl font-monst">
                        <span>Prendre RDV</span>
                    </Link>
                </div>
            </div>
            <div className="flex flex-row justify-evenly items-center text-center">
                <h3 className="">

                </h3>
            </div>
        </header>
    );
}