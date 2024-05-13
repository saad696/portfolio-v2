import Socials from '@/components/Socials';
import { HeroHighlight, Highlight } from '@/components/UI/HeroHighlight';
import { about } from '@/utils/data';
import { Button, Image, Link } from '@nextui-org/react';
import { ChevronRight, DownloadIcon } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "SS Portfolio | Home",
    openGraph: {
      title: "SS Portfolio | Home",
      url: "https://sdesaadshaikh.vercel.app",
      images: [
        {
          url: "https://res.cloudinary.com/dkjo8w9u8/image/upload/v1715601375/Screenshot_2024-05-13_172543_z2juxo.png",
          alt: "portfolio-logo",
        },
      ],
    },
    twitter: {
      title: "SS Portfolio | Home",
      images: [
        {
          url: "https://res.cloudinary.com/dkjo8w9u8/image/upload/v1715601375/Screenshot_2024-05-13_172543_z2juxo.png",
          alt: "portfolio-logo",
        },
      ],
    },
  };

export default function Home() {
    return (
        <>
            <HeroHighlight className='px-6'>
                <div className='grid lg:grid-cols-2 gap-8 lg:gap-0 items-center'>
                    <div className='justify-self-center'>
                        <Image
                            src='/saad-img-portfolio.png'
                            alt='saad shaikh'
                            className='opacity-100 rounded-full bg-slate-300 dark:bg-slate-900 dark:to-purple-500 w-[200px] md:w-[300px] lg:w-[400px]'
                        />
                    </div>
                    <div className='z-10 text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center lg:text-left mx-auto '>
                        <p className='text-4xl md:text-5xl lg:text-8xl mb-4'>
                            I'm {about.name}
                        </p>
                        <div>
                            <Highlight className='text-black dark:text-white block'>
                                {about.position}
                            </Highlight>
                        </div>
                        <Button
                            variant='solid'
                            color='secondary'
                            size='sm'
                            className='mt-16 inline-flex md:hidden'
                            as={Link}
                            href='/saad_resume.pdf'
                            download={'Saad_Resume'}
                        >
                            Download Resume <DownloadIcon size={18} />
                        </Button>
                        <Button
                            variant='solid'
                            color='secondary'
                            size='lg'
                            className='mt-16 hidden md:inline-flex'
                            as={Link}
                            href='/saad_resume.pdf'
                            download={'Saad_Resume'}
                        >
                            Download Resume <DownloadIcon size={18} />
                        </Button>
                        <Button
                            variant='faded'
                            color='secondary'
                            size='sm'
                            className='mt-16 inline-flex md:hidden ml-2'
                            as={Link}
                            href='/about'
                        >
                            Know More <ChevronRight size={18} />
                        </Button>
                        <Button
                            variant='faded'
                            color='secondary'
                            size='lg'
                            className='mt-16 hidden md:inline-flex ml-2'
                            as={Link}
                            href='/about'
                        >
                            Know More <ChevronRight size={18} />
                        </Button>
                        <Socials />
                    </div>
                </div>
            </HeroHighlight>
        </>
    );
}