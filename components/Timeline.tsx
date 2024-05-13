'use client';

import React from 'react';
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import ReactMarkdown from 'react-markdown';

interface TimelineProps {
    data: {
        title: string;
        location: string;
        description?: string;
        date: string;
    }[];

    icon: React.ReactNode;
}

const Timeline: React.FC<TimelineProps> = ({ data, icon }) => {
    return (
        <>
            <VerticalTimeline animate={false}>
                {data.map(({ title, location, description, date }) => (
                    <VerticalTimelineElement
                        key={title}
                        className='vertical-timeline-element--work'
                        contentStyle={{
                            background: '#3f3f46',
                            color: '#fff',
                        }}
                        contentArrowStyle={{
                            borderRight: '7px solid #3f3f46',
                        }}
                        date={date}
                        iconStyle={{
                            background: '#a855f7',
                            color: '#fff',
                        }}
                        icon={icon}
                    >
                        <h3 className='vertical-timeline-element-title font-semibold'>
                            {title}
                        </h3>
                        <h4 className='vertical-timeline-element-subtitle text-gray-300 pb-4'>
                            {location}
                        </h4>
                        {description ? (
                            <ReactMarkdown className='timeline-desc text-xs'>{description}</ReactMarkdown>
                        ) : (
                            <></>
                        )}
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
        </>
    );
};

export default Timeline;
