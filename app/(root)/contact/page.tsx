import Socials from '@/components/Socials';
import { LampContainer } from '@/components/UI/Lamp';
import { about } from '@/utils/data';
import { Link } from '@nextui-org/react';
import React from 'react';

const Page = () => {
    return (
        <>
            <LampContainer>
                <div className='container text-center'>
                    <h2 className='text-sm md:text-lg mb-4'>Contact me at</h2>
                    <Link
                        href={`mailto:${about.details.email}`}
                        className='text-2xl md:text-4xl lg:text-7xl font-semibold text-gray-200 underline lg:mb-6'
                    >
                        {about.details.email}
                    </Link>
                    <Socials emailShow={false} />
                </div>
            </LampContainer>
        </>
    );
};

export default Page;
