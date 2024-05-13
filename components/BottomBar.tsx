import {
    Navbar,
    NavbarContent,
    NavbarItem,
    ButtonGroup,
    Button,
    Link,
} from '@nextui-org/react';
import {
    HomeIcon,
    User2Icon,
    BriefcaseBusiness,
    MessageSquare,
} from 'lucide-react';
import React from 'react';

const BottomBar = () => {
    return (
        <>
            <Navbar className='!sticky lg:hidden bottom-0 h-[70px]'>
                <NavbarContent className='w-full' justify='center'>
                    <NavbarItem>
                        <ButtonGroup variant='light' size='lg'>
                            <Button as={Link} href='/' className='block text-center'>
                                <HomeIcon className='mx-auto' />
                                <small>Home</small>
                            </Button>
                            <Button as={Link} href='/about' className='block text-center'>
                                <User2Icon className='mx-auto' />
                                <small>About</small>
                            </Button>
                            <Button as={Link} href='/portfolio' className='block text-center'>
                                <BriefcaseBusiness className='mx-auto' />
                                <small>Portfolio</small>
                            </Button>
                            <Button as={Link} href='/contact' className='block text-center'>
                                <MessageSquare className='mx-auto' />
                                <small>Contact</small>
                            </Button>
                        </ButtonGroup>
                    </NavbarItem>
                </NavbarContent>
            </Navbar>
        </>
    );
};

export default BottomBar;
