'use client'

import Link from 'next/link'
import { Separator } from '@heroui/react'

const Footer = () => {
	return (
		<footer className='bg-background border-t border-divider px-6 md:px-16 py-12 text-foreground'>
			<div className='grid grid-cols-1 md:grid-cols-4 gap-10'>
				{/* Brand */}
				<div>
					<h2 className='text-xl font-semibold mb-3'>LearnHub</h2>
					<p className='text-sm text-default-500'>
						A modern platform to explore courses, learn new skills, and grow
						your career.
					</p>
				</div>

				{/* Contact Info */}
				<div>
					<h3 className='text-lg font-semibold mb-3'>Contact</h3>
					<ul className='space-y-2 text-sm text-default-500'>
						<li>Email: support@learnhub.com</li>
						<li>Phone: +880 1234-567890</li>
						<li>Dhaka, Bangladesh</li>
					</ul>
				</div>

				{/* Social Links */}
				<div>
					<h3 className='text-lg font-semibold mb-3'>Social</h3>
					<ul className='space-y-2 text-sm'>
						<li>
							<Link href='#' className='hover:underline'>
								Facebook
							</Link>
						</li>
						<li>
							<Link href='#' className='hover:underline'>
								Twitter
							</Link>
						</li>
						<li>
							<Link href='#' className='hover:underline'>
								LinkedIn
							</Link>
						</li>
						<li>
							<Link href='#' className='hover:underline'>
								GitHub
							</Link>
						</li>
					</ul>
				</div>

				{/* Legal */}
				<div>
					<h3 className='text-lg font-semibold mb-3'>Legal</h3>
					<ul className='space-y-2 text-sm'>
						<li>
							<Link href='/terms' className='hover:underline'>
								Terms & Conditions
							</Link>
						</li>
						<li>
							<Link href='/privacy' className='hover:underline'>
								Privacy Policy
							</Link>
						</li>
					</ul>
				</div>
			</div>

			{/* Separator */}
			<Separator className='my-8' />

			{/* Bottom */}
			<div className='text-center text-sm text-default-500'>
				© {new Date().getFullYear()} LearnHub. All rights reserved.
			</div>
		</footer>
	)
}

export default Footer
