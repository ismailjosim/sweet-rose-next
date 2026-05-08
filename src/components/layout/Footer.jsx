'use client'

import Link from 'next/link'

import { FaInstagram, FaFacebookF, FaPinterestP } from 'react-icons/fa'

const Footer = () => {
	const year = new Date().getFullYear()

	return (
		<footer className='border-t border-border bg-secondary py-10 text-foreground transition-colors duration-300'>
			<div className='mx-auto container text-center'>
				{/* Brand */}
				<div className='mb-8'>
					<h2 className='font-serif text-3xl font-bold text-primary'>
						Sweet Rose
					</h2>

					<p className='mx-auto mt-4 max-w-md text-muted-foreground'>
						Handcrafted with love, elegance, and sweetness every Sweet Rose
						creation is made to melt hearts and make every moment unforgettable.
					</p>
				</div>

				{/* Social Links */}
				<div className='mb-8 flex justify-center gap-6'>
					<Link
						href='#'
						className='flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary'
					>
						<FaInstagram size={18} />
						<span>Instagram</span>
					</Link>

					<Link
						href='#'
						className='flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary'
					>
						<FaFacebookF size={16} />
						<span>Facebook</span>
					</Link>

					<Link
						href='#'
						className='flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary'
					>
						<FaPinterestP size={18} />
						<span>Pinterest</span>
					</Link>
				</div>

				{/* Bottom */}
				<div className='border-t border-border pt-8 text-sm text-muted-foreground'>
					© {year} Sweet Rose. All rights reserved.
				</div>
			</div>
		</footer>
	)
}

export default Footer
