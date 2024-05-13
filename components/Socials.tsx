import { about } from '@/utils/data';
import { Button, Link } from '@nextui-org/react';
import React from 'react';

interface SocialsProps {
    emailShow?: boolean;
}

const Socials: React.FC<SocialsProps> = ({ emailShow = true }) => {
    return (
        <div className='mt-4 lg:mt-0'>
            <Button
                className='underline'
                as={Link}
                variant='light'
                target='_blank'
                href={about.socials.linkedIn}
            >
                LinkedIn
            </Button>
            <Button
                className='underline'
                as={Link}
                variant='light'
                target='_blank'
                href={about.socials.github}
            >
                Github
            </Button>
            {emailShow && (
                <Button
                    className='underline'
                    as={Link}
                    variant='light'
                    href={`mailto:${about.socials.mail}`}
                >
                    Email
                </Button>
            )}
        </div>
    );
};

export default Socials;
