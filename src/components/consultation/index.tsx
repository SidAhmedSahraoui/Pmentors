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
          id: 1,
          title: 'Fullstack Developer',
          description: 'Assurez-vous d\'avoir les connaissances nécessaires pour obtenir ' +
          'votre premier emploi en tant qu\'ingénieur Fullstack web et grandir dans ' +
          'votre première étape dans le domaine informatique',
          image: Full,
          space: 5
        },
        {
          id: 1,
          title: 'UI/UX Designer',
          description: 'Passez un peu de temps à ' +
          'préparer votre prochain entretien avec un concepteur d\'expérience utilisateur (UX) ' +
          'et vous pourrez entrer avec plus de confiance. Une grande partie de la préparation ' +
          'd\'un entretien consiste à passer en revue certaines questions d\'entretien courantes' + 
          ' et à réfléchir à la manière dont vous y répondrez.',
          image: UI,
          space: 5
        },
        {
          id: 1,
          title: 'Backend Developer',
          description: 'Pratiquer toutes les questions de compétences backend,' 
          +'de la conception de l\'API à la mise en œuvre et aux meilleures pratiques',
          image: Back,
          space: 5
        },
        {
          id: 1,
          title: 'Frontend Developer',
          description: 'Assurez-vous d\'avoir les connaissances nécessaires pour obtenir ' +
          'votre premier emploi en tant qu\'ingénieur frontend et grandir dans ' +
          'votre première étape dans le domaine informatique',
          image: Front,
          space: 5
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
        id: 1,
        title: 'Entretien Etudier a Canada',
        description: 'Pratiquez l\'entretien Etudier a Canada avec nos experts n\'hésitez plus ! '+
        'réservez maintenant un entretien 1: 1 et augmentez vos chances d\'être accepté,',
        image: Canada,
        space: 1
      },
    ],
    
    'Technical Interviews': [
      {
        id: 1,
        title: 'Fullstack Developer',
        description: 'Assurez-vous d\'avoir les connaissances nécessaires pour obtenir ' +
        'votre premier emploi en tant qu\'ingénieur Fullstack web et grandir dans ' +
        'votre première étape dans le domaine informatique',
        image: Full,
        space: 5
      },
      {
        id: 1,
        title: 'UI/UX Designer',
        description: 'Passez un peu de temps à ' +
        'préparer votre prochain entretien avec un concepteur d\'expérience utilisateur (UX) ' +
        'et vous pourrez entrer avec plus de confiance. Une grande partie de la préparation ' +
        'd\'un entretien consiste à passer en revue certaines questions d\'entretien courantes' + 
        ' et à réfléchir à la manière dont vous y répondrez.',
        image: UI,
        space: 5
      },
      {
        id: 1,
        title: 'Backend Developer',
        description: 'Pratiquer toutes les questions de compétences backend,' 
        +'de la conception de l\'API à la mise en œuvre et aux meilleures pratiques',
        image: Back,
        space: 5
      },
      {
        id: 1,
        title: 'Frontend Developer',
        description: 'Assurez-vous d\'avoir les connaissances nécessaires pour obtenir ' +
        'votre premier emploi en tant qu\'ingénieur frontend et grandir dans ' +
        'votre première étape dans le domaine informatique',
        image: Front,
        space: 5
      },
    ],
    "HR Interviews": [
        {
          id: 1,
          title: 'Programme Campus France',
          description: 'Préparation aux entretiens de Campus France',
          image: Inter,
          space: 5
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
      <div className="w-full max-w-6xl m-auto px-2 py-16 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-none p-1">
          {Object.keys(defaultCategories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-4 px-4 text-md font-medium leading-5 text-gray-one',
                  'focus:outline-none hover:text-gray-one',
                  selected
                    ? 'bg-purple-two'
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
                      <Link href='/' className='px-4 py-2 mt-4 text-white rounded-md border-2' >
                              {'Plus d\'infos'}
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
