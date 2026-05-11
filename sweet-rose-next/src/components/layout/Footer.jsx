'use client'

import Link from 'next/link'

import { FaInstagram, FaFacebookF, FaPinterestP } from 'react-icons/fa'

const Footer = () => {
	const year = new Date().getFullYear()

	return (
		<footer className='border-t border-white/10 bg-black text-white transition-colors duration-300 dark:border-white/10 dark:bg-black'>
			<div className='container mx-auto px-6 py-14 text-center'>
				{/* Brand */}
				<div className='mb-10'>
					<h2 className='font-serif text-4xl font-bold tracking-tight text-primary'>
						Sweet Rose
					</h2>

					<div className='mx-auto mt-4 h-px w-24 bg-primary/40' />

					<p className='mx-auto mt-6 max-w-2xl text-sm leading-7 text-zinc-400 md:text-base'>
						Handcrafted with love, elegance, and sweetness every Sweet Rose
						creation is made to melt hearts and turn every celebration into a
						beautiful memory.
					</p>
				</div>

				{/* Navigation */}
				<div className='mb-10 flex flex-wrap items-center justify-center gap-6 text-sm font-medium'>
					<Link
						href='/'
						className='text-zinc-300 transition-colors hover:text-primary'
					>
						Home
					</Link>

					<Link
						href='/shop'
						className='text-zinc-300 transition-colors hover:text-primary'
					>
						Shop
					</Link>

					<Link
						href='/story'
						className='text-zinc-300 transition-colors hover:text-primary'
					>
						Our Story
					</Link>

					<Link
						href='/contact'
						className='text-zinc-300 transition-colors hover:text-primary'
					>
						Contact
					</Link>
				</div>

				{/* Social Links */}
				<div className='mb-10 flex justify-center gap-4'>
					<Link
						href='#'
						className='flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-zinc-900 text-zinc-300 transition-all duration-300 hover:scale-105 hover:border-primary/50 hover:bg-primary hover:text-white'
					>
						<FaInstagram size={18} />
					</Link>

					<Link
						href='#'
						className='flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-zinc-900 text-zinc-300 transition-all duration-300 hover:scale-105 hover:border-primary/50 hover:bg-primary hover:text-white'
					>
						<FaFacebookF size={16} />
					</Link>

					<Link
						href='#'
						className='flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-zinc-900 text-zinc-300 transition-all duration-300 hover:scale-105 hover:border-primary/50 hover:bg-primary hover:text-white'
					>
						<FaPinterestP size={18} />
					</Link>
				</div>

				{/* Bottom */}
				<div className='border-t border-white/10 pt-6 text-sm text-zinc-500'>
					© Since 1998 - {new Date().getFullYear()} Sweet Rose. Crafted with
					elegance & sweetness.
				</div>
			</div>
		</footer>
	)
}

export default Footer
