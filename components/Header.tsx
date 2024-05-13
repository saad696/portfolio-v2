import {
    Button,
    ButtonGroup,
    Link,
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
} from '@nextui-org/react';
import React from 'react';
import { ThemeSwitcher } from './ThemeSwitcher';
import localFont from 'next/font/local';
import {
    BriefcaseBusiness,
    HomeIcon,
    MessageSquare,
    User2Icon,
} from 'lucide-react';

const futuraBlack = localFont({ src: '../public/Futura Black.ttf' });

const Header = () => {
    return (
        <>
            <Navbar>
                <NavbarBrand>
                    <p
                        className={`${futuraBlack.className} font-bold text-inherit text-5xl text-black dark:text-purple-500`}
                    >
                        SS
                    </p>
                    <p className='ml-2 text-lg font-semibold'>Portfolio</p>
                </NavbarBrand>
                <NavbarContent justify='center' className='hidden lg:flex'>
                    <NavbarItem>
                        <ButtonGroup variant='light' size='lg'>
                            <Button as={Link} href='/'>
                                <HomeIcon />
                            </Button>
                            <Button as={Link} href='/about'>
                                <User2Icon />
                            </Button>
                            <Button as={Link} href='/portfolio'>
                                <BriefcaseBusiness />
                            </Button>
                            <Button as={Link} href='/contact'>
                                <MessageSquare />
                            </Button>
                        </ButtonGroup>
                    </NavbarItem>
                </NavbarContent>
                <NavbarContent justify='end'>
                    <NavbarItem>
                        {/* <ThemeSwitcher /> */}
                    </NavbarItem>
                </NavbarContent>
            </Navbar>
        </>
    );
};

export default Header;
