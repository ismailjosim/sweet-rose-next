const MeetOurChef = () => {
	return (
		<section className='py-20 bg-background text-foreground transition-colors duration-300'>
			<div className='container mx-auto'>
				{/* Section Header */}
				<div className='text-center mb-14'>
					<span className='inline-block px-4 py-1.5 mb-4 text-sm font-semibold uppercase tracking-wider bg-secondary text-secondary-foreground rounded-full'>
						Behind the Magic
					</span>

					<h2 className='text-4xl lg:text-5xl font-serif font-bold mb-4'>
						Meet Our Chef
					</h2>

					<p className='max-w-2xl mx-auto text-muted-foreground'>
						The heart behind every creation — blending passion, precision, and a
						love for sweetness.
					</p>
				</div>

				{/* Chef Card */}
				<div className='flex justify-center'>
					<div className='relative w-full max-w-3xl group'>
						{/* Glow Background */}
						<div className='absolute -inset-1 bg-primary/20 blur-2xl rounded-3xl opacity-70 group-hover:opacity-100 transition'></div>

						<div className='relative bg-card border border-border rounded-3xl overflow-hidden shadow-xl flex flex-col md:flex-row'>
							{/* Image Side */}
							<div className='md:w-1/2 h-72 md:h-auto overflow-hidden'>
								<img
									src='https://placehold.co/600x800/ffe4e6/e11d48?text=Chef'
									alt='Chef'
									className='w-full h-full object-cover transform group-hover:scale-105 transition duration-700'
								/>
							</div>

							{/* Content Side */}
							<div className='p-8 md:w-1/2 flex flex-col justify-center'>
								<h3 className='text-2xl font-serif font-bold mb-2'>
									Chef Amira Rose
								</h3>

								<p className='text-primary font-semibold mb-4'>
									Pastry & Dessert Artisan
								</p>

								<p className='text-muted-foreground mb-6 leading-relaxed'>
									With over 12 years of experience in fine patisserie, Chef
									Amira blends floral inspirations with modern dessert artistry
									to create unforgettable sweet experiences.
								</p>

								{/* Stats */}
								<div className='flex gap-6 mb-6'>
									<div>
										<p className='text-2xl font-bold text-primary'>12+</p>
										<p className='text-sm text-muted-foreground'>
											Years Experience
										</p>
									</div>
									<div>
										<p className='text-2xl font-bold text-primary'>50+</p>
										<p className='text-sm text-muted-foreground'>
											Signature Recipes
										</p>
									</div>
								</div>

								{/* Button */}
								<button className='px-6 py-3 bg-primary text-primary-foreground rounded-full font-bold hover:opacity-90 transition'>
									Explore Creations
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default MeetOurChef
