'use client'

import Link from 'next/link'
import { Avatar, Button, toast } from '@heroui/react'
import ThemeToggler from '@/lib/ThemeToggler'
import { authClient } from '@/lib/auth-client'
import { useRouter } from 'next/navigation'
import { GraduationCap } from 'lucide-react'
import Image from 'next/image'

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
		<nav className='sticky top-0 z-50 border-b border-rose-100 bg-background/80 backdrop-blur-xl'>
			<header className='mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8'>
				{/* Logo */}
				<Link href='/' className='flex items-center gap-3'>
					<div className='flex h-11 w-11 items-center justify-center rounded-full bg-rose-600 text-white shadow-lg shadow-rose-200 transition-transform duration-300 hover:scale-105'>
						<Image
							src='/sweet-rose-logo.png'
							alt='Sweet Rose Logo'
							width={44}
							height={44}
							className='object-contain'
						/>
					</div>

					<div className='flex flex-col'>
						<span className='font-serif text-2xl font-bold tracking-tight text-rose-800 dark:text-rose-200'>
							Sweet Rose
						</span>


					</div>
				</Link>

				{/* Nav Links */}
				<ul className='hidden items-center gap-8 md:flex'>
					<li>
						<Link
							href='/'
							className='font-medium text-rose-900 transition-colors hover:text-rose-600 dark:text-rose-100 dark:hover:text-rose-400'
						>
							Home
						</Link>
					</li>

					<li>
						<Link
							href='/shop'
							className='font-medium text-rose-900 transition-colors hover:text-rose-600 dark:text-rose-100 dark:hover:text-rose-400'
						>
							Shop
						</Link>
					</li>

					<li>
						<Link
							href='/story'
							className='font-medium text-rose-900 transition-colors hover:text-rose-600 dark:text-rose-100 dark:hover:text-rose-400'
						>
							Our Story
						</Link>
					</li>
					<li>
						<Link
							href='/profile'
							className='font-medium text-rose-900 transition-colors hover:text-rose-600 dark:text-rose-100 dark:hover:text-rose-400'
						>
							My Profile
						</Link>
					</li>
				</ul>

				{/* Right Side */}
				<div className='flex items-center gap-3'>
					<div className='rounded-full border border-rose-200 bg-rose-50/70 p-1 dark:border-rose-800 dark:bg-rose-950/40'>
						<ThemeToggler />
					</div>

					{isPending ? (
						<div className='h-9 w-9 animate-pulse rounded-full bg-rose-100 dark:bg-rose-900' />
					) : user ? (
						<>
							<div className='hidden flex-col items-end md:flex'>
								<span className='text-sm font-semibold text-rose-900 dark:text-rose-100'>
									{user.name}
								</span>

								<span className='text-xs text-rose-500 dark:text-rose-400'>
									{user.email}
								</span>
							</div>

							<Avatar
								src={user.image || ''}
								name={user.name || 'User'}
								size='sm'
								isBordered
								color='danger'
								className='ring-2 ring-rose-200 dark:ring-rose-700'
							/>

							<Button
								size='sm'
								variant='flat'
								color='danger'
								onPress={handleLogout}
								className='border border-rose-200 bg-rose-50 font-medium text-rose-700 hover:bg-rose-100 dark:border-rose-800 dark:bg-rose-900/40 dark:text-rose-200 dark:hover:bg-rose-900'
							>
								Logout
							</Button>
						</>
					) : (
						<>
							<Link href='/auth/login'>
								<Button
									size='sm'
									variant='light'
									className='font-medium text-rose-700 hover:bg-rose-100 dark:text-rose-200 dark:hover:bg-rose-900/40'
								>
									Login
								</Button>
							</Link>

							<Link href='/auth/register'>
								<Button
									size='sm'
									className='bg-rose-600 font-medium text-white shadow-lg shadow-rose-200 transition-all hover:bg-rose-700 dark:shadow-rose-950'
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
