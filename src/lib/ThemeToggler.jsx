'use client'

import { Switch } from '@heroui/react'
import { Moon } from 'lucide-react'
import { Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import React from 'react'

const ThemeToggler = () => {
	const { theme, setTheme } = useTheme()

	return (
		<Switch onChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
			{({ isSelected }) => (
				<>
					<Switch.Control
						className={`h-7.75 w-12.75 bg-rose-200 dark:bg-rose-900 ${isSelected
							? 'bg-rose-500 shadow-[0_0_12px_rgba(244,63,94,0.45)]'
							: ''
							}`}
					>
						<Switch.Thumb
							className={`size-6.75 bg-white shadow-sm rounded-full ${isSelected ? 'ms-5.5 shadow-lg' : ''
								}`}
						>
							<Switch.Icon>
								{isSelected ? (
									<Sun className='size-4 text-rose-900' />
								) : (
									<Moon className='size-4 text-rose-700' />
								)}
							</Switch.Icon>
						</Switch.Thumb>
					</Switch.Control>
				</>
			)}
		</Switch>
	)
}

export default ThemeToggler
