const TheRoot = () => (
	<div className='bg-surface py-24 border-t border-border'>
		<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
			<div className='grid lg:grid-cols-2 gap-16 items-center'>
				{/* Image */}
				<div className='order-2 lg:order-1 relative'>
					<div className='absolute -top-10 -left-10 w-40 h-40 bg-accent-soft rounded-full opacity-50 blur-3xl' />
					<img
						src='https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=800&auto=format&fit=crop'
						alt='The Founder'
						className='relative z-10 rounded-[3rem] shadow-2xl border-8 border-border w-full'
					/>
					<div className='absolute -bottom-6 -right-6 bg-secondary-foreground dark:bg-secondary border-4 text-accent-foreground p-8 rounded-3xl shadow-xl z-20 hidden md:block'>
						<p className='text-3xl font-serif font-bold italic'>Est. 2018</p>
					</div>
				</div>

				{/* Text */}
				<div className='order-1 lg:order-2'>
					<span className='text-accent font-bold tracking-widest uppercase text-sm'>
						Chapter I
					</span>
					<h2 className='text-4xl md:text-5xl font-serif font-bold text-foreground mt-4 mb-6'>
						A Garden of Flour & Petals
					</h2>
					<p className='text-lg text-muted-foreground leading-relaxed mb-6'>
						Sweet Rose began in a small sun-drenched kitchen in the heart of
						Provence. Our founder, Clara Rose, believed that baking was more
						than just chemistry—it was an expression of the natural world.
					</p>
					<p className='text-lg text-muted-foreground leading-relaxed'>
						Inspired by her grandmother&apos;s rose garden, she started infusing
						delicate floral notes into classic pastries, creating a sensory
						experience that captures the ephemeral beauty of a bloom.
					</p>
				</div>
			</div>
		</div>
	</div>
)

export default TheRoot
