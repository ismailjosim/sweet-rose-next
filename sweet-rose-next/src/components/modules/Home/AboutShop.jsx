const AboutShop = () => {
	return (
		<section className='py-24 bg-background text-foreground transition-colors duration-300 relative overflow-hidden'>
			<div className='container mx-auto'>
				{/* Section Header */}
				<div className='text-center mb-16'>
					<span className='inline-block px-4 py-1.5 mb-4 text-sm font-semibold uppercase tracking-wider bg-secondary text-secondary-foreground rounded-full'>
						Our Story
					</span>

					<h2 className='text-4xl lg:text-5xl font-serif font-bold mb-4'>
						A Sweet Experience, Crafted Differently
					</h2>

					<p className='max-w-2xl mx-auto text-muted-foreground'>
						We are more than a bakery — we are a destination for handcrafted
						emotions, where every bite tells a story of elegance and flavor.
					</p>
				</div>

				{/* Content Grid */}
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
					{/* Left Side - Text */}
					<div>
						<h3 className='text-2xl font-serif font-bold mb-4'>
							Where Roses Meet Pastry
						</h3>

						<p className='text-muted-foreground mb-6 leading-relaxed'>
							Sweet Rose Boutique was born from a passion for blending floral
							elegance with artisanal baking. Every creation is inspired by
							nature, crafted with precision, and designed to bring joy in its
							purest form.
						</p>

						<p className='text-muted-foreground mb-8 leading-relaxed'>
							From small gatherings to grand celebrations, we believe desserts
							should be unforgettable — visually stunning and emotionally
							satisfying.
						</p>

						<button className='px-6 py-3 bg-primary text-primary-foreground rounded-full font-bold hover:opacity-90 transition'>
							Explore Our Collection
						</button>
					</div>

					{/* Right Side - Feature Cards */}
					<div className='relative'>
						{/* Floating glow */}
						<div className='absolute -inset-4 bg-primary/10 blur-3xl rounded-full'></div>

						<div className='grid gap-6 relative'>
							{/* Card 1 */}
							<div className='bg-card border border-border rounded-2xl p-6 shadow-md hover:shadow-xl transition'>
								<h4 className='font-bold text-lg mb-2'>
									🌹 Artisan Craftsmanship
								</h4>
								<p className='text-muted-foreground text-sm'>
									Every dessert is handmade with precision and artistic care.
								</p>
							</div>

							{/* Card 2 */}
							<div className='bg-card border border-border rounded-2xl p-6 shadow-md hover:shadow-xl transition'>
								<h4 className='font-bold text-lg mb-2'>
									🍰 Premium Ingredients
								</h4>
								<p className='text-muted-foreground text-sm'>
									We use only the finest natural and organic ingredients.
								</p>
							</div>

							{/* Card 3 */}
							<div className='bg-card border border-border rounded-2xl p-6 shadow-md hover:shadow-xl transition'>
								<h4 className='font-bold text-lg mb-2'>
									✨ Elegant Experience
								</h4>
								<p className='text-muted-foreground text-sm'>
									From packaging to flavor, everything is designed to delight.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default AboutShop
