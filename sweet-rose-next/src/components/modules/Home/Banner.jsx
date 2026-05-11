import Link from 'next/link'

const Banner = () => {
	return (
		<header className='relative overflow-hidden h-screen pt-16 pb-20 lg:pt-24 lg:pb-32 bg-background text-foreground transition-colors duration-300'>
			{/* Background image */}
			<div className="absolute inset-0 bg-[url('/banner.jpg')] bg-center bg-cover" />

			{/* Gradient overlay (FIXED) */}
			<div className='absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-background/60' />

			{/* Soft decorative layer */}
			<div className='absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-10 pointer-events-none'>
				<svg
					className='w-full h-full'
					viewBox='0 0 100 100'
					preserveAspectRatio='none'
				>
					<circle cx='15' cy='20' r='18' fill='var(--primary)' />
					<circle cx='85' cy='75' r='14' fill='var(--primary)' />
					<circle cx='50' cy='50' r='28' fill='var(--primary)' />
				</svg>
			</div>

			{/* Content */}
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full flex items-center'>
				<div className='text-center w-full text-white'>
					{/* Badge */}
					<span className='inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider uppercase rounded-full bg-primary/20 text-primary border border-primary/30 backdrop-blur-md'>
						Artisan Confectionery
					</span>

					{/* Heading */}
					<h1 className='text-5xl lg:text-7xl font-serif font-bold mb-8 leading-tight text-white'>
						Sweet Moments, <br />
						<span className='italic text-primary'>Baked with Love.</span>
					</h1>

					{/* Description */}
					<p className='max-w-2xl mx-auto text-lg text-white/80 mb-10'>
						Handcrafted delights inspired by the delicate beauty of roses. From
						velvet cakes to infused honeys, experience the essence of sweetness.
					</p>

					{/* Buttons */}
					<div className='flex flex-wrap justify-center gap-4'>
						<Link
							href='/shop'
							className='px-8 py-4 bg-primary text-primary-foreground font-bold rounded-full shadow-lg hover:opacity-90 hover:-translate-y-1 transition-all'
						>
							Explore Collection
						</Link>

						<button className='px-8 py-4 bg-white/10 text-white font-bold rounded-full border border-white/20 backdrop-blur-md hover:bg-white/20 transition-all'>
							Meet Our Chef
						</button>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Banner
