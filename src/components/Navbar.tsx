import Link from "next/link";
import {ArrowRightOnRectangleIcon, ChevronDownIcon, AcademicCapIcon, QuestionMarkCircleIcon, GiftTopIcon} from "@heroicons/react/20/solid";
import {Popover, Transition} from '@headlessui/react';
import {Fragment} from 'react';

const services = [
    {
        name: 'Preparation aux entretiens',
        description: 'Preparez-vous aux entretiens Avec\n' +
            'des professionnels expérimentés',
        href: '/interview',
        icon: AcademicCapIcon,
    },
    {
        name: 'Consultation en ligne',
        description: 'Entrepreneuriat, obtenir un job, \n' +
            'procedure d\'etude a l\'etranger',
        href: '/consultation',
        icon: QuestionMarkCircleIcon,
    },
    {
        name: 'Prendre l’experience',
        description: 'Bénéficiez des conseils, des informations et \n' +
            'des expériences d\'entrepreneurs, d\'étudiants ... ',
        href: '/sharing',
        icon: GiftTopIcon,
    },
]

const about = [
    {
        name: 'A propos',
        description: 'A propos de cette platforme',
        href: '/about',
        icon: AcademicCapIcon,
    },
    {
        name: 'Team',
        description: 'Notre staff administratif et technique',
        href: '/team',
        icon: QuestionMarkCircleIcon,
    },
    {
        name: 'Contact',
        description: 'Contactez nous',
        href: '/contact',
        icon: GiftTopIcon,
    },
]

export default function Navbar() {


    return (
        <>
            <div className="px-4 mx-auto sm:px-6 lg:px-8 h-20 w-screen">
                <div className="flex justify-between h-full">
                    <Link className="flex items-center w-2/5" href='/'>
                        <img src='public/logo.svg' alt='Pmetors logo'/>
                    </Link>

                    <div className="flex items-center w-2/5">
                        <div className="flex justify-between items-center w-full">

                            <Popover className="relative">
                                {({open}) => (
                                    <>
                                        <Popover.Button
                                            className={`${open ? '' : 'text-opacity-90'}group inline-flex items-center border-0 outline-0  px-3 py-2 text-base font-medium text-gray-one`}
                                        >
                                            <span>Services</span>
                                            <ChevronDownIcon
                                                className={`${open ? '' : 'text-opacity-70'}
                                                 ml-2 h-5 w-5 font-bold text-gray-one transition duration-150 ease-in-out group-hover:text-opacity-80`}
                                                aria-hidden="true"
                                            />
                                        </Popover.Button>
                                        <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-200"
                                            enterFrom="opacity-0 translate-y-1"
                                            enterTo="opacity-100 translate-y-0"
                                            leave="transition ease-in duration-150"
                                            leaveFrom="opacity-100 translate-y-0"
                                            leaveTo="opacity-0 translate-y-1"
                                        >
                                            <Popover.Panel
                                                className="absolute w-96 h-80 left-1/2 z-10 mt-3 -translate-x-1/2 transform px-4 sm:px-0">
                                                <div
                                                    className="overflow-hidden h-full rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                                    <div className="relative h-full flex-col justify-evenly items-center content-center bg-modal-color p-7 backdrop-blur-lg">
                                                        {services.map((item) => (
                                                            <Link
                                                                key={item.name}
                                                                href={item.href}
                                                                className="flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-modal-color focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                                                            >
                                                                <div
                                                                    className="flex h-10 w-10 shrink-0 items-center justify-center text-white bg-purple-one bg-gradient-to-r from-purple-two to-blue-one rounded-md sm:h-12 sm:w-12">
                                                                    <item.icon width='32px' height='32px' color='white' aria-hidden="true"/>
                                                                </div>
                                                                <div className="ml-4">
                                                                    <p className="text-sm font-medium text-white">
                                                                        {item.name}
                                                                    </p>
                                                                    <p className="text-sm text-sub-text">
                                                                        {item.description}
                                                                    </p>
                                                                </div>
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </div>
                                            </Popover.Panel>
                                        </Transition>
                                    </>
                                )}
                            </Popover>
                            <Popover className="relative">
                                {({open}) => (
                                    <>
                                        <Popover.Button
                                            className={`${open ? '' : 'text-opacity-90'}group inline-flex items-center border-0 outline-0  px-3 py-2 text-base font-medium text-gray-one`}
                                        >
                                            <span>A propos</span>
                                            <ChevronDownIcon
                                                className={`${open ? '' : 'text-opacity-70'}
                                                 ml-2 h-5 w-5 font-bold text-gray-one transition duration-150 ease-in-out group-hover:text-opacity-80`}
                                                aria-hidden="true"
                                            />
                                        </Popover.Button>
                                        <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-200"
                                            enterFrom="opacity-0 translate-y-1"
                                            enterTo="opacity-100 translate-y-0"
                                            leave="transition ease-in duration-150"
                                            leaveFrom="opacity-100 translate-y-0"
                                            leaveTo="opacity-0 translate-y-1"
                                        >
                                            <Popover.Panel
                                                className="absolute w-96 h-60 left-1/2 z-10 mt-3 -translate-x-1/2 transform px-4 sm:px-0">
                                                <div
                                                    className="overflow-hidden h-full rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                                    <div className="relative h-full flex-col justify-evenly items-center content-center bg-modal-color p-7 backdrop-blur-lg">
                                                        {about.map((item) => (
                                                            <Link
                                                                key={item.name}
                                                                href={item.href}
                                                                className="flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-modal-color focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                                                            >
                                                                <div
                                                                    className="flex h-10 w-10 shrink-0 items-center justify-center text-white bg-purple-one bg-gradient-to-r from-purple-two to-blue-one rounded-md sm:h-12 sm:w-12">
                                                                    <item.icon width='24px' height='24px' color='white' aria-hidden="true"/>
                                                                </div>
                                                                <div className="ml-4">
                                                                    <p className="text-sm font-medium text-white">
                                                                        {item.name}
                                                                    </p>
                                                                    <p className="text-sm text-sub-text">
                                                                        {item.description}
                                                                    </p>
                                                                </div>
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </div>
                                            </Popover.Panel>
                                        </Transition>
                                    </>
                                )}
                            </Popover>
                            <Link
                                href='/help'
                                className= 'text-opacity-90 group inline-flex items-center border-0 outline-0  px-3 py-2 text-base font-medium text-gray-one'
                            >
                                <span>Centre d’aide</span>
                            </Link>
                            <Link
                                href=''
                                className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-white transition duration-200 bg-purple-one border border-transparent rounded-md shadow-3xl font-monst hover:">
                                <span>Sign in</span>
                                <ArrowRightOnRectangleIcon className="w-4 h-6 ml-1" aria-hidden="true"/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}