'use client'

import ProductCard from '../Shared/ProductCard'

const products = [
	{
		id: 1,
		title: 'Rose Velvet Dream Cake',
		description:
			'Rich velvet cake infused with rose essence and creamy frosting layers.',
		price: 45,
		image: 'https://placehold.co/600x600/ffe4e6/be123c?text=Rose+Cake',
		tag: 'Best Seller',
		category: 'Cakes',
		rating: 4.9,
		reviews: 124,
	},
	{
		id: 2,
		title: 'Sparkling Macarons',
		description:
			'Delicate French macarons with floral and berry-infused fillings.',
		price: 24.5,
		image: 'https://placehold.co/600x600/ffe4e6/be123c?text=Macarons',
		tag: 'Gourmet',
		category: 'Pastries',
		rating: 4.8,
		reviews: 89,
	},
	{
		id: 3,
		title: 'Hibiscus Infused Honey',
		description:
			'Natural honey blended with hibiscus for a floral citrus taste.',
		price: 18,
		image: 'https://placehold.co/600x600/ffe4e6/be123c?text=Honey',
		tag: 'Artisan',
		category: 'Specialty',
		rating: 5.0,
		reviews: 56,
	},
]

const SignatureTreats = () => {
	return (
		<section className='container mx-auto py-20'>
			{/* Header */}
			<div className='text-center mb-12'>
				<h2 className='text-3xl font-serif font-bold text-rose-900 mb-2'>
					Our Signature Collection
				</h2>
				<p className='text-slate-500'>
					Curated desserts crafted for unforgettable sweet moments
				</p>
			</div>
			{/* Grid */}
			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
				{products.map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
			</div>
			{/* <div className='flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6'>
				<div>
					<h2 className='text-3xl font-serif font-bold text-rose-900 mb-2'>
						Signature Treats
					</h2>
					<p className='text-slate-500'>
						Filter through our garden of delights
					</p>
				</div>

				<div className='flex gap-2 flex-wrap'>
					<button className='px-6 py-2 rounded-full bg-rose-600 text-white font-medium'>
						All Treats
					</button>
					<button className='px-6 py-2 rounded-full border border-rose-200 text-rose-700 hover:bg-rose-50'>
						Cakes
					</button>
					<button className='px-6 py-2 rounded-full border border-rose-200 text-rose-700 hover:bg-rose-50'>
						Pastries
					</button>
					<button className='px-6 py-2 rounded-full border border-rose-200 text-rose-700 hover:bg-rose-50'>
						Specialty
					</button>
				</div>
			</div> */}
		</section>
	)
}

export default SignatureTreats
