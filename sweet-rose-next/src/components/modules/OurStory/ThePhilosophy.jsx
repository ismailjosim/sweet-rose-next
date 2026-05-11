const INGREDIENTS = [
	{
		emoji: '🌹',
		title: 'Organic Petals',
		description:
			'We source only food-grade, pesticide-free roses from sustainable family farms across the Mediterranean.',
	},
	{
		emoji: '🍯',
		title: 'Raw Wild Honey',
		description:
			'Our sweetness comes from unfiltered wildflower honey, preserving the natural enzymes and deep floral aromatics.',
	},
	{
		emoji: '🧈',
		title: 'Grass-Fed Dairy',
		description:
			'Pure, cultured butter and heavy creams provide the velvet texture that defines the Sweet Rose signature.',
	},
]

const ThePhilosophy = () => (
	<section className='bg-secondary py-24 transition-colors duration-300'>
		<div className='text-center container mx-auto'>
			<span className='text-primary font-semibold tracking-[0.25em] uppercase text-sm'>
				Chapter II
			</span>

			<h2 className='text-4xl md:text-5xl font-serif font-bold text-foreground mt-4 mb-16'>
				Our Sacred Ingredients
			</h2>

			<div className='grid md:grid-cols-3 gap-8 lg:gap-10'>
				{INGREDIENTS.map(({ emoji, title, description }) => (
					<div
						key={title}
						className='group rounded-3xl border border-border bg-card p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300'
					>
						<div
							className='
								w-18 h-18 rounded-2xl mx-auto mb-6
								flex items-center justify-center text-3xl
								bg-primary/10 border border-primary/20
								group-hover:scale-110 transition-transform duration-300
							'
						>
							{emoji}
						</div>

						<h3 className='text-2xl font-serif font-semibold text-card-foreground mb-4'>
							{title}
						</h3>

						<p className='text-muted-foreground leading-relaxed text-sm md:text-base'>
							{description}
						</p>
					</div>
				))}
			</div>
		</div>
	</section>
)

export default ThePhilosophy
