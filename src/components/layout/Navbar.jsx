'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

import { Avatar, Button, toast } from '@heroui/react'

import ThemeToggler from '@/lib/ThemeToggler'
import { authClient } from '@/lib/auth-client'

const navLinks = [
	{
		label: 'Home',
		href: '/',
	},
	{
		label: 'Shop',
		href: '/shop',
	},
	{
		label: 'Our Story',
		href: '/story',
	},
	{
		label: 'My Profile',
		href: '/profile',
	},
]

const Navbar = () => {
	const { data: session, isPending } = authClient.useSession()

	const user = session?.user

	const router = useRouter()

	const handleLogout = async () => {
		await authClient.signOut({
			fetchOptions: {
				onSuccess: () => {
					toast.success('Logged out successfully')

					router.push('/')
					router.refresh()
				},
			},
		})
	}

	return (
		<nav className='sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl'>
			<header className='container mx-auto flex items-center justify-between py-4'>
				<Link href='/' className='group flex items-center gap-3'>
					<div className='flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-primary shadow-lg transition-transform duration-300 group-hover:scale-105'>
						<Image
							src='/sweet-rose-logo.png'
							alt='Sweet Rose Logo'
							width={40}
							height={40}
							className='object-cover'
						/>
					</div>

					<div className='flex flex-col'>
						<span className='font-serif text-2xl font-bold tracking-tight text-foreground'>
							Sweet Rose
						</span>

						<span className='hidden text-xs text-muted-foreground md:block'>
							Made to Melt Hearts
						</span>
					</div>
				</Link>
				<ul className='hidden items-center gap-8 md:flex'>
					{navLinks.map((link) => (
						<li key={link.href}>
							<Link
								href={link.href}
								className='font-medium text-foreground transition-colors duration-200 hover:text-primary'
							>
								{link.label}
							</Link>
						</li>
					))}
				</ul>
				<div className='flex items-center gap-3'>
					{/* Theme Toggle */}

					<div className='rounded-full border border-border bg-secondary p-1'>
						<ThemeToggler />
					</div>

					{/* Loading State */}

					{isPending ? (
						<div className='h-9 w-9 animate-pulse rounded-full bg-muted' />
					) : user ? (
						<>
							{/* User Info */}

							<div className='hidden flex-col items-end md:flex'>
								<span className='text-sm font-semibold text-foreground'>
									{user.name}
								</span>

								<span className='text-xs text-muted-foreground'>
									{user.email}
								</span>
							</div>

							{/* Avatar */}

							<Avatar
								src={user.image || ''}
								name={user.name || 'User'}
								size='sm'
								isBordered
								color='danger'
								className='ring-2 ring-border'
							/>

							{/* Logout Button */}

							<Button
								size='sm'
								variant='flat'
								onPress={handleLogout}
								className='border border-border bg-secondary font-medium text-foreground transition-colors hover:bg-hover'
							>
								Logout
							</Button>
						</>
					) : (
						<>
							{/* Login */}

							<Link href='/auth/login'>
								<Button
									size='sm'
									variant='light'
									className='font-medium text-foreground transition-colors hover:bg-hover'
								>
									Login
								</Button>
							</Link>

							{/* Register */}

							<Link href='/auth/register'>
								<Button
									size='sm'
									className='bg-primary font-medium text-primary-foreground shadow-lg transition-all hover:scale-[1.02] hover:opacity-90'
								>
									Register
								</Button>
							</Link>
						</>
					)}
				</div>
			</header>
		</nav>
	)
}

export default Navbar
