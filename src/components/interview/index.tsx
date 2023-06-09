import React from "react";
import Link from 'next/link'
import useStyles from "./style";
import { Categories } from "@/types/types";
import { Tab } from '@headlessui/react'
import Image from 'next/image';
import Euro from '../../../public/img/Euro.png' 
import Inter from '../../../public/img/interview.png'
import Back from '../../../public/img/backend.png'
import Front from '../../../public/img/frontend.png'
import UI from '../../../public/img/design.png'
import Full from '../../../public/img/fullstack.png'
import Canada from '../../../public/img/canada.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck } from "@fortawesome/free-solid-svg-icons";
import { ChevronRightIcon } from "@heroicons/react/20/solid";


const defaultCategories = {
    "Popular": [
        {
          id: 1,
          title: 'Entretien Campus France',
          description: 'Pratiquez l\'entretien Campus France avec nos experts n\'hésitez plus ! '+
          'réservez maintenant un entretien 1: 1 et augmentez vos chances d\'être accepté,',
          image: Euro,
          space: 1
        },
        {
          id: 2,
          title: 'Fullstack Developer',
          description: 'Assurez-vous d\'avoir les connaissances nécessaires pour obtenir ' +
          'votre premier emploi en tant qu\'ingénieur Fullstack web et grandir dans ' +
          'votre première étape dans le domaine informatique',
          image: Full,
          space: 1
        },
        {
          id: 3,
          title: 'UI/UX Designer',
          description: 'Passez un peu de temps à ' +
          'préparer votre prochain entretien avec un concepteur d\'expérience utilisateur (UX) ' +
          'et vous pourrez entrer avec plus de confiance. Une grande partie de la préparation ' +
          'd\'un entretien consiste à passer en revue certaines questions d\'entretien courantes' + 
          ' et à réfléchir à la manière dont vous y répondrez.',
          image: UI,
          space: 1
        },
        {
          id: 4,
          title: 'Backend Developer',
          description: 'Pratiquer toutes les questions de compétences backend,' 
          +'de la conception de l\'API à la mise en œuvre et aux meilleures pratiques',
          image: Back,
          space: 1
        },
        {
          id: 5,
          title: 'Frontend Developer',
          description: 'Assurez-vous d\'avoir les connaissances nécessaires pour obtenir ' +
          'votre premier emploi en tant qu\'ingénieur frontend et grandir dans ' +
          'votre première étape dans le domaine informatique',
          image: Front,
          space: 1
        },
        {
          id: 6,
          title: 'Entretien Etudier a Canada',
          description: 'Pratiquez l\'entretien Etudier a Canada avec nos experts n\'hésitez plus ! '+
          'réservez maintenant un entretien 1: 1 et augmentez vos chances d\'être accepté,',
          image: Canada,
          space: 1
        },
        {
          id: 7,
          title: 'HR Interviews Preparation',
          description: 'Préparation aux entretiens RH avec nos experts n\'hésitez plus ! reservez maintenant un entretien 1: 1 et augmentez vos chances de trouver un emploi.',
          image: Inter,
          space: 1
        },
      ],
    "Études et Démarche": [
      {
        id: 1,
        title: 'Entretien Campus France',
        description: 'Pratiquez l\'entretien Campus France avec nos experts n\'hésitez plus ! '+
        'réservez maintenant un entretien 1: 1 et augmentez vos chances d\'être accepté,',
        image: Euro,
        space: 1
      },
      {
        id: 6,
        title: 'Entretien Etudier a Canada',
        description: 'Pratiquez l\'entretien Etudier a Canada avec nos experts n\'hésitez plus ! '+
        'réservez maintenant un entretien 1: 1 et augmentez vos chances d\'être accepté,',
        image: Canada,
        space: 1
      },
    ],
    
    'Technical Interviews': [
      {
        id: 2,
        title: 'Fullstack Developer',
        description: 'Assurez-vous d\'avoir les connaissances nécessaires pour obtenir ' +
        'votre premier emploi en tant qu\'ingénieur Fullstack web et grandir dans ' +
        'votre première étape dans le domaine informatique',
        image: Full,
        space: 1
      },
      {
        id: 3,
        title: 'UI/UX Designer',
        description: 'Passez un peu de temps à ' +
        'préparer votre prochain entretien avec un concepteur d\'expérience utilisateur (UX) ' +
        'et vous pourrez entrer avec plus de confiance. Une grande partie de la préparation ' +
        'd\'un entretien consiste à passer en revue certaines questions d\'entretien courantes' + 
        ' et à réfléchir à la manière dont vous y répondrez.',
        image: UI,
        space: 1
      },
      {
        id: 4,
        title: 'Backend Developer',
        description: 'Pratiquer toutes les questions de compétences backend,' 
        +'de la conception de l\'API à la mise en œuvre et aux meilleures pratiques',
        image: Back,
        space: 1
      },
      {
        id: 5,
        title: 'Frontend Developer',
        description: 'Assurez-vous d\'avoir les connaissances nécessaires pour obtenir ' +
        'votre premier emploi en tant qu\'ingénieur frontend et grandir dans ' +
        'votre première étape dans le domaine informatique',
        image: Front,
        space: 1
      },
    ],
    "HR Interviews": [
        {
          id: 7,
          title: 'HR Interviews Preparation',
          description: 'Préparation aux entretiens RH avec nos experts n\'hésitez plus ! reservez maintenant un entretien 1: 1 et augmentez vos chances de trouver un emploi.',
          image: Inter,
          space: 1
        },
        
      ],
  }
  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
  }
