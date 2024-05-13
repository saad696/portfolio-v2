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
            </Navbar>
        </>
    );
};

export default BottomBar;
