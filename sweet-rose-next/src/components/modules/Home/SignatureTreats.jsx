import ProductCard from '../Shared/ProductCard'

const SignatureTreats = async () => {
	const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/data.json`, {
		cache: 'no-store',
	})

	const products = await res.json()
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
				{products.slice(0, 3).map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
			</div>
		</section>
	)
}

export default SignatureTreats
