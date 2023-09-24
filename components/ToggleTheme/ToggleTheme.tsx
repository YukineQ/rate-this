import React from 'react'
import { useTheme } from 'next-themes'
import { BsSun } from 'react-icons/bs'
import { RxMoon } from 'react-icons/rx'

import { Button } from '../Elements/Button'

export const ToggleTheme = () => {
    const { theme, setTheme } = useTheme()

    return (
        <>
            {theme === 'light' ? (
                <Button
                    size='icon'
                    variant='ghost'
                    startIcon={<BsSun size={20} />}
                    onClick={() => setTheme('dark')}
                />
            ) : (
                <Button
                    size='icon'
                    variant='ghost'
                    startIcon={<RxMoon size={20} />}
                    onClick={() => setTheme('light')}
                />
            )}
        </>
    )
}