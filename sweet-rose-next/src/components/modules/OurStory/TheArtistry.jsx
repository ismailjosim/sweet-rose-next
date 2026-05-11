const PROCESS = [
	{
		step: 1,
		title: 'Slow Fermentation',
		description:
			'Our doughs rest for 24 hours to develop a complexity of flavor that cannot be rushed by modern industry.',
	},
	{
		step: 2,
		title: 'Bespoke Infusions',
		description:
			'Each batch is cold-infused with botanical extracts made in-house, ensuring the soul of the rose remains intact.',
	},
	{
		step: 3,
		title: 'Hand-Painted Details',
		description:
			'Every macaron and truffle is a canvas, finished with edible gold leaf and botanical dustings by our artisans.',
	},
]

const TheArtistry = () => (
	<section className='relative py-24 bg-background overflow-hidden transition-colors duration-300'>
		{/* Background gradient (theme-safe) */}
		<div className='absolute inset-0 bg-linear-to-br from-background via-secondary/10 to-background -z-10' />

		<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
			<div className='grid lg:grid-cols-2 gap-16 items-center'>
				{/* IMAGE */}
				<div className='relative flex justify-center lg:order-1'>
					{/* soft glow circle */}
					<div className='absolute inset-0 flex items-center justify-center -z-10'>
						<div className='w-[120%] h-[120%] rounded-full bg-primary/5 blur-2xl' />
					</div>

					<img
						src='https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=800&auto=format&fit=crop'
						alt='Artisan Baking'
						className='rounded-[3rem] w-full border border-border shadow-xl transition-transform duration-300 hover:scale-[1.02]'
					/>
				</div>

				{/* TEXT */}
				<div className='lg:order-2'>
					<span className='text-primary font-semibold tracking-[0.25em] uppercase text-sm'>
						Chapter III
					</span>

					<h2 className='text-4xl md:text-5xl font-serif font-bold text-foreground mt-4 mb-10'>
						Crafted by Hand, <br /> Never by Machine
					</h2>

					<div className='space-y-8'>
						{PROCESS.map(({ step, title, description }) => (
							<div
								key={step}
								className='flex gap-6 items-start group transition-transform duration-300 hover:translate-x-1'
							>
								{/* STEP */}
								<div className='shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold bg-primary text-primary-foreground shadow-md'>
									{step}
								</div>

								{/* CONTENT */}
								<div>
									<h4 className='font-semibold text-lg text-foreground mb-2'>
										{title}
									</h4>
									<p className='text-muted-foreground leading-relaxed'>
										{description}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	</section>
)

export default TheArtistry
