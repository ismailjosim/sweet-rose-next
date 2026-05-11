import { Star } from 'lucide-react'

const ProductInfo = ({ product }) => {
	const rating = product.rating || 4.9
	const reviewCount = product.reviews || product.reviewCount || 128

	return (
		<div className='mb-8 space-y-5'>
			{/* Category + Rating */}
			<div className='flex flex-col gap-3'>
				<div className='flex items-center justify-between gap-3'>
					{/* Category */}
					<span className='rounded-full border border-border bg-muted px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary'>
						{product.category}
					</span>

					{/* Rating */}
					<div className='flex items-center gap-1 text-muted-foreground'>
						<Star className='h-5 w-5 fill-primary text-primary' />

						<span className='ml-1 font-semibold text-foreground'>{rating}</span>

						<span className='ml-1 text-sm text-muted-foreground'>
							({reviewCount} reviews)
						</span>
					</div>
				</div>
			</div>

			{/* Title + Price */}
			<div>
				<h1 className='mb-4 font-serif text-4xl font-bold leading-tight text-foreground md:text-5xl'>
					{product.title}
				</h1>

				<p className='mb-6 text-3xl font-bold text-primary'>
					${product.price.toFixed(2)}
				</p>
			</div>

			{/* Description */}
			<p className='text-lg leading-relaxed text-muted-foreground'>
				{product.description}
			</p>
		</div>
	)
}

export default ProductInfo
