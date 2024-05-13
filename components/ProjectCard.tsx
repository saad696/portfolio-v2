'use client';

import React from 'react';
import { FollowerPointerCard } from './UI/FollowingPointer';
import { projects } from '@/utils/data';
import {
    Button,
    Chip,
    Divider,
    Image,
    Link,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ScrollShadow,
    useDisclosure,
} from '@nextui-org/react';

import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

interface ProjectCardProps {
    data: (typeof projects)[0];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ data }) => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <>
            <FollowerPointerCard title={data.projectName}>
                <div className='relative overflow-hidden h-full rounded-2xl transition duration-200 group bg-gray-200 hover:shadow-xl border border-zinc-100'>
                    <img
                        src={data.projectThumbnail}
                        alt={data.projectName}
                        className={`hover:scale-95 hover:rounded-2xl transform object-cover transition duration-200`}
                    />
                    <div className='p-4'>
                        <h2 className='font-bold my-4 text-lg text-zinc-700'>
                            {data.projectName}
                        </h2>
                        <h2 className='font-normal my-4 text-sm text-zinc-500 line-clamp-3'>
                            {data.projectDesc}
                        </h2>
                        <div className='flex flex-row justify-between items-center mt-10'>
                            <span className='text-sm text-gray-500'>
                                {data.workDone}
                            </span>
                            <Button onClick={onOpen} size='sm'>
                                Read More
                            </Button>
                        </div>
                    </div>
                </div>
            </FollowerPointerCard>

            <Modal size='4xl' isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    <>
                        <ModalHeader className='flex flex-col gap-1 text-center'>
                            {data.projectName}
                        </ModalHeader>
                        <ModalBody>
                                {data.images && data.images.length ? (
                                    <Carousel autoPlay swipeable>
                                        {data.images.map((img) => (
                                            <div key={img}>
                                                <Image
                                                    src={img}
                                                    alt={data.projectName}
                                                />
                                            </div>
                                        ))}
                                    </Carousel>
                                ) : (
                                    <Image
                                        src={data.projectThumbnail}
                                        alt={data.projectName}
                                    />
                                )}
                                <ScrollShadow className="h-[400px] md:h-full">

                                <div className='text-sm'>
                                    <p className='text-justify'>
                                        {data.projectDesc}
                                    </p>
                                    <Divider className='my-4' />
                                    <div>
                                        <ul className='space-y-4'>
                                            <li className='grid grid-cols-3'>
                                                <span className='text-gray-500 dark:text-gray-400'>
                                                    Associated With:
                                                </span>
                                                <span className='col-span-2'>
                                                    {data.association}
                                                </span>
                                            </li>
                                            <li className='grid grid-cols-3'>
                                                <span className='text-gray-500 dark:text-gray-400'>
                                                    Duration:
                                                </span>
                                                <span className='col-span-2'>
                                                    {data.duration}
                                                </span>
                                            </li>
                                            <li className='grid grid-cols-3'>
                                                <span className='text-gray-500 dark:text-gray-400'>
                                                    Preview:
                                                </span>
                                                <span className='col-span-2'>
                                                    <Link
                                                        size='sm'
                                                        color='secondary'
                                                        href={data.hostedUrl}
                                                        target='_blank'
                                                    >
                                                        {data.hostedUrl}
                                                    </Link>
                                                </span>
                                            </li>
                                            <li className='grid grid-cols-3'>
                                                <span className='text-gray-500 dark:text-gray-400'>
                                                    Technology Used:
                                                </span>
                                                <span className='col-span-2'>
                                                    {data.techstack
                                                        .split(',')
                                                        .map((x) => (
                                                            <Chip
                                                                key={x}
                                                                size='sm'
                                                                className='m-1'
                                                            >
                                                                {x}
                                                            </Chip>
                                                        ))}
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                </ScrollShadow>
                        </ModalBody>
                        <ModalFooter></ModalFooter>
                    </>
                </ModalContent>
            </Modal>
        </>
    );
};

export default ProjectCard;
