'use client'

import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { Star } from 'lucide-react'
import { useCallback, useMemo } from 'react'

const reviews = [
	{
		name: 'Ayesha Rahman',
		role: 'Food Blogger',
		comment:
			'Absolutely magical desserts! The rose cake felt like art you can eat. 10/10 experience.',
		rating: 5,
	},
	{
		name: 'John Carter',
		role: 'Chef Enthusiast',
		comment:
			'The macarons are next level. Light, flavorful, and beautifully crafted.',
		rating: 4.8,
	},
	{
		name: 'Sara Ahmed',
		role: 'Customer',
		comment:
			'Best bakery experience I’ve had. Everything feels premium and fresh.',
		rating: 5,
	},
	{
		name: 'Michael Lee',
		role: 'Designer',
		comment:
			'The design of both the shop and desserts is stunning. Love the branding.',
		rating: 4.9,
	},
]

const ReviewsSection = () => {
	// 👇 Autoplay plugin (loop + delay)
	const autoplay = useMemo(
		() =>
			Autoplay({
				delay: 3000,
				stopOnInteraction: false,
				stopOnMouseEnter: true,
			}),
		[],
	)

	const [emblaRef, emblaApi] = useEmblaCarousel(
		{
			loop: true,
			align: 'start',
		},
		[autoplay],
	)

	const scrollPrev = useCallback(() => {
		if (emblaApi) emblaApi.scrollPrev()
	}, [emblaApi])

	const scrollNext = useCallback(() => {
		if (emblaApi) emblaApi.scrollNext()
	}, [emblaApi])

	return (
		<section className='py-24 bg-background text-foreground'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				{/* Header */}
				<div className='text-center mb-12'>
					<span className='inline-block px-4 py-1.5 mb-4 text-sm font-semibold uppercase tracking-wider bg-secondary text-secondary-foreground rounded-full'>
						Testimonials
					</span>

					<h2 className='text-4xl lg:text-5xl font-serif font-bold mb-3'>
						What Our Customers Say
					</h2>

					<p className='text-muted-foreground max-w-xl mx-auto'>
						Real experiences from people who tasted our sweet creations.
					</p>
				</div>

				{/* Slider */}
				<div className='relative overflow-hidden' ref={emblaRef}>
					<div className='flex'>
						{reviews.map((review, index) => (
							<div
								key={index}
								className='min-w-full md:min-w-[50%] lg:min-w-[33.33%] px-4'
							>
								<div className='bg-card border border-border rounded-3xl p-6 shadow-sm hover:shadow-md transition h-full'>
									{/* Stars */}
									<div className='flex items-center gap-1 text-primary mb-4'>
										{[...Array(5)].map((_, i) => (
											<Star
												key={i}
												size={16}
												fill={
													i < Math.floor(review.rating)
														? 'currentColor'
														: 'none'
												}
											/>
										))}
									</div>

									{/* Comment */}
									<p className='text-muted-foreground mb-6 leading-relaxed'>
										&quot;{review.comment}&quot;
									</p>

									{/* User */}
									<div>
										<h4 className='font-bold text-foreground'>{review.name}</h4>
										<p className='text-sm text-muted-foreground'>
											{review.role}
										</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Controls */}
				<div className='flex justify-center gap-4 mt-8'>
					<button
						onClick={scrollPrev}
						className='px-4 py-2 rounded-full border border-border bg-card hover:bg-hover transition'
					>
						←
					</button>

					<button
						onClick={scrollNext}
						className='px-4 py-2 rounded-full border border-border bg-card hover:bg-hover transition'
					>
						→
					</button>
				</div>
			</div>
		</section>
	)
}

export default ReviewsSection
