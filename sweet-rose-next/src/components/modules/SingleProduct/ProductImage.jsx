'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Plus } from 'lucide-react'

const ProductImage = ({ image, title, isBestSeller = true }) => {
	const [mainImage, setMainImage] = useState(image)

	// Mock thumbnails (replace with real product data later)
	const thumbnails = [
		image,
		'https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=200',
		'https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=200',
	]

	return (
		<div className='space-y-6'>
			{/* Main Image */}
			<div className='relative aspect-square overflow-hidden rounded-3xl border border-border bg-card shadow-xl'>
				<Image
					src={mainImage}
					alt={title}
					fill
					className='object-cover'
					priority
				/>

				{isBestSeller && (
					<div className='absolute right-4 top-4 rounded-full border border-border bg-background/80 px-4 py-2 backdrop-blur-md'>
						<span className='text-xs font-bold tracking-widest text-primary uppercase'>
							Best Seller
						</span>
					</div>
				)}
			</div>

			{/* Thumbnails */}
			<div className='grid grid-cols-4 gap-4'>
				{thumbnails.map((thumb, idx) => (
					<button
						key={idx}
						onClick={() => setMainImage(thumb)}
						className={`group relative aspect-square overflow-hidden rounded-2xl border transition-all ${
							mainImage === thumb
								? 'border-primary'
								: 'border-border hover:border-primary/40'
						}`}
					>
						<Image
							src={thumb}
							alt={`${title} view ${idx + 1}`}
							width={200}
							height={200}
							className={`h-full w-full object-cover transition-opacity ${
								mainImage !== thumb ? 'opacity-70 group-hover:opacity-100' : ''
							}`}
						/>
					</button>
				))}

				{/* More button */}
				<button className='flex aspect-square items-center justify-center rounded-2xl border border-border bg-card text-muted-foreground transition-all hover:border-primary/40 hover:text-primary'>
					<Plus className='h-5 w-5' />
				</button>
			</div>
		</div>
	)
}

export default ProductImage
