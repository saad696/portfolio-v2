import Skills from '@/components/Skills';
import Timeline from '@/components/Timeline';
import { about, education, work } from '@/utils/data';
import { Link } from '@nextui-org/react';
import { BriefcaseBusiness, SchoolIcon } from 'lucide-react';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: "SS Portfolio | About",
    openGraph: {
      title: "SS Portfolio | About",
      url: "https://saadshaikh.vercel.app/about",
      images: [
        {
          url: "https://res.cloudinary.com/dkjo8w9u8/image/upload/v1715601375/Screenshot_2024-05-13_172543_z2juxo.png",
          alt: "portfolio-logo",
        },
      ],
    },
    twitter: {
      title: "SS Portfolio | About",
      images: [
        {
          url: "https://res.cloudinary.com/dkjo8w9u8/image/upload/v1715601375/Screenshot_2024-05-13_172543_z2juxo.png",
          alt: "portfolio-logo",
        },
      ],
    },
  };

const Page = () => {
    return (
        <main
            className={
                'relative h-full py-6 flex items-center bg-white dark:bg-black justify-center w-full group'
            }
        >
            <div className='absolute inset-0 bg-dot-thick-neutral-300 dark:bg-dot-thick-neutral-800 pointer-events-none' />
            <div className='z-20 container space-y-28 md:space-y-36'>
                <div>
                    <h1 className='uppercase text-4xl md:text-5xl lg:text-7xl text-center font-bold mb-4'>
                        About <span className='text-purple-500'>me</span>
                    </h1>
                    <p className='text-sm md:text-base lg:text-lg text-center'>
                        {about.bio}
                    </p>
                </div>
                <div>
                    <h3 className='text-2xl md:text-4xl lg:text-5xl uppercase mb-4 font-semibold'>
                        <span className='text-purple-500'>More</span> About Me
                    </h3>
                    <div className='grid md:grid-cols-2 text-sm md:text-base font-semibold gap-6'>
                        <ul className='space-y-2'>
                            <li className='p-4 bg-[#3f3f46] rounded'>
                                <span className='text-gray-500 dark:text-gray-400'>
                                    First Name:
                                </span>{' '}
                                {about.details.firstname}
                            </li>
                            <li className='p-4 bg-[#3f3f46] rounded'>
                                <span className='text-gray-500 dark:text-gray-400'>
                                    Experience:
                                </span>{' '}
                                {about.details.experience}
                            </li>
                            <li className='p-4 bg-[#3f3f46] rounded'>
                                <span className='text-gray-500 dark:text-gray-400'>
                                    Nationality:
                                </span>{' '}
                                {about.details.nationality}
                            </li>
                            <li className='p-4 bg-[#3f3f46] rounded'>
                                <span className='text-gray-500 dark:text-gray-400'>
                                    Degree:
                                </span>{' '}
                                {about.details.degree}
                            </li>
                        </ul>
                        <ul className='space-y-2 mt-3 md:mt-0'>
                            <li className='p-4 bg-[#3f3f46] rounded'>
                                <span className='text-gray-500 dark:text-gray-400'>
                                    Last Name:
                                </span>{' '}
                                {about.details.lastname}
                            </li>
                            <li className='p-4 bg-[#3f3f46] rounded'>
                                <span className='text-gray-500 dark:text-gray-400 mr-1'>
                                    email:
                                </span>
                                <Link
                                    className='text-gray-200'
                                    href={`mailto:${about.details.email}`}
                                >
                                    {about.details.email}
                                </Link>
                            </li>
                            <li className='p-4 bg-[#3f3f46] rounded'>
                                <span className='text-gray-500 dark:text-gray-400'>
                                    Based:
                                </span>{' '}
                                {about.details.address}
                            </li>
                            <li className='p-4 bg-[#3f3f46] rounded'>
                                <span className='text-gray-500 dark:text-gray-400'>
                                    Interests:
                                </span>{' '}
                                {about.details.interests}
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h3 className='text-2xl md:text-4xl lg:text-5xl uppercase mb-4 font-semibold'>
                        My <span className='text-purple-500'>Skills</span>
                    </h3>
                    <Skills />
                </div>
                <div>
                    <h3 className='text-2xl md:text-4xl lg:text-5xl uppercase mb-4 font-semibold'>
                        My{' '}
                        <span className='text-purple-500'>Work Experience</span>
                    </h3>
                    <Timeline data={work} icon={<BriefcaseBusiness />} />
                </div>
                <div>
                    <h3 className='text-2xl md:text-4xl lg:text-5xl uppercase mb-4 font-semibold'>
                        My <span className='text-purple-500'>Education</span>
                    </h3>
                    <Timeline data={education} icon={<SchoolIcon />} />
                </div>
            </div>
        </main>
    );
};

export default Page;
