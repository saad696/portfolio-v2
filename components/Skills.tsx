'use client';

import { about } from '@/utils/data';
import { Tabs, Tab, Card, CardBody, Chip } from '@nextui-org/react';
import React from 'react';

const Skills = () => {
    return (
        <>
            <div className='flex w-full flex-col'>
                <Tabs aria-label='Options'>
                    <Tab key='Frontend' title='Frontend'>
                        {about.skills.frontend.map((x) => (
                            <Chip
                                key={x}
                                className='m-2'
                                color='secondary'
                                variant='dot'
                            >
                                {x}
                            </Chip>
                        ))}
                    </Tab>
                    <Tab key='Backend' title='Backend'>
                        {about.skills.backend.map((x) => (
                            <Chip
                                key={x}
                                className='m-2'
                                color='secondary'
                                variant='dot'
                            >
                                {x}
                            </Chip>
                        ))}
                    </Tab>
                    <Tab key='Tools' title='Tools'>
                        {about.skills.tools.map((x) => (
                            <Chip
                                key={x}
                                className='m-2'
                                color='secondary'
                                variant='dot'
                            >
                                {x}
                            </Chip>
                        ))}
                    </Tab>
                    <Tab key='Soft Skills' title='Soft Skills'>
                        {about.skills.soft.map((x) => (
                            <Chip
                                key={x}
                                className='m-2'
                                color='secondary'
                                variant='dot'
                            >
                                {x}
                            </Chip>
                        ))}
                    </Tab>
                </Tabs>
            </div>
        </>
    );
};

export default Skills;
