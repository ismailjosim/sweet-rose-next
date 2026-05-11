'use client'
import Image from 'next/image'
import { Card, CardContent, CardFooter } from '@heroui/react'
import { Star } from 'lucide-react'
import Link from 'next/link'

const ProductCard = ({ product }) => {
	return (
		<Card className='group relative overflow-hidden rounded-3xl border border-rose-100 bg-white shadow-sm hover:shadow-md hover:-translate-y-2 transition-all duration-500'>
			{/* TOP IMAGE AREA */}
			<div className='relative aspect-square overflow-hidden bg-rose-50'>
				<Image
					src={product.image}
					alt={product.title}
					fill
					className='object-cover group-hover:scale-110 transition-transform duration-700 ease-out'
				/>

				{/* TAG */}
				{product.tag && (
					<span className='absolute top-4 left-4 bg-white/90 backdrop-blur-md text-rose-600 text-xs font-bold px-3 py-1 rounded-full shadow-sm uppercase tracking-wider'>
						{product.tag}
					</span>
				)}

				{/* FLOATING ADD BUTTON (like your image) */}
				{/* <button
					onClick={() => onAddToCart?.(product.id)}
					className='
						absolute bottom-4 right-4
						w-12 h-12
						bg-rose-600 text-white
						rounded-full
						flex items-center justify-center
						shadow-lg
						opacity-0 translate-y-3
						group-hover:opacity-100 group-hover:translate-y-0
						transition-all duration-300
						hover:bg-rose-700 hover:scale-110
					'
				>
					<Plus size={20} />
				</button> */}
			</div>

			{/* CONTENT */}
			<CardContent className='p-5'>
				<div className='flex items-center justify-between mb-2'>
					<span className='text-xs font-bold text-rose-400 uppercase tracking-widest'>
						{product.category}
					</span>

					{/* rating */}
					<div className='flex items-center gap-1 text-amber-400 text-xs font-bold'>
						<Star />
						<span>{product.rating}</span>
					</div>
				</div>

				<h3 className=' text-lg font-bold text-rose-900 group-hover:text-rose-600 transition-colors'>
					{product.title}
				</h3>

				<p className='text-sm text-slate-500 mt-2 line-clamp-2'>
					{product.description}
				</p>
			</CardContent>

			{/* FOOTER */}
			<CardFooter className='px-5 pb-5 flex items-center justify-between'>
				<span className='text-xl font-bold text-rose-700'>
					${product.price.toFixed(2)}
				</span>

				<Link
					href={`/products/${product.id}`}
					className='text-sm font-bold text-rose-600 hover:text-rose-800 transition'
				>
					View Details
				</Link>
			</CardFooter>
		</Card>
	)
}

export default ProductCard
