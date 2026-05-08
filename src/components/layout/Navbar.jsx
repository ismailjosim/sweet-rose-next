'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'

import { Avatar, Button } from '@heroui/react'

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
]

const Navbar = () => {
	const router = useRouter()

	/* =========================
	   SESSION
	========================= */

	const { data: session, isPending } = authClient.useSession()

	const user = session?.user

	/* =========================
	   LOGOUT
	========================= */

	const handleLogout = async () => {
		await authClient.signOut({
			fetchOptions: {
				onSuccess: () => {
					toast.success('See you soon! 👋 Logged out successfully', {
						position: 'top-right',
						autoClose: 3000,
					})

					router.push('/')
					router.refresh()
				},
			},
		})
	}

	return (
		<nav className='sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl'>
			<header className='container mx-auto flex items-center justify-between py-4'>
				{/* Logo */}
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

				{/* Navigation */}
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

					{/* Profile Link Only When Logged In */}
					{user && (
						<li>
							<Link
								href='/profile'
								className='font-medium text-foreground transition-colors duration-200 hover:text-primary'
							>
								My Profile
							</Link>
						</li>
					)}
				</ul>

				{/* Right Side */}
				<div className='flex items-center gap-3'>
					{/* Theme Toggle */}
					<div className='rounded-full border border-border bg-secondary p-1'>
						<ThemeToggler />
					</div>

					{/* Loading */}
					{isPending && (
						<div className='h-10 w-24 animate-pulse rounded-2xl bg-muted' />
					)}

					{/* Logged In */}
					{!isPending && user && (
						<div className='flex items-center gap-3'>
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
							<Link href='/profile'>
								<Avatar
									src={user.image || ''}
									name={user.name || 'User'}
									size='sm'
									isBordered
									color='danger'
									className='cursor-pointer ring-2 ring-border transition-transform hover:scale-105'
								/>
							</Link>

							{/* Logout */}
							<Button
								size='sm'
								variant='flat'
								onPress={handleLogout}
								className='border border-border bg-secondary font-medium text-foreground transition-colors hover:bg-hover'
							>
								Logout
							</Button>
						</div>
					)}

					{/* Logged Out */}
					{!isPending && !user && (
						<div className='flex items-center gap-2'>
							{/* Login */}
							<Link href='/login'>
								<Button
									size='sm'
									variant='light'
									className='font-medium text-foreground transition-colors hover:bg-hover'
								>
									Login
								</Button>
							</Link>

							{/* Register */}
							<Link href='/register'>
								<Button
									size='sm'
									className='bg-primary font-medium text-primary-foreground shadow-lg transition-all hover:scale-[1.02] hover:opacity-90'
								>
									Register
								</Button>
							</Link>
						</div>
					)}
				</div>
			</header>
		</nav>
	)
}

export default Navbar
