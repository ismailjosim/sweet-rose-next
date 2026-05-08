'use client'

import { useState } from 'react'
import Image from 'next/image'

const ProductImage = ({ image, title, isBestSeller = true }) => {
	const [mainImage, setMainImage] = useState(image)

	// Mock thumbnail data - replace with actual product data
	const thumbnails = [
		image,
		'https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=200',
		'https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=200',
	]

	return (
		<div className='space-y-6'>
			{/* Main Image */}
			<div className='relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white'>
				<Image
					src={mainImage}
					alt={title}
					fill
					className='w-full h-full object-cover'
				/>
				{isBestSeller && (
					<div className='absolute top-6 right-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg'>
						<span className='text-rose-600 font-bold text-sm tracking-widest uppercase'>
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
						className={`aspect-square rounded-2xl border-4 overflow-hidden cursor-pointer transition-all ${
							mainImage === thumb
								? 'border-rose-400'
								: 'border-transparent hover:border-rose-200'
						}`}
					>
						<Image
							src={thumb}
							alt={`${title} view ${idx + 1}`}
							width={200}
							height={200}
							className={`w-full h-full object-cover ${
								mainImage !== thumb && 'opacity-70 hover:opacity-100'
							}`}
						/>
					</button>
				))}
				<button className='aspect-square rounded-2xl bg-white border-2 border-rose-100 flex items-center justify-center text-rose-300 font-bold text-sm cursor-pointer hover:bg-rose-50 transition-colors'>
					+4 More
				</button>
			</div>
		</div>
	)
}

export default ProductImage
