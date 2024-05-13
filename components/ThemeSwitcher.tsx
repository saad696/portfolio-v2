'use client';

import { Button } from '@nextui-org/react';
import { MoonIcon, SunIcon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function ThemeSwitcher() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div>
            <Button
            variant='light'
                isIconOnly
                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            >
                {theme !== 'light' ? <SunIcon /> : <MoonIcon />}
            </Button>
        </div>
    );
}
