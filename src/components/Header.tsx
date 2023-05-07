import {TextLoop} from "react-text-loop-next";
import {QuestionMarkCircleIcon, GiftTopIcon, AcademicCapIcon} from "@heroicons/react/20/solid";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faGraduationCap, faFlaskVial, faClipboardCheck
} from '@fortawesome/free-solid-svg-icons';
import Link from "next/link";
import Image from "next/image";
import SignUpImage from '../../public/signup.svg';
import Arrow1 from '../../public/arrow-1.svg';
import Arrow2 from '../../public/arrow-2.svg';

export default function Header() {
    return (
        <header>
            <div className="pt-24 pb-48 mx-auto bg-secondary-header flex flex-row flex-nowrap justify-evenly items-center z-0">
                <div className="text-start basis-1/3">
                    <h1 className="text-3xl font-medium text-gray-one font-monst">
                        {'S\'entraîner aux entretiens, \n' +
                            '    consulter des expert,\n' +
                            '    et prendre  des expériences\n' +
                            '    des gens prospères'}
                    </h1>
                    <br/>

                    <TextLoop
                        springConfig={{ stiffness: 180, damping: 16 }}
                        mask={true}
                        className="text-left mt-2"
                        interval={2500}
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
                    <br/>
                    <Link
                        href='/signup'
                        className='inline-block rounded-2xl w-auto border bg-purple-one shadow-[inset_0_-5px_0_0_rgb(0_0_0_/_8%),0_4px_4px_0_rgb(0_0_0_/_4%)] text-white py-2 px-4 mt-4 border-solid border-[background: rgba(76, 76, 240, 0.8)]'>
                        <span>Inscrit vous</span>
                    </Link>
                </div>
            </div>
            <div className="flex flex-row justify-evenly items-center text-center">
                <div className="w-1/4 pb-4 h-60 shadow-lg shadow-sub-text rounded-md bg-white text-center flex flex-col justify-between   text-center items-center relative bottom-16 z-40">
                    <div className='bg-card-bg w-full h-1/2 flex flex-row items-center justify-center'>
                        <FontAwesomeIcon icon={faGraduationCap} className="h-16 w-16" />
                    </div>
                    <h4 className="text-purple-one text-lg">
                        Preparation aux Entretiens
                    </h4>
                    <p className="mt-2 text-sm text-gray-one">
                        Preparez-vous aux entretiens Avec
                        des professionnels expérimentés
                    </p>
                    <Link
                        href='/'
                        className='inline-block rounded-2xl w-auto border bg-purple-one shadow-[inset_0_-5px_0_0_rgb(0_0_0_/_8%),0_4px_4px_0_rgb(0_0_0_/_4%)] text-white py-2 px-4 mt-4 border-solid border-[background: rgba(76, 76, 240, 0.8)]'>
                        <span>Prendre RDV</span>
                    </Link>
                </div>
                <div className="w-1/4 pb-4 h-60 shadow-lg shadow-sub-text rounded-md bg-white text-center flex flex-col justify-between   text-center items-center relative bottom-16 z-40">
                    <div className='bg-card-bg w-full h-1/2 flex flex-row items-center justify-center'>
                        <FontAwesomeIcon icon={faClipboardCheck} className="h-16 w-16" />
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
                        href='/'
                        className='inline-block rounded-2xl w-auto border bg-purple-one shadow-[inset_0_-5px_0_0_rgb(0_0_0_/_8%),0_4px_4px_0_rgb(0_0_0_/_4%)] text-white py-2 px-4 mt-4 border-solid border-[background: rgba(76, 76, 240, 0.8)]'>
                        <span>Prendre RDV</span>
                    </Link>
                </div>
                <div className="w-1/4 pb-4 h-60 shadow-lg shadow-sub-text rounded-md bg-white text-center flex flex-col justify-between   text-center items-center relative bottom-16 z-40">
                    <div className='bg-card-bg w-full h-1/2 flex flex-row items-center justify-center'>
                        <FontAwesomeIcon icon={faFlaskVial} className="h-16 w-16" />
                    </div>
                    <h4 className="text-purple-one text-lg">
                        Prendre l’experience
                    </h4>
                    <p className="mt-2 text-sm text-gray-one">
                        {'Bénéficiez des conseils, des informations et\n' +
                            'des expériences d\'entrepreneurs, d\'étudiants ...'}
                    </p>
                    <Link
                        href='/'
                        className='inline-block rounded-2xl w-auto border bg-purple-one shadow-[inset_0_-5px_0_0_rgb(0_0_0_/_8%),0_4px_4px_0_rgb(0_0_0_/_4%)] text-white py-2 px-4 mt-4 border-solid border-[background: rgba(76, 76, 240, 0.8)]'>
                        <span>Prendre RDV</span>
                    </Link>
                </div>
            </div>
            <div className="flex flex-col justify-evenly items-center text-center">
                <h3 className="text-4xl font-medium my-16">
                    Comment Ca marche!
                </h3>
                <div className="flex flex-row justify-evenly items-center text-center w-full px-24">
                    <div className="flex flex-col justify-evenly items-center text-center">
                        <Image
                            alt="signup image"
                            src={SignUpImage}
                            width={240}
                            height={240}
                            style={{
                                maxWidth: '100%',
                                height: 'auto',
                            }}
                        />
                    </div>
                    <div className="flex flex-col justify-evenly items-center text-center">
                    <h5 className="text-xl mb-4 font-medium">
                        CRÉER UN COMPTE
                    </h5>
                    <p className="text-md font-medium text-start">
                        Inscrivez-vous avec votre email, Vérifiez-le et vous êtes prêt à vous
                        <br/>
                        lancer dans un voyage qui changera votre vie. Connectez-vous pour
                        <br/>
                        commencer à parcourir nos ressources GRATUITES triées sur le volet.
                    </p>
                    </div>
                </div>
                <div className="relative z-30 bottom-10">
                    <Image
                        alt="arrow image"
                        src={Arrow1}
                        width={280}
                        height={180}
                        style={{
                            maxWidth: '100%',
                            height: 'auto',
                        }}
                    />
                </div>
                <div className="flex flex-row justify-evenly items-center text-center w-full px-24  relative z-20 bottom-20">
                    <div className="flex flex-col justify-evenly items-center text-center">
                        <h5 className="text-xl mb-4 font-medium">
                            CRÉER UN COMPTE
                        </h5>
                        <p className="text-md font-medium text-start">
                            Inscrivez-vous avec votre email, Vérifiez-le et vous êtes prêt à vous
                            <br/>
                            lancer dans un voyage qui changera votre vie. Connectez-vous pour
                            <br/>
                            commencer à parcourir nos ressources GRATUITES triées sur le volet.
                        </p>
                    </div>
                    <div className="flex flex-col justify-evenly items-center text-center">
                        <Image
                            alt="signup image"
                            src={SignUpImage}
                            width={240}
                            height={240}
                            style={{
                                maxWidth: '100%',
                                height: 'auto',
                            }}
                        />
                    </div>

                </div>
                <div className="relative z-20 bottom-20">
                    <Image
                        alt="arrow image"
                        src={Arrow2}
                        width={280}
                        height={180}
                        style={{
                            maxWidth: '100%',
                            height: 'auto',
                        }}
                    />
                </div>
                <div className="flex flex-row justify-evenly items-center text-center w-full px-24 relative z-20 bottom-40">
                    <div className="flex flex-col justify-evenly items-center text-center">
                        <Image
                            alt="signup image"
                            src={SignUpImage}
                            width={240}
                            height={240}
                            style={{
                                maxWidth: '100%',
                                height: 'auto',
                            }}
                        />
                    </div>
                    <div className="flex flex-col justify-evenly items-center text-center">
                        <h5 className="text-xl mb-4 font-medium">
                            CRÉER UN COMPTE
                        </h5>
                        <p className="text-md font-medium text-start">
                            Inscrivez-vous avec votre email, Vérifiez-le et vous êtes prêt à vous
                            <br/>
                            lancer dans un voyage qui changera votre vie. Connectez-vous pour
                            <br/>
                            commencer à parcourir nos ressources GRATUITES triées sur le volet.
                        </p>
                    </div>
                </div>
            </div>
        </header>
    );
}