const Index: React.FC<Categories> = ({ categories }) => {
  const classes = useStyles();


  return (
    <>
      <main className={classes.main}>
      <div className="w-full max-w-6xl m-auto px-2 py-4 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-none p-1">
          {Object.keys(defaultCategories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-4 px-4 text-md font-medium leading-5 text-gray-one',
                  'focus:outline-none',
                  selected
                    ? 'bg-gray-800 text-white'
                    : 'text-gray-one'
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(defaultCategories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className='rounded-xl bg-none p-3'
            >
              <ul>
                {posts.map((post) => (
                  <li
                    key={post.id}
                    className="flex flex-row rounded-xl mb-4 bg-gray-800 h-fit w-fit"
                    dir="ltr"
                  >
                    <Image
                            alt="category image"
                            src={post.image}
                            width={180}
                            height={340}
                            style={{
                                maxWidth: '100%',
                                height: 'auto',
                                borderTopLeftRadius: '0.75rem',
                                borderBottomLeftRadius: '0.75rem'

                            }}
                        />
                    <div className="p-4 w-fit">
                      <h3 className="text-gray-100 text-xl font-bold leading-5">
                        {post.title}
                      </h3>
                      <h6 className="text-gray-400 text-sm font-normal pt-2  mb-4 max-w-xl leading-5">
                        {post.description}
                      </h6>
                      <Link href='/' className="flex cursor-pointer flex-row items-center max-w-fit h-auto px-4 py-2 font-semibold
                       transition duration-200 border ease-in-out transform rounded-md outline-none mt-7 group 
                       text-gray-100 hover:text-gray-700 hover:border-gray-500 hover:bg-gray-50 focus:outline-none bg-darkblue 
                       hover:text-lightpink hover:border-darkpink text-darkpink border-lightblue">
                      
                                        {'Plus d\'infos'}
                              <ChevronRightIcon className="w-5 h-5 ml-2" aria-hidden="true" />
                      </Link>
                      
                    </div>  
                    <Link href='/' className="p-4 w-fit flex flex-col justify-start bg-bg-green rounded-r-xl" >
                          <h4  className='h-fit w-full text-white text-lg font-bold text-center' >
                            Réserver 
                            <br/>
                            un rendez-vous
                          </h4>
                          <FontAwesomeIcon icon={faCalendarCheck} className='text-white w-[24px] h-[24px] m-auto text-center text-sm mt-2' />
                    </Link>  
                  </li>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
      </main>
    </>
  );
};
export default Index;
