import Link from 'next/link'

const STATS = [
	{ value: '50k+', label: 'Hearts Won' },
	{ value: '12', label: 'Garden Partners' },
	{ value: '100%', label: 'Handmade' },
]

const TheCommunity = () => (
	<section className='relative py-24 bg-background overflow-hidden transition-colors duration-300'>
		{/* soft ambient background */}
		<div className='absolute inset-0 bg-linear-to-b from-background via-secondary/10 to-background -z-10' />

		<div className='max-w-4xl mx-auto px-4 text-center relative z-10'>
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
				{STATS.map(({ value, label }, i) => (
					<div key={label} className='flex items-center gap-10'>
						<div className='text-center'>
							<div className='text-4xl md:text-5xl font-serif font-bold text-primary'>
								{value}
							</div>
							<div className='text-xs md:text-sm font-semibold text-muted-foreground uppercase tracking-widest mt-2'>
								{label}
							</div>
						</div>

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

export default TheCommunity
