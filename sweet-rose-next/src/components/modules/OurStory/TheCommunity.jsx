'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

const STATS = [
	{ value: '50k+', label: 'Hearts Won', numeric: 50, suffix: 'k+' },
	{ value: '12', label: 'Garden Partners', numeric: 12, suffix: '' },
	{ value: '100%', label: 'Handmade', numeric: 100, suffix: '%' },
]

const useCountUp = (target, duration = 1800, start = false) => {
	const [count, setCount] = useState(0)

	useEffect(() => {
		if (!start) return

		let startTime = null

		const step = (timestamp) => {
			if (!startTime) startTime = timestamp
			const progress = Math.min((timestamp - startTime) / duration, 1)
			// ease-out cubic
			const eased = 1 - Math.pow(1 - progress, 3)
			setCount(Math.floor(eased * target))
			if (progress < 1) requestAnimationFrame(step)
		}

		requestAnimationFrame(step)
	}, [target, duration, start])

	return count
}

const StatItem = ({ numeric, suffix, label, animate }) => {
	const count = useCountUp(numeric, 1800, animate)

	return (
		<div className='text-center'>
			<div className='text-4xl md:text-5xl font-serif font-bold text-primary tabular-nums'>
				{animate ? `${count}${suffix}` : `0${suffix}`}
			</div>
			<div className='text-xs md:text-sm font-semibold text-muted-foreground uppercase tracking-widest mt-2'>
				{label}
			</div>
		</div>
	)
}

const TheCommunity = () => {
	const sectionRef = useRef(null)
	const [animate, setAnimate] = useState(false)

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setAnimate(true)
					observer.disconnect()
				}
			},
			{ threshold: 0.3 },
		)

		if (sectionRef.current) observer.observe(sectionRef.current)
		return () => observer.disconnect()
	}, [])

	return (
		<section className='relative py-24 bg-secondary overflow-hidden transition-colors duration-300'>
			{/* soft ambient background */}
			<div className='absolute inset-0 bg-linear-to-b from-background via-secondary/10 to-background -z-10' />

			<div
				ref={sectionRef}
				className='max-w-4xl mx-auto px-4 text-center relative z-10'
			>
				<span className='text-primary font-semibold tracking-[0.25em] uppercase text-sm'>
					Chapter IV
				</span>

				<h2 className='text-4xl md:text-6xl font-serif font-bold text-foreground mt-4 mb-8'>
					Spreading the Sweetness
				</h2>

				<p className='text-lg md:text-xl text-muted-foreground leading-relaxed mb-14'>
					Today, Sweet Rose is more than a boutique. We are a community of
					dreamers who believe that the smallest bite can provide the biggest
					moment of joy. We invite you to join our journey, one petal at a time.
				</p>

				{/* STATS */}
				<div className='flex flex-wrap justify-center gap-10 mb-14'>
					{STATS.map(({ numeric, suffix, label }, i) => (
						<div key={label} className='flex items-center gap-10'>
							<StatItem
								numeric={numeric}
								suffix={suffix}
								label={label}
								animate={animate}
							/>

							{i < STATS.length - 1 && (
								<div className='w-px h-12 bg-border hidden sm:block' />
							)}
						</div>
					))}
				</div>

				{/* CTA */}
				<Link
					href='/shop'
					className='inline-flex items-center justify-center px-10 py-4 rounded-full bg-primary text-primary-foreground font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300'
				>
					Start Your Story
				</Link>
			</div>
		</section>
	)
}

export default TheCommunity
