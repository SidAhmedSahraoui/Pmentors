import React from "react";
import useStyles from "./style";
import { Categories } from "@/types/types";
import { Tab } from '@headlessui/react'
import Image from 'next/image';
import Euro from '../../../public/European.jpg' 

const defaultCategories = {
    "Popular": [
        {
          id: 1,
          title: 'Entretien Campus France',
          description: 'Pratiquez l\'entretien Campus France avec nos experts n\'hésitez plus ! réservez maintenant un entretien 1: 1 et augmentez vos chances d\'être accepté,',
          image: Euro,
          space: 1
        },
        {
          id: 1,
          title: 'Programme Campus France',
          description: 'Préparation aux entretiens de Campus France',
          space: 1
        },
      ],
    "Études et Démarche": [
      {
        id: 1,
        title: 'Programme Campus France',
        description: 'Préparation aux entretiens de Campus France',
        space: 5
      },
      {
        id: 1,
        title: 'Programme Campus France',
        description: 'Préparation aux entretiens de Campus France',
        space: 5
      },
    ],
    
    'Technical Interviews': [
      {
        id: 1,
        title: 'Programme Campus France',
        description: 'Préparation aux entretiens de Campus France',
        space: 5
      },
      {
        id: 1,
        title: 'Programme Campus France',
        description: 'Préparation aux entretiens de Campus France',
        space: 5
      },
    ],
    "HR Interviews": [
        {
          id: 1,
          title: 'Programme Campus France',
          description: 'Préparation aux entretiens de Campus France',
          space: 5
        },
        {
          id: 1,
          title: 'Programme Campus France',
          description: 'Préparation aux entretiens de Campus France',
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
                    className="flex flex-row rounded-xl mb-4 bg-gray-800 h-3xl"
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
                    <div className="p-4">
                      <h3 className="text-gray-100 text-xl font-medium leading-5">
                        {post.title}
                      </h3>
                      <h6 className="text-gray-400 text-sm font-normal pt-2 max-w-md leading-5">
                        {post.description}
                      </h6>
                    </div>  
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
